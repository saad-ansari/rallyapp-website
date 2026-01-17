# Step 1: App Store Accounts Setup (Organization)
**⏱️ Time:** 2 hours total (+ 3-7 days waiting for Apple approval)  
**💰 Cost:** $124 ($99 Apple + $25 Google)  
**🔴 Priority:** CRITICAL - Do this TODAY

---

## Why Organization Accounts? (MowWow Limited)

**You're building a real startup, not a side project.** Use your company (MowWow Limited) for:

✅ **Professional credibility:** "MowWow Limited" looks trustworthy vs individual name  
✅ **Investor-ready:** If you raise funding, app is already owned by company  
✅ **Team-ready:** When hiring, company owns IP (not you personally)  
✅ **No transfer needed:** Avoids migrating users later (painful process)  
✅ **Same cost:** $99/year (no extra fee for Organization)

**Only trade-off:** Takes 3-7 days instead of 24-48 hours. But you have 8 weeks to launch, so start NOW and you're fine.

---

## Why This Is Critical

**You CANNOT launch without these accounts.** Apple Organization approval takes 3-7 days (requires D-U-N-S number + company verification). If you wait until Week 6 to apply, you'll delay your entire launch.

---

## Part 1: Apple Developer Program (iOS)

### Account Type Decision

**Individual vs Organization:**

| Feature | Individual | Organization |
|---------|-----------|--------------|
| **Approval Time** | 24-48 hours | 3-7 business days |
| **Cost** | $99/year | $99/year |
| **Requirements** | Government ID | D-U-N-S number, legal docs |
| **Developer Name** | Your full name | Company name |
| **Best For** | Solo devs, side projects | Registered companies, startups |

**Recommendation for Rally:** **Organization (MowWow Limited)** ⭐

**Why you should use Organization:**
- ✅ You already have MowWow Limited registered as a company
- ✅ "MowWow Limited" looks professional vs individual name
- ✅ Investor-ready (if you raise funding, app is owned by company)
- ✅ Team-ready (when hiring, company owns IP not individual)
- ✅ Same cost ($99/year - no premium)
- ✅ No need to transfer later (saves hassle)

**Only downside:** Takes 3-7 days instead of 24-48 hours. But you have 8 weeks to launch, so start NOW and you'll be fine.

---

### Step-by-Step: Apply for Apple Developer Program (Organization)

**1. Get your D-U-N-S Number for MowWow Limited**

**What is D-U-N-S?** A unique 9-digit business identifier. Apple requires this to verify your company exists.

- Go to: [developer.apple.com/enroll/duns-lookup](https://developer.apple.com/enroll/duns-lookup)
- Enter: **MowWow Limited** + company registered address
- If found → Note the D-U-N-S number
- If not found → Request one (FREE, takes 1-5 business days)

**2. Go to:** [developer.apple.com/programs/enroll](https://developer.apple.com/programs/enroll)

**3. Sign in with Apple ID**
- Use professional Apple ID (create new one with hello@rallyapp.me if needed)
- Enable Two-Factor Authentication (required)

**4. Click "Enroll" → Choose "Organization"**

**5. Fill Company Information**
- **Legal Entity Name:** MowWow Limited
  - EXACTLY as registered with Companies House
  - Include "Limited" (not "Ltd")
  
- **D-U-N-S Number:** [From step 1]

- **Registered Address:** MowWow Limited's official address from Companies House

- **Website:** rallyapp.me (or mowwow.com if you have one)

- **Phone Number:** Company phone (or your mobile)

- **Your Authority:** 
  - Are you legally authorized to bind MowWow Limited? **Yes**
  - Your name + title (e.g., "Director" or "Founder")

**6. Review & Agree to Terms**
- Apple Developer Program License Agreement

**7. Payment: $99/year**
- Enter credit card (company card preferred, or personal then expense)
- **Recurring:** Auto-renews annually unless cancelled
- **One-time:** $99 USD (~£79 depending on exchange rate)

**8. Submit for Review**
- Apple verifies:
  - MowWow Limited exists (via D-U-N-S + public records)
  - You have authority to represent company
  - All details match Companies House registry
- **Wait 3-7 business days** for approval email (check inbox + spam)

**Status:** ☐ Applied for Apple Developer Program (Organization - MowWow Limited)

---

### What Happens After Submitting?

**Day 1-2:** Apple processes payment and starts verification

**Day 2-5:** Apple verifies:
- MowWow Limited exists in public records
- D-U-N-S number matches company
- You have legal authority to bind the company

**Day 3-7:** Approval email arrives: "Your enrollment is complete"
- Check inbox + spam folder
- Subject line: "Apple Developer Program Enrollment"

**If it takes longer:** Apple may request additional documents:
- Certificate of Incorporation (from Companies House)
- Proof you're a Director
- Just reply quickly with requested docs

**Status:** ☐ Applied ☐ Approved (3-7 days) ☐ Access to App Store Connect confirmed

---

### Common Apple Developer Issues (Organization)

**Issue 1: "D-U-N-S number doesn't match company name"**
- You typed "MowWow Ltd" but D-U-N-S says "MowWow Limited"
- **Solution:** Enter EXACT legal name from Companies House (include "Limited")

**Issue 2: "We cannot verify your authority"**
- Apple can't confirm you're a Director/authorized rep
- **Solution:** Reply with Certificate of Incorporation showing you're Director

**Issue 3: "D-U-N-S number not found"**
- MowWow Limited not in Dun & Bradstreet database yet
- **Solution:** Request D-U-N-S (free via Apple's form, takes 1-5 days)

**Issue 4: "Payment declined"**
- Bank may flag as suspicious (international charge to Ireland)
- **Solution:** Call your bank, approve Apple.com charges, resubmit payment

**Issue 5: "Account under review for 10+ days"**
- Rare, but sometimes extra verification needed
- **Solution:** Call Apple Developer Support: +44-207-355-2712 (UK) or +1-800-633-2152 (US)

---

### After Apple Approval: Set Up App Store Connect

**Once approved, you'll get email: "Welcome to the Apple Developer Program"**

**1. Go to:** [appstoreconnect.apple.com](https://appstoreconnect.apple.com)

**2. Sign in** (same Apple ID)

**3. Create App Record:**
- Click "My Apps" → "+" → "New App"

**4. Fill App Information:**

**Platforms:** ☑ iOS (check the box)

**Name:** "Rally"  
- If "Rally" is taken, try: "Rally - Know Who Shows Up" or "Rally: Reliability Tracker"
- **Check availability:** Search existing apps, avoid exact duplicates

**Primary Language:** English (UK)

**Bundle ID:** Select from dropdown (must match your Xcode project)
- Should be: com.mowwow.rally or com.mowwow.rallyapp
- **Note:** This was set when you created the React Native project
- If not showing up, you'll need to add it in Certificates → Identifiers first

**SKU:** rally-ios-2026 (internal reference, users never see this)

**User Access:** Full Access (you control who can access this app in App Store Connect)

**Publisher:** MowWow Limited ✅ (automatically shows your Organization name)

**Primary Language:** English (UK) or English (US)  
- Choose based on your target market
- **Rally:** UK if you're UK-based, US for larger market

**Bundle ID:** com.rallyapp.rally  
- **MUST match** your Expo app.json `ios.bundleIdentifier`
- **Check your app.json:** Look for `"bundleIdentifier": "com.rallyapp.rally"`
- **Format:** Reverse domain notation (com.yourcompany.appname)
- **Cannot change later** - double-check spelling!

**SKU:** rally-ios-2026  
- Internal reference only (not public)
- Can be anything (numbers, letters, dashes)
- Used for reporting/analytics

**User Access:** Full Access (default)

**5. Click "Create"**

**You'll see:** Empty app record with tabs (App Information, Pricing, App Privacy, etc.)

**DON'T fill these yet:**
- Description, keywords, screenshots (wait for Week 3 ASO session)
- Just confirm the app record exists

**Status:** ☐ App Store Connect app record created

---

## Part 2: Google Play Developer Account (Android)

### Step-by-Step: Create Google Play Account (Organization)

**1. Go to:** [play.google.com/console/signup](https://play.google.com/console/signup)

**2. Sign in with Google Account**
- Use **hello@rallyapp.me** (or create new Google account with this email)
- **Why this email:** Public-facing, professional domain, forwards to your Gmail inbox

**3. Create Developer Account:**
- Click "Create account" → "Continue to account setup"

**4. Account Details:**

**Account Type:** Organization ⭐ (matches your Apple account)

**Developer Name:** MowWow Limited
- **Public-facing:** Shows on Play Store under app
- **IMPORTANT:** This is hard to change later, so use company name
- Users will see: "MowWow Limited" as publisher

**Organization Name:** MowWow Limited (same as developer name)

**Organization Address:** MowWow Limited's registered address
- Include full address (street, city, postcode, UK)
- Must match Companies House if you want verification badge

**Email Address:** hello@rallyapp.me  
- For Google to contact you (support, policy updates)

**Phone Number:** Company phone (or your personal mobile)

**Website:** https://rallyapp.me

**Country:** United Kingdom (or your location)

**5. Developer Distribution Agreement:**
- Read key points (you're responsible for app content, privacy policy, compliance)
- ☑ Check "I agree to the terms"

**6. Payment: $25 one-time fee**
- Enter credit card (company card or personal)
- **One-time:** Never renews (unlike Apple's $99/year)
- **Instant approval:** No waiting period

**7. (Optional) Verify Organization:**
- Google may offer "Verified Developer" badge
- Requires D-U-N-S number (you already have this from Apple!) + documents
- Adds checkmark badge to Play Store listing (increases trust 15-20%)
- Can do now or later

**8. Complete Account Setup:**
- **Instant access:** You can upload apps immediately
- Email confirmation: "Welcome to Google Play Console"
- Publisher name: **MowWow Limited** ✅

**Status:** ☐ Google Play Developer account created (Organization - MowWow Limited)

---

### Set Up Play Console App

**1. Go to:** [play.google.com/console](https://play.google.com/console)

**2. Click "Create app"**

**3. Fill App Details:**

**App name:** "Rally"  
- If taken, try: "Rally - Know Who Shows Up"

**Default language:** English (United Kingdom) or English (United States)

**App or game:** App

**Free or paid:** Free  
- Even if you plan in-app purchases later, select "Free"
- Cannot change Free → Paid later (but can add in-app purchases)

**Declarations:**
- ☑ "I declare this app complies with Google Play policies"
- ☑ "I declare this app complies with US export laws"

**4. Click "Create app"**

**You'll see:** Empty app dashboard with setup checklist

**DON'T fill these yet:**
- Store listing, screenshots, privacy policy (wait for Week 3)
- Just confirm the app exists in console

**Status:** ☐ Play Console app created

---

### Optional: Payment Merchant Account (For Future Monetization)

**When you need this:** When you add in-app purchases or paid features

**What it does:** Links bank account to receive revenue from app

**How to set up (later):**
1. Play Console → Settings → Payments profile
2. Link Google Payments merchant account
3. Provide bank details (routing number, account number)
4. Verify micro-deposits (Google sends 2 small deposits, you confirm amounts)

**Don't do this now** - wait until you're ready to monetize (10K+ users).

---

## Part 3: Bundle IDs & Package Names (Important!)

### iOS Bundle ID

**Where to find in your project:**
```
/Users/asma/rally-app/app.json
```

Look for:
```json
"ios": {
  "bundleIdentifier": "com.rallyapp.rally"
}
```

**MUST match App Store Connect Bundle ID**

**If they don't match:**
1. Update app.json to match App Store Connect
2. Run: `expo prebuild --clean` (regenerates native code)
3. Rebuild app

### Android Package Name

**Where to find in your project:**
```
/Users/asma/rally-app/app.json
```

Look for:
```json
"android": {
  "package": "com.rallyapp.rally"
}
```

**MUST match Play Console Package Name**

**If they don't match:**
1. Update app.json to match Play Console
2. Run: `expo prebuild --clean`
3. Rebuild app

---

## Checklist: What You Should Have Now

After completing this guide:

- [ ] **D-U-N-S Number:** Obtained for MowWow Limited
- [ ] **Apple Developer Program:** Applied as Organization (MowWow Limited), waiting 3-7 days
- [ ] **Apple Developer Program:** Approved ✅
- [ ] **App Store Connect:** Access confirmed, publisher shows "MowWow Limited"
- [ ] **Google Play Console:** Developer account created as Organization (MowWow Limited), $25 paid
- [ ] **Google Play Console:** Publisher name shows "MowWow Limited" ✅
- [ ] **Bundle IDs:** Verified match between app.json and store consoles
- [ ] **Consistency:** Both Apple & Google show "MowWow Limited" as publisher ✅
- [ ] **Calendar reminder:** Apple renewal in 1 year ($99 annual fee)

---

## Next Steps

### If Apple Approved (Within 7 days):
✅ Move to [Step 2: Product Hunt Setup](02-product-hunt-setup.md)

### If Apple Still Pending (After 7 days):
1. Check spam folder for Apple email
2. Check developer.apple.com/account for status
3. If "Under Review" for 10+ days → Call Apple Support (+44-207-355-2712 UK)

### If Apple Needs More Info:
1. Read email carefully (usually asks for company documents)
2. Reply with Certificate of Incorporation + proof you're Director
3. Usually approved within 24-48h of providing docs

### Meanwhile (Don't Wait for Apple):
- ✅ Google Play ready immediately
- ✅ Start [Product Hunt Setup](02-product-hunt-setup.md) (takes 2 months, start NOW)
- ✅ Start [Social Media Accounts](03-social-media-accounts.md) (setup in parallel)

---

## 🆘 Need Help?

**Stuck on something?**
- "Apple needs more documents, which ones do I send?"
- "Should I use my personal address or MowWow's registered address?"
- "My D-U-N-S lookup isn't working"
- "Google Play doesn't show 'Organization' option"

**Ask your Mentor agent (me)** - I'll help troubleshoot!

---

**Time to complete:** 1 hour (once approved, 5 mins to set up app records)

**Next:** [Step 2: Product Hunt Setup & Engagement](02-product-hunt-setup.md) 🚀
