# Rally Website

Landing page and marketing website for [Rally](https://rallyapp.me) - No Maybes. No Flakes. Plans that actually happen.

## Overview

This repository contains the static website for Rally, including:
- Landing page with early access signup
- Privacy Policy
- Terms of Service
- Deep linking configuration files for iOS and Android

## Live Site

**Production**: [https://rallyapp.me](https://rallyapp.me)

## Structure

```
├── index.html              # Main landing page
├── privacy.html            # Privacy Policy
├── terms.html              # Terms of Service
├── admin.html              # Admin utilities
├── CNAME                   # Custom domain config for GitHub Pages
├── .well-known/
│   ├── apple-app-site-association  # iOS Universal Links
│   ├── assetlinks.json             # Android App Links
│   └── README.md                   # Setup instructions
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── images/
│   └── ...                 # Logo and assets
└── TODO_LANDING_PAGE.md    # Improvement checklist
```

## Deep Linking Setup

The `.well-known/` directory contains configuration files for mobile deep linking:

### iOS Universal Links
- File: `.well-known/apple-app-site-association`
- Requires: Apple Developer Team ID
- See [.well-known/README.md](.well-known/README.md) for setup

### Android App Links
- File: `.well-known/assetlinks.json`
- Requires: SHA256 signing certificate fingerprint
- See [.well-known/README.md](.well-known/README.md) for setup

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Deployment

This site is hosted on **GitHub Pages** and deploys automatically when changes are pushed to the `main` branch.

### Custom Domain

The site uses the custom domain `rallyapp.me`, configured via:
1. `CNAME` file in this repo
2. DNS records pointing to GitHub Pages

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Landing | [/](https://rallyapp.me) | Main marketing page with early access signup |
| Privacy | [/privacy.html](https://rallyapp.me/privacy.html) | Privacy Policy |
| Terms | [/terms.html](https://rallyapp.me/terms.html) | Terms of Service |

## Future Improvements

See [TODO_LANDING_PAGE.md](TODO_LANDING_PAGE.md) for planned improvements including:
- App mockups and screenshots
- Testimonials section
- FAQ section
- Enhanced social proof

## Related Repositories

- [rally-app](https://github.com/saad-ansari/rally-app) - React Native mobile application

## License

This project is proprietary software. All rights reserved.
