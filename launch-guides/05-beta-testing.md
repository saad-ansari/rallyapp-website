# Step 5: Beta Testing & TestFlight
**⏱️ Time:** 2-4 weeks (Week 5-6)  
**💰 Cost:** $0  
**🟢 Priority:** CRITICAL - Must complete before public launch (Week 7)

**⚠️ Prerequisites:**  
✅ MVP complete and tested internally  
✅ Apple Developer account approved (Step 1)  
✅ Google Play account approved (Step 1)  
✅ Privacy policy live (rallyapp.me/privacy)

---

## What Is Beta Testing?

Beta testing = **Early users test Rally before public launch** to find bugs you missed and validate that real people understand + enjoy the app.

**Goals:**
1. **Find bugs** your internal testing missed (edge cases, weird devices)
2. **Validate UX** (do people understand how to create rallies? Check in?)
3. **Collect testimonials** (5-star quotes for marketing)
4. **Build founding user base** (first 50-100 users become superfans)

**Duration:** 2-3 weeks minimum (longer is better, but not forever)

---

## Part 1: iOS Beta Testing (TestFlight)

### Step 1: Upload Build to TestFlight

**1. Open Xcode:**
- Select scheme: Rally (or your app name)
- Select device: "Any iOS Device"

**2. Archive build:**
- Product → Archive (takes 5-10 minutes)
- Once done, Organizer window opens

**3. Distribute to App Store Connect:**
- Click "Distribute App"
- Select "App Store Connect"
- Upload → This build appears in TestFlight in 10-30 minutes

**4. Wait for processing:**
- Check App Store Connect → TestFlight tab
- Build status: "Processing" → "Ready to Submit" → "Ready to Test"
- **Note:** First build takes 24-48 hours for Apple review (beta review)

**Status:** ☐ First iOS build uploaded to TestFlight

---

### Step 2: Create Internal Testing Group (Optional, Start Here)

**Purpose:** Test with YOU + WIFE before inviting strangers.

**1. Go to:** App Store Connect → TestFlight → Internal Testing

**2. Click "+ Internal Group":**
- **Group name:** Rally Core Team
- **Add testers:** Select yourself + wife (must have Apple IDs added as users in App Store Connect)

**3. Enable Automatic Distribution:**
- When you upload new builds, testers auto-receive them

**4. Install TestFlight:**
- Open App Store → Download "TestFlight" app
- Open TestFlight → See "Rally" appear
- Tap "Install" → Test Rally

**Test for 2-3 days internally:**
- Complete full user flow (onboarding → create squad → create rally → check in)
- Try to break things (bad inputs, slow network, kill app mid-flow)
- Fix critical bugs, upload new build (Build 2, 3, etc.)

**Status:** ☐ Internal testing complete (you + wife tested Build 1+)

---

### Step 3: Create External Testing Group (Real Beta Users)

**1. Go to:** App Store Connect → TestFlight → External Testing

**2. Click "+ External Group":**
- **Group name:** Rally Beta Testers
- **Public link:** Enable (so you can share one URL)

**3. Add Build:**
- Select your latest build (e.g., Build 3 after internal fixes)
- Click "Submit for Review"
- **Apple reviews beta for TestFlight** (usually 24-48 hours)
- Once approved, build is ready for external testers

**4. Get Public Link:**
- TestFlight → Rally Beta Testers → Public Link
- Copy URL (looks like: https://testflight.apple.com/join/abc123)

**Save this link:** ______________________________

**Status:** ☐ External testing group created + public link obtained

---

### Step 4: Recruit Beta Testers (Target: 30-50 iOS Users)

**Where to find beta testers:**

**Friends & Family (First 10):**
- Text 5-10 friends: "I'm launching Rally (reliability tracker app). Want to beta test? Takes 5 mins. Link: [testflight URL]"
- Post in personal social media: "Testing my new app Rally before launch. Need 10 beta testers. iOS only for now. [link]"

**Online Communities (Next 20-30):**
- **Reddit r/testflightbeta:** Post with template:
  ```
  [iOS] Rally - Track friend reliability & never deal with flaky plans again

  Looking for 30 beta testers before March launch.

  Rally tracks who actually shows up to plans. Create events with your squad, check in when you arrive, earn Reliability Scores (Starter → Platinum), compete on leaderboards.

  Perfect if you're tired of friends bailing last minute.

  TestFlight link: [your URL]
  Feedback: hello@rallyapp.me
  ```

- **BetaList:** [betalist.com/submit](https://betalist.com/submit)
  - Submit Rally (free)
  - Gets featured to 50K+ early adopters
  - Add TestFlight link in submission

- **Twitter/X:** Tweet from @rallyapp
  ```
  Rally is in beta 🏁

  Track who shows up to plans. Build reliable squads. Earn your tier.

  Looking for 30 iOS beta testers before March launch.

  TestFlight: [link]

  Please RT if you know someone tired of flaky friends 🙏
  ```

- **Product Hunt Ship:** [producthunt.com/ship](https://producthunt.com/ship)
  - Create "coming soon" page
  - Collect emails → Send TestFlight link

**Your Existing Network:**
- Ask wife to post in her group chats
- Post in family WhatsApp/Discord
- Email old colleagues: "Hey! Launching an app, want to beta test?"

**Target: 30-50 testers** (realistic for 2-3 week beta)

**Status:** ☐ 30+ iOS beta testers recruited

---

### Step 5: Send Onboarding Email to Beta Testers

Once someone joins TestFlight, send them this:

**Subject:** Welcome to Rally Beta! 🏁

**Body:**
```
Hey [Name],

Thanks for joining Rally's beta! You're one of the first 50 people testing before launch.

HOW TO GET STARTED

1. Open TestFlight app (if you haven't installed: [App Store link])
2. Tap "Rally" → Install
3. Open Rally → Sign up
4. Create or join a squad
5. Create your first rally
6. Test check-in (we recommend creating a rally happening TODAY so you can test the flow)

WHAT TO TEST

✅ Onboarding: Did it make sense? Any confusing steps?
✅ Rally creation: Could you create a rally easily?
✅ Check-in: Did location verification work?
✅ Leaderboards: Are scores calculating correctly?
✅ Bugs: Anything crash? Feel laggy?

SUBMIT FEEDBACK

Reply to this email with:
- What worked well?
- What confused you?
- What broke?
- Would you use Rally with your real friends?

Or report bugs directly in TestFlight (shake phone → "Send Feedback").

**Beta runs for 2 weeks** (until March 3rd). After that, Rally launches publicly!

Thanks for helping make Rally awesome 🚀

[Your Name]
Founder, Rally
hello@rallyapp.me
```

**Status:** ☐ Beta onboarding email template ready

---

### Step 6: Collect Feedback

**Use 3 channels:**

1. **TestFlight built-in feedback:**
   - Users shake phone → "Send Beta Feedback"
   - You see feedback in App Store Connect → TestFlight → Feedback

2. **Email:**
   - Replies to hello@rallyapp.me
   - Create label "Beta Feedback" in Gmail

3. **Google Form (optional):**
   - Create simple survey: [forms.google.com](https://forms.google.com)
   - Questions:
     - "What did you like most?"
     - "What confused you?"
     - "Did anything break?"
     - "Would you recommend Rally to friends? (1-10)"
     - "Can we use your quote in marketing? (yes/no)"
   - Share link in email + TestFlight notes

**Status:** ☐ Feedback collection system set up

---

## Part 2: Android Beta Testing (Google Play)

### Step 1: Create Beta Track

**1. Go to:** [play.google.com/console](https://play.google.com/console)

**2. Navigate:**
- All apps → Rally → Testing → Internal testing (start here)

**3. Create Internal Testing Release:**
- Click "Create new release"
- Upload APK or AAB (Android App Bundle)
  - Build in Android Studio: Build → Generate Signed Bundle
  - Upload `.aab` file (not `.apk`)

**4. Release name:**
- "Beta 1" or "v1.0.0-beta.1"

**5. Release notes:**
```
Rally Beta - Initial Release

Test features:
• Squad creation & invites
• Rally creation with RSVP thresholds
• Check-in system
• Reliability score calculations
• Leaderboards (squad, city, global)

Known issues:
• [List any known bugs you haven't fixed yet]

Send feedback to hello@rallyapp.me
```

**6. Save & Review:**
- Click "Review release" → "Start rollout to Internal testing"
- Takes 10-30 minutes to go live

**Status:** ☐ First Android build uploaded to Internal testing

---

### Step 2: Add Internal Testers

**1. Go to:** Google Play Console → Testing → Internal testing → Testers tab

**2. Create email list:**
- Add your email + wife's email
- Click "Save"

**3. Copy opt-in URL:**
- Appears after saving
- Looks like: https://play.google.com/apps/internaltest/...

**4. Share URL:**
- Send to yourself + wife
- Open on Android device → "Become a tester" → Install

**Test internally for 2-3 days** (same as iOS internal testing)

**Status:** ☐ Android internal testing complete

---

### Step 3: Promote to Open Beta

**1. Go to:** Google Play Console → Testing → Open testing (or Closed testing if you want email list)

**2. Create Open Testing Release:**
- Promote your Internal testing build → Open testing
- Or upload new build if you fixed bugs

**3. Choose testing method:**
- **Open testing:** Anyone with link can join (recommended for Rally)
- **Closed testing:** Requires email list (more manual)

**4. Get opt-in URL:**
- Copy open testing URL
- Share publicly (Reddit, Twitter, BetaList)

**Android beta link:** ______________________________

**Status:** ☐ Android open testing live

---

### Step 4: Recruit Android Beta Testers

**Use same channels as iOS:**
- Reddit r/AndroidApps (post: "Rally - Beta testing reliability tracker")
- Twitter/X with Android link
- BetaList (supports both iOS + Android links)

**Target: 20-30 Android testers** (Android typically gets 50-60% of iOS beta signups)

**Status:** ☐ 20+ Android beta testers recruited

---

## Part 3: Running the Beta (Week 5-6)

### Week 1 of Beta: Observation

**Goals:**
- Let users explore naturally (don't guide them)
- Watch for confusion patterns (where do people get stuck?)
- Monitor crash reports (PostHog or Sentry if integrated)

**Daily tasks:**
1. Check TestFlight feedback (5 mins)
2. Check hello@rallyapp.me for emails (10 mins)
3. Monitor PostHog funnels (if set up):
   - Onboarding completion rate
   - First rally created rate
   - Check-in success rate
4. Reply to testers thanking them for feedback

**Don't overreact to single reports** - wait for patterns (3+ people reporting same issue)

---

### Week 2 of Beta: Iteration

**By now you should see patterns:**

**Common feedback examples:**
- "I didn't understand how to check in" → Improve onboarding tooltip
- "Location detection didn't work" → Investigate geolocation permissions
- "App crashed when I invited 10 people" → Fix bulk invite bug
- "I love the leaderboards!" → Feature works, emphasize in marketing

**Priority fixing:**
1. **Crashes** (highest priority - blocks usage)
2. **Core flow blockers** (can't create rally, can't check in)
3. **Confusion points** (unclear UX - add tooltips, improve copy)
4. **Nice-to-haves** (feature requests - save for v1.1)

**Upload new builds:**
- iOS: Upload to TestFlight (Build 4, 5, etc.) - testers auto-update
- Android: Promote new build to Open testing

---

### Collecting Testimonials

**After 1 week, email testers who engaged:**

**Subject:** Quick favor? 2-min survey

**Body:**
```
Hey [Name],

You've been using Rally for a week! Thanks for testing 🙏

Quick favor: Can you answer 3 questions? Takes 2 mins.

1. What did you like most about Rally?
2. Would you recommend it to friends? (yes/no)
3. If yes, can we quote you? "Rally is ____" (one sentence)

Reply directly to this email!

[Your Name]
```

**Goal:** Get 5-10 quotes like:
- "Rally finally solves the flaky friend problem" - Sarah, Beta Tester
- "I love seeing my Platinum tier badge" - Mike, Beta Tester
- "This app is genius for group plans" - Emma, Beta Tester

**Use quotes in:**
- App Store description ("What beta testers say:")
- Product Hunt launch post
- Social media posts

**Status:** ☐ 5+ testimonials collected

---

## Beta Testing Checklist

### iOS (TestFlight):
- [ ] First build uploaded to TestFlight
- [ ] Internal testing complete (you + wife, 2-3 days)
- [ ] External testing group created
- [ ] Public TestFlight link obtained
- [ ] 30+ iOS beta testers recruited
- [ ] Onboarding email sent to testers
- [ ] Feedback collected (TestFlight + email)
- [ ] Critical bugs fixed + new builds uploaded
- [ ] 5+ testimonials collected

### Android (Google Play):
- [ ] First build uploaded to Internal testing
- [ ] Internal testing complete (you + wife, 2-3 days)
- [ ] Open testing release live
- [ ] Public opt-in URL obtained
- [ ] 20+ Android beta testers recruited
- [ ] Feedback collected (email + Google Form)
- [ ] Critical bugs fixed + new builds uploaded

### General:
- [ ] Beta ran for 2+ weeks
- [ ] Core flows validated (onboarding, rally creation, check-in)
- [ ] Crash rate < 1% (check PostHog or Crashlytics)
- [ ] At least 10 testers created real squads (not just browsing)
- [ ] At least 5 testimonials collected for marketing

---

## 🆘 Need Help?

**Stuck on TestFlight?**
- "How do I invite external testers?"
- "My build is stuck 'Processing' - what does that mean?"
- "Can I test TestFlight on my own device?"

**Stuck on feedback?**
- "I got conflicting feedback - what do I do?"
- "How many testers do I really need?"
- "Should I fix this bug or launch with it?"

**Stuck on Android?**
- "What's the difference between Internal and Open testing?"
- "How do I generate a signed AAB file?"

**Consult:** [Growth & Analytics Specialist](../.github/agents/growth-analytics.agent.md) for beta testing strategy, PostHog funnel analysis, and prioritizing feedback.

---

**Time to complete:** 2-4 weeks (can't rush beta - need real usage data)

**Next:** [Step 6: Submission & Launch](06-submission-launch.md) 🚀
