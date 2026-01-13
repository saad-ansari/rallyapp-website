# Deep Linking Configuration

This directory contains configuration files for iOS Universal Links and Android App Links.

## Files

- `apple-app-site-association` - iOS Universal Links configuration
- `assetlinks.json` - Android App Links configuration

---

## iOS Setup (Apple Developer Account Required)

### 1. Get your Team ID
- Go to [developer.apple.com/account](https://developer.apple.com/account)
- Click "Membership" in the sidebar
- Copy your **Team ID** (10-character alphanumeric string)

### 2. Update apple-app-site-association
Replace `TEAM_ID` with your actual Team ID:

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "ABC1234DEF.com.rally.app",
        "paths": ["*"]
      }
    ]
  }
}
```

The format is: `TEAM_ID.BUNDLE_IDENTIFIER`

---

## Android Setup (Google Play Console / EAS Required)

### 1. Get your SHA256 Fingerprint

**For Debug builds:**
```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android | grep SHA256
```

**For Release builds (EAS):**
```bash
eas credentials --platform android
```
Then select your project and look for the SHA256 fingerprint.

**For Release builds (manual keystore):**
```bash
keytool -list -v -keystore your-release-key.keystore | grep SHA256
```

### 2. Update assetlinks.json
Replace `SHA256_FINGERPRINT_HERE` with your actual fingerprint:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.rally.app",
      "sha256_cert_fingerprints": [
        "14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"
      ]
    }
  }
]
```

**Note:** For production, you may need multiple fingerprints (debug + release).

---

## Verification

### iOS
Use Apple's validator:
```
https://app-site-association-validator.apple.com/
```

### Android
Use Google's tester:
```
https://developers.google.com/digital-asset-links/tools/generator
```

Or test via ADB:
```bash
adb shell am start -W -a android.intent.action.VIEW -d "https://rallyapp.me/join/TEST123" com.rally.app
```

---

## Troubleshooting

### iOS Links Not Working
1. Ensure the file is served with `Content-Type: application/json`
2. File must be accessible without redirects at `https://rallyapp.me/.well-known/apple-app-site-association`
3. Rebuild the app after changing `associatedDomains` in app.json
4. On device: Settings → Developer → Associated Domains Development (enable)

### Android Links Not Working
1. Verify fingerprint matches your signing key exactly
2. Check `autoVerify: true` is set in app.json intent filters
3. Clear app defaults: Settings → Apps → Rally → Open by default → Clear defaults
4. Rebuild the app after changes

---

## App Configuration Reference

The app's deep linking is configured in:
- `app.json` - iOS associatedDomains and Android intentFilters
- `src/navigation/linking.ts` - React Navigation deep link routes
- `src/navigation/RootNavigator.tsx` - Auth URL handler for Supabase callbacks
