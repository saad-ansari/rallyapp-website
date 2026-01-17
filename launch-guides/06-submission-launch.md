# Step 6: App Submission & Launch Day
**⏱️ Time:** 3-7 days submission + 1 day launch  
**💰 Cost:** $0  
**🟢 Priority:** CRITICAL - Final step before Rally goes live

**⚠️ Prerequisites:**  
✅ Beta testing complete (Step 5) with critical bugs fixed  
✅ Store listings complete (Step 4) with ASO optimized  
✅ Privacy policy live (rallyapp.me/privacy)  
✅ Support email active (hello@rallyapp.me)  
✅ Social media accounts active (Step 3)  
✅ Product Hunt profile ready with 600+ followers (Step 2)

---

## Part 1: Final Pre-Launch Checklist

Before submitting to app stores, verify EVERYTHING is ready:

### App Functionality (Test on Real Device)

- [ ] **Onboarding works**: New user can sign up with email/Google/Apple
- [ ] **Squad creation**: User can create squad + invite friends
- [ ] **Rally creation**: User can create rally with location, time, RSVP threshold
- [ ] **Check-in**: Location verification works (GPS permissions granted)
- [ ] **Scoring system**: Reliability score calculates correctly (test: attend 3 rallies → score updates)
- [ ] **Leaderboards**: Squad, city, global leaderboards populate
- [ ] **Notifications**: Push notifications send (test: 24h before rally, 1h before, check-in window)
- [ ] **Edge cases**:
  - What happens if user creates rally then deletes it?
  - What happens if user loses internet mid-check-in?
  - What happens if 2 users check in at exact same time?

**Test on:**
- [ ] Latest iOS device (iPhone 15 or 14)
- [ ] Older iOS device (iPhone 11 or 12 if available)
- [ ] Latest Android device (Pixel 8 or Samsung S24)
- [ ] Older Android device (any 2-3 year old phone)

---

### Backend & Infrastructure

- [ ] **Supabase RLS policies**: Verify users can only see their own squads (not everyone's)
- [ ] **Database indexes**: Check slow queries in Supabase dashboard → add indexes if needed
- [ ] **Supabase limits**: Free tier = 500MB database, 2GB bandwidth/month. Upgrade if beta used >50% of quota.
- [ ] **Edge functions**: If using Supabase functions (e.g., push notifications), test they're deployed + working
- [ ] **Backup plan**: Export database schema + data (Supabase dashboard → Database → Backup)

---

### Legal & Compliance

- [ ] **Privacy policy live**: rallyapp.me/privacy accessible
- [ ] **Terms of service live**: rallyapp.me/terms accessible
- [ ] **Support email working**: Send test email to hello@rallyapp.me → verify you receive it
- [ ] **GDPR compliance** (if targeting EU):
  - Privacy policy mentions data collection (email, location, usage data)
  - Users can request data deletion (mention in privacy policy)
- [ ] **COPPA compliance** (if users <13):
  - Rally is 12+ rated → requires parental consent for <13 (handled by age gate in onboarding)

---

### Marketing Assets Ready

- [ ] **Product Hunt draft saved**: Tagline, description, first comment ready (see Step 2 guide)
- [ ] **Social media posts scheduled**:
  - Twitter/X: "Rally is LIVE 🏁" tweet drafted
  - Instagram: Launch carousel designed
  - TikTok: Launch video recorded
- [ ] **Email list** (if collected during beta): Launch email drafted
- [ ] **Press kit** (optional, if reaching out to tech blogs):
  - App icon (high-res PNG)
  - Screenshots (5-10 images)
  - Founder photo
  - One-pager PDF with Rally's story

---

## Part 2: iOS App Store Submission

### Step 1: Final Build Preparation

**1. Open Xcode:**
- Update version number: 1.0.0 (or 1.0 for marketing version)
- Update build number: 1 (or increment if you've submitted before)
- Set deployment target: iOS 15.0 or later (broader compatibility)

**2. Test build one final time:**
- Product → Clean Build Folder
- Product → Archive
- Once archived, test on real device via TestFlight (upload as internal build first)

**3. Archive for submission:**
- Product → Archive
- Organizer → Select archive → Distribute App → App Store Connect

**4. Wait for processing:**
- App Store Connect → TestFlight → Builds
- Status: "Processing" (10-30 minutes)
- Once "Ready to Submit" → proceed to next step

---

### Step 2: Submit for Review

**1. Go to:** [appstoreconnect.apple.com](https://appstoreconnect.apple.com/)

**2. Navigate:**
- My Apps → Rally → App Store tab (not TestFlight)

**3. Create Version:**
- Click "+" → "iOS App" → Version 1.0

**4. Fill Required Fields:**

**Build:**
- Click "+ Build" → Select your latest build from TestFlight

**App Store Promotional Text** (170 chars, optional):
- Same as Step 4 (promotional text you wrote for ASO)

**Description:**
- Paste description from Step 4 (ASO guide)

**Keywords:**
- Paste keywords from Step 4 (100 chars, comma-separated)

**Support URL:**
- https://rallyapp.me/support

**Marketing URL:**
- https://rallyapp.me

**Version notes** (What's new in this version):
```
Rally 1.0 - Initial Release

• Create squads with your close friends
• Track who shows up with Reliability Scores
• Earn tiers: Starter → Bronze → Silver → Gold → Platinum
• Compete on squad, city, and global leaderboards
• Smart check-in with location verification
• Never deal with flaky plans again

Make showing up matter. 🏁
```

**5. App Review Information:**

**Sign-in required:**
- Yes (Rally requires account to use)

**Demo account** (CRITICAL - Apple reviewers need this):
- **Username:** appreviewer@rallyapp.me (create this account in your app)
- **Password:** Rally2025! (or any password you set)

**⚠️ IMPORTANT:** This demo account must:
- Already be in a squad with 2-3 other fake accounts
- Have 3-5 rallies already created (past + upcoming)
- Have Reliability Score calculated (>0%)
- Have leaderboard data visible

**Create demo account now:**
1. Sign up in Rally with appreviewer@rallyapp.me
2. Create squad "Apple Reviewers"
3. Invite 2 fake accounts (use temp emails: appreviewer2@rallyapp.me, appreviewer3@rallyapp.me)
4. Create 3 rallies (1 past, 2 upcoming)
5. Check in to past rally → verify score updates
6. Test all core features work

**Notes for review:**
```
Rally is a social accountability app. To test:

1. Log in with provided credentials
2. View existing squad "Apple Reviewers"
3. Create a test rally (tap "+" → "Create Rally")
4. Invite squad members (already connected)
5. Check leaderboards (tap "Leaderboards" tab)

Location permission is required for check-in feature. Deny permission → check-in button shows "Enable Location".

Contact: hello@rallyapp.me for questions.
```

**6. App Privacy:**
- Complete privacy questionnaire (Apple requires this)
- **Data collected**:
  - Email (account creation)
  - Location (check-in verification)
  - Usage data (analytics via PostHog)
- **Data usage**: Functionality, analytics
- **Data linked to user**: Yes (email, location)
- **Data used for tracking**: No (Rally doesn't track cross-app)

**7. Pricing & Availability:**
- Price: Free
- Availability: All territories (worldwide)

**8. Save & Submit:**
- Review all fields one final time
- Click "Save" → "Submit for Review"
- Confirmation: "Waiting for Review"

---

### Step 3: Wait for Apple Review

**Timeline:**
- **Average**: 24-48 hours (sometimes as fast as 12 hours)
- **Worst case**: 5-7 days (if complex app or holiday season)

**Status updates:**
- **Waiting for Review** (your app is in queue)
- **In Review** (reviewer is actively testing - usually 2-4 hours in this state)
- **Pending Developer Release** (APPROVED! You control when it goes live)
- **Ready for Sale** (LIVE in App Store)

**Check status:**
- App Store Connect → My Apps → Rally → App Store tab
- Or: Apple will email you at each status change

**If rejected:**
- Apple sends email with rejection reason (e.g., "App crashed during review")
- Common reasons:
  - Demo account didn't work → Fix credentials, resubmit
  - App crashed → Fix bug, upload new build, resubmit
  - Missing privacy disclosures → Update privacy policy, resubmit
- **How to resubmit**: Fix issue → App Store Connect → "Submit for Review" again (no penalty for rejections)

---

### Step 4: Choose Release Strategy

**When app is approved, you have 2 options:**

**Option A: Manual Release** (Recommended for Rally)
- Status: "Pending Developer Release"
- **Why:** You control exact launch time (coordinate with Product Hunt launch)
- **How:** App Store Connect → "Release this version" button (click when ready)

**Option B: Automatic Release**
- Status: "Ready for Sale" immediately after approval
- **Why:** Less control, but simpler
- **When to use:** If you don't care about launch day coordination

**Rally's strategy:** Choose Manual Release → Launch same day as Product Hunt (Wednesday, 12:01 AM PST)

---

## Part 3: Google Play Store Submission

### Step 1: Final Build Preparation

**1. Open Android Studio:**
- Update version: `versionName "1.0.0"` in `app/build.gradle`
- Update build number: `versionCode 1`

**2. Generate Signed Bundle:**
- Build → Generate Signed Bundle / APK
- Select: Android App Bundle
- Create new keystore (or use existing):
  - **Keystore path**: Save to secure location (e.g., `~/rally-release-key.jks`)
  - **Password**: Strong password (save in password manager!)
  - **Alias**: rally-key
  - **Validity**: 25+ years
- Select release build variant
- Finish → `.aab` file generated in `app/release/`

**⚠️ CRITICAL:** Save keystore file + passwords securely. You CANNOT release updates without this exact keystore.

---

### Step 2: Create Production Release

**1. Go to:** [play.google.com/console](https://play.google.com/console)

**2. Navigate:**
- All apps → Rally → Production (not Testing)

**3. Create New Release:**
- Click "Create new release"
- Upload your `.aab` file (from Step 1)

**4. Release name:**
- "1.0.0" (matches version in code)

**5. Release notes** (What's new):
```
Rally 1.0 - Initial Release

Make showing up matter.

• Create squads with your close friends
• Track who shows up with Reliability Scores
• Earn tiers: Starter → Bronze → Silver → Gold → Platinum
• Compete on squad, city, and global leaderboards
• Smart check-in with location verification
• Never deal with flaky plans again

Questions? hello@rallyapp.me
```

**6. Review summary:**
- Verify all store listing details (from Step 4) are correct
- Privacy policy linked
- Target API level (33 or 34 for Android 14 compatibility)

**7. Save (don't submit yet):**
- Click "Save" → Draft created

---

### Step 3: Complete Content Rating Questionnaire

**1. Go to:** Google Play Console → Rally → Content rating

**2. Start Questionnaire:**
- **App category**: Productivity or Social
- **Email address**: hello@rallyapp.me

**3. Answer questions:**
- "Violence?" → No
- "Sexual content?" → No
- "Profanity?" → Infrequent/Mild (if user-generated content in chats)
- "Controlled substances?" → No
- "User-generated content?" → Yes (squad names, rally titles)
- "Location sharing?" → Yes (check-in feature)

**4. Get rating:**
- Rally will get: **PEGI 12** (Europe), **ESRB Everyone 10+** (US), similar ratings globally
- Save ratings

---

### Step 4: Submit for Review

**1. Go back to:** Production → Draft release

**2. Click "Review release":**
- Final check: All required fields green ✓
- Release to: 100% of users (or staged rollout - see below)

**3. Choose rollout strategy:**

**Option A: Full rollout (100%)** - Recommended for Rally
- All users see Rally immediately after approval

**Option B: Staged rollout** (e.g., 10% → 50% → 100%)
- Release to 10% of users first → monitor for crashes → increase to 50% → then 100%
- **When to use:** If you're nervous about scaling (Rally is low traffic initially, so full rollout is fine)

**4. Submit:**
- Click "Start rollout to Production"
- Confirmation: "Under review"

---

### Step 5: Wait for Google Review

**Timeline:**
- **Average**: 1-3 days
- **Worst case**: 7 days (if complex app)
- **Best case**: A few hours (rare, but happens)

**Status updates:**
- **Under review** (in queue)
- **Approved** → Live in Google Play Store

**Check status:**
- Google Play Console → Rally → Production
- Or: Google emails you when approved

**If rejected:**
- Google sends email with reason (e.g., "Privacy policy missing location disclosure")
- Fix issue → Submit again (same as iOS)

---

## Part 4: Launch Day Strategy

### T-Minus 1 Week: Prep

- [ ] **Confirm approval**: iOS "Pending Developer Release", Android "Approved"
- [ ] **Choose launch date**: Wednesday (highest Product Hunt traffic) at 12:01 AM PST
- [ ] **Schedule social posts**:
  - Twitter: 12:01 AM, 9 AM, 3 PM, 9 PM (4 posts)
  - Instagram: 9 AM post + 3 PM Reel
  - TikTok: 12 PM, 6 PM (2 videos)
- [ ] **Prepare Product Hunt post**:
  - Use template from Step 2 guide
  - Draft first comment (explains Rally deeply)
  - Screenshot 5 best features
- [ ] **Notify beta testers**:
  - Email: "Rally launches March 5th! Here's your exclusive founder invite link"

---

### Launch Day: Hour-by-Hour Playbook

**12:01 AM PST (Wednesday):**
- [ ] **Release iOS**: App Store Connect → "Release this version"
- [ ] **Verify Android live**: Google Play → Check app status
- [ ] **Post on Product Hunt**: Submit Rally (see Step 2 guide for tactics)
- [ ] **Tweet launch**: "@rallyapp is LIVE 🏁 Track who shows up. iOS: [link] Android: [link]"

**9:00 AM PST:**
- [ ] **Instagram post**: Launch carousel with screenshots
- [ ] **Product Hunt first comment**: Post deep-dive (prepared in advance)
- [ ] **Email beta testers**: "Rally is live! Thank you for testing. Here's the public link."
- [ ] **Monitor Product Hunt**: Respond to every comment within 10 minutes

**12:00 PM PST:**
- [ ] **TikTok video**: "Rally is LIVE" announcement with app demo
- [ ] **Reddit post** (if you have karma): r/SideProject, r/startups (use personal account, be genuine)
- [ ] **Continue Product Hunt engagement**: Upvote other products, comment on discussions

**3:00 PM PST:**
- [ ] **Twitter update**: "Rally is #5 on Product Hunt! [screenshot]"
- [ ] **Instagram Reel**: Short demo video (30 seconds)
- [ ] **Check app analytics**: PostHog → How many signups? Any crashes?

**6:00 PM PST:**
- [ ] **TikTok video 2**: User testimonial or feature demo
- [ ] **Monitor Product Hunt leaderboard**: Are you top 5? If yes, tweet it. If no, engage more (upvote, comment).

**9:00 PM PST:**
- [ ] **Final Twitter push**: "Last few hours to support Rally on Product Hunt! [link]"
- [ ] **Respond to Product Hunt comments**: Thank everyone who upvoted/commented

**11:59 PM PST:**
- [ ] **Product Hunt day ends**: Check final ranking (#1-5 = "Product of the Day" badge)
- [ ] **Screenshot ranking**: Tweet "Rally finished #3 on Product Hunt 🏁"

---

### Post-Launch Week 1: Momentum

**Day 2-3:**
- [ ] Monitor crash rates (PostHog: <1% crash rate is good)
- [ ] Respond to ALL app reviews (iOS + Android, within 24 hours)
- [ ] Post on social daily (keep momentum going)

**Day 4-7:**
- [ ] Compile Product Hunt badge: Use in App Store screenshots ("Featured on Product Hunt")
- [ ] Reach out to press (if Rally got top 5): Email TechCrunch, The Verge with "Rally hit #3 on Product Hunt" angle
- [ ] Post user-generated content: Ask early users to share squad screenshots → repost on Instagram/Twitter

---

## Launch Day Checklist

### Pre-Launch (T-1 Week):
- [ ] iOS approved (status: "Pending Developer Release")
- [ ] Android approved (status: "Live" or ready to go live)
- [ ] Launch date chosen (Wednesday, 12:01 AM PST)
- [ ] Product Hunt post drafted (tagline, description, first comment)
- [ ] Social media posts scheduled (Twitter 4x, Instagram 2x, TikTok 2x)
- [ ] Beta testers notified (email sent)
- [ ] Press kit ready (if reaching out to blogs)

### Launch Day:
- [ ] 12:01 AM: iOS released + Android live + Product Hunt posted + Twitter announced
- [ ] 9 AM: Instagram post + PH first comment + beta tester email
- [ ] 12 PM: TikTok video + Reddit posts + PH engagement
- [ ] 3 PM: Twitter update + Instagram Reel + analytics check
- [ ] 6 PM: TikTok video 2 + PH monitoring
- [ ] 9 PM: Final Twitter push + PH comment responses
- [ ] 11:59 PM: Screenshot PH ranking + celebrate 🎉

### Post-Launch (Week 1):
- [ ] Day 2-3: Monitor crashes, respond to reviews, social posts daily
- [ ] Day 4-7: Add PH badge to assets, press outreach, user-generated content

---

## 🆘 Need Help?

**Stuck on submission?**
- "My iOS app was rejected - what do I do?"
- "Google Play says 'Target API level too low' - how do I fix?"
- "Demo account isn't working for reviewers"

**Stuck on launch day?**
- "Product Hunt posted but no upvotes - what's wrong?"
- "How do I respond to negative reviews?"
- "App is live but no one's downloading - what do I do?"

**Stuck on post-launch?**
- "How do I leverage Product Hunt badge for press?"
- "What metrics should I track Week 1?"
- "When should I start paid ads?"

**Consult:**
- [Product Hunt Specialist](../.github/agents/product-hunt.agent.md) for launch day tactics
- [Growth & Analytics Specialist](../.github/agents/growth-analytics.agent.md) for post-launch metrics + growth strategy
- [Community & PR Specialist](../.github/agents/community-pr.agent.md) for press outreach + handling negative reviews

---

**Congratulations - Rally is LIVE! 🏁**

**Time to complete:** 3-7 days submission + 1 intense launch day

**What's next?** Week 1 post-launch monitoring → Week 2-4 growth optimization → Month 2 retention analysis. See [Growth & Analytics Specialist](../.github/agents/growth-analytics.agent.md) for stage-specific strategies (0→100, 100→1K, 1K→10K users).
