# App Store Accounts Setup Guide for Rally

**Complete step-by-step guide for Apple & Google Play accounts**

---

## 🎯 QUICK ANSWER: Which Email to Use?

### ✅ RECOMMENDED EMAIL:
**Use: `dev@rallyapp.me`** (NEW - create this now)

### Why NOT `hello@rallyapp.me`:
- `hello@` is for customer support, general inquiries
- App Store sends TONS of technical emails (builds, rejections, updates)
- You don't want these mixed with customer emails
- Separation of concerns = better organization

### Why `dev@rallyapp.me`:
- ✅ Clear purpose (development/technical)
- ✅ Professional
- ✅ Under MowWow Limited domain
- ✅ Keeps App Store emails separate from support
- ✅ Easy to manage

---

## 📧 STEP 0: Create Developer Email (Do This First)

### Add New Email Forward in Cloudflare

**Go to:** Cloudflare Dashboard → rallyapp.me → Email Routing

**Add this route:**
- **Address:** `dev@rallyapp.me`
- **Forward to:** Your personal Gmail
- **Purpose:** Apple Developer, Google Play, TestFlight, technical stuff

**Also create (optional but recommended):**
- **Address:** `app@rallyapp.me`
- **Forward to:** Your personal Gmail  
- **Purpose:** Alternative/backup for app-related accounts

**Time:** 2 minutes  
**Status:** ☐ Complete

---

## 🍎 STEP 1: Apple Developer Account (iOS App Store)

### Account Type: Organization Account

**CRITICAL:** Must be under **MowWow Limited**, NOT your personal name (visa compliance)

---

### Part A: Get D-U-N-S Number (Required - Do First)

**What is D-U-N-S:**
- Unique business identifier (like company registration number)
- Required for Apple Developer Organization account
- **FREE** from Dun & Bradstreet
- Takes 2-3 weeks to get

**Go to:** developer.apple.com/enroll/duns-lookup

**Enter MowWow Limited details:**
- **Legal Entity Name:** MowWow Limited (EXACTLY as on Companies House)
- **Headquarters Address:** [Your registered company address from Companies House]
- **Mailing Address:** Same as above (unless different)
- **Business Contact:**
  - **Name:** [Your Wife's Full Name]
  - **Job Title:** Director
  - **Email:** dev@rallyapp.me
  - **Phone:** [Your wife's UK mobile]
- **Your Information:**
  - **Your Name:** [Your wife's name]
  - **Your Title:** Director
  - **Your Email:** dev@rallyapp.me
  - **Your Phone:** [Your wife's number]

**Submit → Wait 1-5 business days for D-U-N-S number**

**They will email:** dev@rallyapp.me (you'll receive in Gmail)

**Time:** 10 mins to submit, 2-3 weeks to receive  
**Status:** ☐ Complete

---

### Part B: Apple Developer Program Enrollment

**WAIT until you have D-U-N-S number, then:**

**Go to:** developer.apple.com/programs/enroll

**Click:** "Start Your Enrollment" → "Enroll as an Organization"

**Step 1: Sign in with Apple ID**
- **Option A:** Create NEW Apple ID with dev@rallyapp.me
- **Option B:** Use existing Apple ID, add dev@rallyapp.me as email

**I recommend Option A (new Apple ID):**

**Create Apple ID:**
- **Go to:** appleid.apple.com
- **Email:** dev@rallyapp.me
- **Password:** [Strong password - save in password manager]
- **Country:** United Kingdom
- **Birthday:** Use company formation date or Jan 1, 1990
- **Security Questions:** Answer and SAVE in password manager
- **Verify email:** Check Gmail (Cloudflare forwards it)

**Step 2: Organization Information**
- **Legal Entity Name:** MowWow Limited
- **D-U-N-S Number:** [Number you received]
- **Company Website:** https://rallyapp.me
- **Headquarters Phone:** [Your wife's mobile]
- **Organization Type:** Company/Organization
- **Headquarters Address:** [Companies House registered address]

**Step 3: Legal Agreement**
- Read Apple Developer Program License Agreement
- Your wife must be authorized to bind MowWow Limited
- Check box, agree

**Step 4: Purchase**
- **Cost:** $99/year (~£77)
- **Payment:** Use business credit/debit card if possible
  - **Cardholder:** MowWow Limited or your wife's name
  - **Billing Address:** Company registered address

**Step 5: Verification Call**
- Apple will call within 24-48 hours to verify
- **They'll call:** Your wife's phone
- **Questions they ask:**
  - "Are you [Wife's name], Director of MowWow Limited?"
  - "Did you apply for Apple Developer account?"
  - "What's your company website?"
  - "What type of app are you building?"
- **Answer:** "Yes, I'm the director. We're building Rally, a social coordination app."

**Step 6: Approval**
- Takes 24-72 hours after verification call
- You'll receive email at dev@rallyapp.me
- Account activated

**Time:** 30 mins enrollment, 2-5 days approval  
**Cost:** $99/year (£77)  
**Status:** ☐ Complete

---

### Part C: App Store Connect Setup

**After Apple Developer approval:**

**Go to:** appstoreconnect.apple.com

**Sign in:** With dev@rallyapp.me Apple ID

**Add Your App:**
- Click "+" → "New App"
- **Platform:** iOS
- **App Name:** Rally
- **Primary Language:** English (UK)
- **Bundle ID:** Create new → `me.rallyapp.rally` (or `com.mowowlimited.rally`)
- **SKU:** RALLY2025 (internal identifier, doesn't matter much)

**App Information:**
- **Category:** Primary: Social Networking, Secondary: Lifestyle
- **Developer Name:** MowWow Limited (auto-filled)
- **Privacy Policy URL:** https://rallyapp.me/privacy.html
- **App Store Icon:** 1024x1024px Rally icon
- **Description:** [Your app description]
- **Keywords:** reliability, friends, squad, events, social, plans, commitment
- **Support URL:** https://rallyapp.me
- **Marketing URL:** https://rallyapp.me

**Save as Draft** (don't submit until app is ready)

**Time:** 20 mins  
**Status:** ☐ Complete

---

## 🤖 STEP 2: Google Play Console Account (Android)

### Account Type: Organization Account

**Much simpler than Apple - approval usually in 24 hours**

---

### Part A: Create Google Account

**Go to:** accounts.google.com/signup

**Create account for your business:**
- **Name:** MowWow Limited (or use dev@rallyapp.me if it allows)
- **Email:** Choose username → dev@rallyapp.me
  - **NOTE:** Google might require @gmail.com for signup
  - **If so:** Create `mowowlimited.dev@gmail.com`, then add dev@rallyapp.me as recovery email

**Alternative (easier):**
- **Email:** dev@rallyapp.me
- **This creates:** Google account with dev@rallyapp.me
- **Verify:** Check Gmail for Google verification email (Cloudflare forwards it)

**Save credentials in password manager**

**Time:** 5 mins  
**Status:** ☐ Complete

---

### Part B: Google Play Console Enrollment

**Go to:** play.google.com/console/signup

**Sign in:** With dev@rallyapp.me Google account (or Gmail account you created)

**Step 1: Account Type**
- Select: **"Organization"**

**Step 2: Account Details**
- **Developer Name:** MowWow Limited
- **Email Address:** dev@rallyapp.me
- **Website:** https://rallyapp.me
- **Phone Number:** [Your wife's UK mobile]

**Step 3: Organization Details**
- **Organization Name:** MowWow Limited
- **Organization Type:** Company
- **Organization Address:**
  - **Street:** [Companies House address]
  - **City:** [Your city]
  - **Postcode:** [Your postcode]
  - **Country:** United Kingdom
- **Organization Size:** 1-10 employees
- **Developer Category:** App publisher

**Step 4: Identity Verification**
Google requires government-issued ID to verify:
- **Upload:** Your wife's UK driving license or passport
- **Name on ID must match:** Director name
- **Why:** Prevents fraud/spam developers

**Step 5: Payment**
- **One-time fee:** $25 (~£20) - NEVER expires (unlike Apple's yearly)
- **Payment method:** Credit/debit card
- **Cardholder:** Your wife or MowWow Limited

**Step 6: Developer Distribution Agreement**
- Read and accept Google Play Developer Distribution Agreement
- Your wife is authorized to sign on behalf of MowWow Limited

**Step 7: Submit for Review**
- Google reviews in 24-48 hours
- Usually approved quickly (much faster than Apple)
- You'll receive email at dev@rallyapp.me

**Time:** 20 mins enrollment, 24-48 hours approval  
**Cost:** $25 one-time (£20)  
**Status:** ☐ Complete

---

### Part C: Google Play Console Setup

**After approval:**

**Go to:** play.google.com/console

**Sign in:** With dev@rallyapp.me

**Create App:**
- Click "Create app"
- **App name:** Rally
- **Default language:** English (United Kingdom)
- **App or game:** App
- **Free or paid:** Free (you can monetize later with subscriptions)
- **Developer Program Policies:** Check box (you comply)
- **US export laws:** Check box

**App Dashboard:**
- **Set up your app:** Follow Google's checklist
  - App access (how users sign in)
  - Ads (will your app have ads? No for now)
  - Content rating (questionnaire - likely PEGI 3 or Teen)
  - Target audience (18+)
  - News apps (No)
  - COVID-19 apps (No)
  - Data safety (what data you collect)
  - App category: Social
  - Store listing (screenshots, descriptions)
  - Privacy policy URL: https://rallyapp.me/privacy.html

**Save as Draft** (don't publish until app is ready)

**Time:** 30 mins  
**Status:** ☐ Complete

---

## 📊 ACCOUNT SUMMARY

### What You'll Have Created:

| Account | Email | Cost | Renewal |
|---------|-------|------|---------|
| **Cloudflare Email** | dev@rallyapp.me | £0 | Free forever |
| **Apple Developer** | dev@rallyapp.me | $99/year | Annual |
| **App Store Connect** | dev@rallyapp.me | Included | N/A |
| **Google Play Console** | dev@rallyapp.me | $25 | One-time (never expires) |

**Total Setup Cost:** $124 (~£97)  
**Annual Cost:** $99/year (~£77) for Apple only

---

## 🔐 IMPORTANT: Save These Credentials

### Password Manager Entries:

**Apple ID (dev@rallyapp.me):**
- Email: dev@rallyapp.me
- Password: [your password]
- Security Questions: [save answers]
- 2FA: Enable and save backup codes
- Account Owner: MowWow Limited
- Purpose: Apple Developer, App Store Connect, TestFlight

**Google Account (dev@rallyapp.me or Gmail):**
- Email: dev@rallyapp.me (or mowowlimited.dev@gmail.com)
- Password: [your password]
- Recovery Email: [your personal Gmail]
- 2FA: Enable and save backup codes
- Account Owner: MowWow Limited
- Purpose: Google Play Console, Firebase, Android

**D-U-N-S Number:**
- Number: [save when you receive it]
- Company: MowWow Limited
- Where it's used: Apple Developer verification

**Companies House Info (for reference):**
- Company Number: [your number]
- Registered Address: [address]
- Director: [wife's name]

---

## ✅ COMPLETE SETUP CHECKLIST

### Pre-Requisites:
- [ ] Cloudflare email routing set up
- [ ] dev@rallyapp.me forwarding to Gmail
- [ ] Companies House registration details handy
- [ ] Your wife's ID ready (passport or driving license)
- [ ] Credit/debit card ready ($124 total)
- [ ] Password manager ready

### Apple Developer (2-4 weeks total):
- [ ] Apply for D-U-N-S number (Week 1-3)
- [ ] Receive D-U-N-S number
- [ ] Create Apple ID with dev@rallyapp.me
- [ ] Enroll in Apple Developer Program ($99)
- [ ] Complete verification call
- [ ] Receive approval (24-72 hours after call)
- [ ] Access App Store Connect
- [ ] Create app listing (draft)

### Google Play Console (1-3 days total):
- [ ] Create Google account (dev@rallyapp.me or Gmail)
- [ ] Enroll in Google Play Console ($25)
- [ ] Upload identity verification (wife's ID)
- [ ] Complete organization details
- [ ] Submit for review
- [ ] Receive approval (24-48 hours)
- [ ] Access Play Console
- [ ] Create app listing (draft)

---

## 🚨 COMMON ISSUES & SOLUTIONS

### Issue 1: "Email already in use" (Apple ID)
**Solution:** 
- Use variation: `developer@rallyapp.me` or `app@rallyapp.me`
- OR use `dev+apple@rallyapp.me` (Gmail ignores +tags but Apple sees as unique)

### Issue 2: D-U-N-S number delayed
**Solution:**
- Check spam folder for email from Dun & Bradstreet
- Call D&B UK: 0800 029 4481
- Give your company name and registration number

### Issue 3: Apple verification call missed
**Solution:**
- They'll try multiple times
- You can request a call: developer.apple.com/contact
- Have your wife available during business hours

### Issue 4: Google wants @gmail.com email
**Solution:**
- Create `mowowlimited.dev@gmail.com`
- Use this for Google Play sign-up
- Add dev@rallyapp.me as recovery email
- Both emails work interchangeably after setup

### Issue 5: Payment declined
**Solution:**
- Use personal card in your wife's name (you can reimburse from company later)
- Make sure billing address matches card's registered address
- Try different card if one fails

---

## 💡 PRO TIPS

### Tip 1: Enable 2FA Immediately
- **Apple:** Settings → Security → Two-Factor Authentication
- **Google:** Account → Security → 2-Step Verification
- **Save backup codes** in password manager

### Tip 2: Add Team Members Later
Once accounts are approved:
- **App Store Connect:** Add your personal email as "Developer" role
- **Google Play:** Add your email as "Admin" 
- **Why:** You can manage apps from your personal account too

### Tip 3: Use TestFlight (Apple)
- Before App Store release, use TestFlight for beta testing
- Invite up to 10,000 beta testers
- Get feedback before public launch

### Tip 4: Prepare App Store Assets
While waiting for approvals, prepare:
- App icon (1024x1024px)
- Screenshots (various iPhone sizes)
- App description
- Keywords
- Privacy policy

---

## 📅 TIMELINE

### Week 1:
- Day 1: Apply for D-U-N-S number
- Day 2: Create Google Play account, submit verification
- Day 3-4: Google approval received ✅

### Week 2-3:
- Wait for D-U-N-S number (check email daily)

### Week 3-4:
- Day X: Receive D-U-N-S number
- Day X+1: Enroll in Apple Developer Program
- Day X+2: Apple verification call
- Day X+3: Apple approval ✅

### Week 4:
- Set up App Store Connect
- Set up Google Play Console  
- Ready to upload builds 🚀

---

## 🎯 FINAL CHECKLIST

### Email Setup:
- [ ] dev@rallyapp.me created and forwarding
- [ ] Test email: Send to dev@rallyapp.me, receive in Gmail

### Apple:
- [ ] D-U-N-S number received
- [ ] Apple ID created (dev@rallyapp.me)
- [ ] Apple Developer enrollment submitted
- [ ] Verification call completed
- [ ] $99 payment processed
- [ ] Account approved
- [ ] App Store Connect access confirmed
- [ ] Rally app created (draft)

### Google:
- [ ] Google account created (dev@rallyapp.me)
- [ ] Google Play enrollment submitted
- [ ] ID verification uploaded
- [ ] $25 payment processed
- [ ] Account approved
- [ ] Play Console access confirmed
- [ ] Rally app created (draft)

### Security:
- [ ] All passwords saved in password manager
- [ ] 2FA enabled on both accounts
- [ ] Backup codes saved
- [ ] Your wife has access to all credentials

---

## 💰 TOTAL COSTS

**One-time:**
- Apple Developer: $99/year (£77) - renews annually
- Google Play: $25 one-time (£20) - never expires

**First year:** $124 (~£97)  
**Every year after:** $99 (~£77) for Apple only

**Optional Future Costs:**
- Apple Developer Team members: Free (up to 100)
- TestFlight: Free
- Firebase (Google): Free tier, then pay-as-you-go
- App Store small business program: Free (if <$1M revenue = 15% commission instead of 30%)

---

## 🎓 NEXT STEPS AFTER APPROVAL

### 1. App Store Connect:
- Complete app metadata
- Upload app icon
- Write app description
- Add screenshots
- Set pricing (free)
- Submit for review

### 2. Google Play Console:
- Complete store listing
- Upload assets
- Content rating questionnaire
- Data safety form
- Submit for review

### 3. Build & Upload:
- Use Xcode (iOS) or Android Studio
- Create signed builds
- Upload to stores
- Wait for review (Apple: 1-3 days, Google: 1-2 days)

---

**ESTIMATED TOTAL TIME:**
- Email setup: 5 mins
- D-U-N-S application: 10 mins (2-3 weeks wait)
- Apple enrollment: 30 mins (2-5 days approval)
- Google enrollment: 20 mins (1-2 days approval)

**TOTAL ACTIVE TIME:** ~1 hour  
**TOTAL WAIT TIME:** 2-4 weeks (mainly for D-U-N-S)

---

**Start D-U-N-S application TODAY so it's ready when your app is ready to launch!**

---

## 📧 Email Summary (What Goes Where)

| Email | Purpose | Use For |
|-------|---------|---------|
| **hello@rallyapp.me** | Customer support | User questions, general inquiries |
| **support@rallyapp.me** | Technical support | Bug reports, help requests |
| **dev@rallyapp.me** | Developer/App Stores | Apple Developer, Google Play, TestFlight, technical |
| **press@rallyapp.me** | Media inquiries | Journalists, press releases |
| **team@rallyapp.me** | Internal | Team communication (future) |

**All forward to your Gmail** (you receive everything in one inbox, but sending appears professional)
