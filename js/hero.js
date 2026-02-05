/**
 * Rally Website - Hero Section Premium Animations
 * Transforms the hero into a dynamic, alive experience
 */

(function () {
  "use strict";

  // Wait for GSAP
  if (typeof gsap === "undefined") {
    console.warn("GSAP not loaded - hero animations disabled");
    return;
  }

  const MOTION = window.RALLY_MOTION || {
    easing: { primary: "expo.out", bounce: "elastic.out(1, 0.5)" },
    duration: { normal: 0.5, slow: 0.8 },
  };

  // ============================================
  // HERO ENTRANCE TIMELINE
  // ============================================

  const initHeroEntrance = () => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Badge entrance
    const badge = document.querySelector(".hero-badge");
    if (badge) {
      gsap.set(badge, { opacity: 0, y: 30, scale: 0.9 });
      tl.to(badge, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    }

    // Checkmark icon with draw animation
    const checkmarkIcon = document.querySelector(".hero-checkmark");
    const checkmarkPath = document.querySelector(".checkmark-path");
    if (checkmarkIcon && checkmarkPath) {
      gsap.set(checkmarkIcon, { opacity: 0, scale: 0.5, rotate: -10 });
      gsap.set(checkmarkPath, { strokeDasharray: 100, strokeDashoffset: 100 });

      tl.to(
        checkmarkIcon,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          ease: "back.out(2)",
        },
        "-=0.3",
      ).to(
        checkmarkPath,
        {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.4",
      );
    }

    // Split text headline animation
    const titleWords = document.querySelectorAll(".split-text");
    if (titleWords.length) {
      titleWords.forEach((word) => {
        gsap.set(word, {
          opacity: 0,
          y: 80,
          rotateX: -60,
          transformOrigin: "center bottom",
        });
      });

      tl.to(
        titleWords,
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.out",
        },
        "-=0.4",
      );
    }

    // Subtitle fade up
    const subtitle = document.querySelector(".hero-subtitle");
    if (subtitle) {
      gsap.set(subtitle, { opacity: 0, y: 40 });
      tl.to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }

    // Social proof
    const socialProof = document.querySelector(".hero-social-proof");
    if (socialProof) {
      gsap.set(socialProof, { opacity: 0, y: 30 });
      tl.to(
        socialProof,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      );
    }

    // Waitlist form
    const waitlistWrapper = document.querySelector(
      ".hero .waitlist-form-wrapper",
    );
    if (waitlistWrapper) {
      gsap.set(waitlistWrapper, { opacity: 0, y: 40, scale: 0.95 });
      tl.to(
        waitlistWrapper,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
        },
        "-=0.3",
      );
    }

    // Score card with floating effect
    const scoreCard = document.querySelector(".score-card");
    if (scoreCard) {
      gsap.set(scoreCard, { opacity: 0, y: 60, scale: 0.9 });
      tl.to(
        scoreCard,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.4",
      );
    }

    // Phone mockup entrance
    const phoneMockup = document.querySelector(".phone-mockup-container");
    if (phoneMockup) {
      gsap.set(phoneMockup, { opacity: 0, y: 100, scale: 0.85, rotateY: -10 });
      tl.to(
        phoneMockup,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: "expo.out",
        },
        "-=0.6",
      );
    }

    // Scroll indicator
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
      gsap.set(scrollIndicator, { opacity: 0, y: 20 });
      tl.to(
        scrollIndicator,
        {
          opacity: 0.6,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2",
      );
    }

    return tl;
  };

  // ============================================
  // SCORE RING ANIMATION
  // ============================================

  const initScoreRing = () => {
    const scoreRingFill = document.querySelector(".score-ring-fill");
    const scoreValue = document.querySelector(".score-value");

    if (!scoreRingFill || !scoreValue) return;

    // Set initial state
    gsap.set(scoreRingFill, { strokeDashoffset: 283 }); // Full circle
    scoreValue.textContent = "0%";

    // Create scroll trigger for score animation
    ScrollTrigger.create({
      trigger: ".score-card",
      start: "top 80%",
      once: true,
      onEnter: () => {
        // Animate ring fill
        gsap.to(scoreRingFill, {
          strokeDashoffset: 37, // 87% filled
          duration: 2,
          ease: "power2.out",
          delay: 0.3,
        });

        // Animate counter
        const obj = { value: 0 };
        gsap.to(obj, {
          value: 87,
          duration: 2,
          ease: "power2.out",
          delay: 0.3,
          onUpdate: () => {
            scoreValue.textContent = Math.round(obj.value) + "%";
          },
        });
      },
    });
  };

  // ============================================
  // PHONE FLOATING ANIMATION
  // ============================================

  const initPhoneFloat = () => {
    const phoneFrame = document.querySelector(".phone-frame");
    if (!phoneFrame) return;

    // Continuous subtle float
    gsap.to(phoneFrame, {
      y: -15,
      rotate: 1,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Phone glow pulse
    const phoneGlow = document.querySelector(".phone-glow");
    if (phoneGlow) {
      gsap.to(phoneGlow, {
        scale: 1.1,
        opacity: 0.8,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  };

  // ============================================
  // PHONE SCREENSHOT CAROUSEL
  // ============================================

  const initPhoneCarousel = () => {
    const screenshots = document.querySelectorAll(".phone-screenshot");
    if (screenshots.length < 2) return;

    let currentIndex = 0;

    const showNext = () => {
      const current = screenshots[currentIndex];
      currentIndex = (currentIndex + 1) % screenshots.length;
      const next = screenshots[currentIndex];

      // Crossfade transition
      gsap.to(current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        next,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
          onStart: () => next.classList.add("active"),
        },
      );

      current.classList.remove("active");
    };

    // Start carousel after hero entrance
    setTimeout(() => {
      setInterval(showNext, 4000);
    }, 3000);
  };

  // ============================================
  // CHECKMARK GLOW PULSE
  // ============================================

  const initCheckmarkGlow = () => {
    const checkmarkIcon = document.querySelector(
      ".hero-checkmark .checkmark-icon",
    );
    if (!checkmarkIcon) return;

    // Start glow pulse after draw animation
    setTimeout(() => {
      gsap.to(checkmarkIcon, {
        filter: "drop-shadow(0 0 30px rgba(234, 88, 12, 0.6))",
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, 2000);
  };

  // ============================================
  // GRADIENT TEXT SHIMMER
  // ============================================

  const initGradientShimmer = () => {
    const gradientText = document.querySelector(".hero-title .text-gradient");
    if (!gradientText) return;

    // CSS animation handles this, but we can enhance it
    gsap.to(gradientText, {
      backgroundPosition: "200% center",
      duration: 3,
      ease: "none",
      repeat: -1,
    });
  };

  // ============================================
  // BADGE DOT PULSE
  // ============================================

  const initBadgePulse = () => {
    const badgeDot = document.querySelector(".badge-dot");
    if (!badgeDot) return;

    gsap.to(badgeDot, {
      scale: 1.3,
      opacity: 0.5,
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  };

  // ============================================
  // PARALLAX ON SCROLL
  // ============================================

  const initHeroParallax = () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    // Phone parallax (moves slower)
    const phoneMockup = document.querySelector(".phone-mockup-container");
    if (phoneMockup) {
      gsap.to(phoneMockup, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // Score card parallax
    const scoreCard = document.querySelector(".score-card");
    if (scoreCard) {
      gsap.to(scoreCard, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }

    // Hero content fades out on scroll
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      gsap.to(heroContent, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "center top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  };

  // ============================================
  // WAITLIST INPUT FOCUS GLOW
  // ============================================

  const initWaitlistGlow = () => {
    const inputGroup = document.querySelector(".hero .input-group");
    if (!inputGroup) return;

    const input = inputGroup.querySelector(".waitlist-input");
    if (!input) return;

    input.addEventListener("focus", () => {
      gsap.to(inputGroup, {
        boxShadow:
          "0 10px 40px rgba(234, 88, 12, 0.2), 0 0 0 3px rgba(234, 88, 12, 0.1)",
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    input.addEventListener("blur", () => {
      gsap.to(inputGroup, {
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  };

  // ============================================
  // INITIALIZE ALL HERO ANIMATIONS
  // ============================================

  const init = () => {
    // Main entrance timeline
    initHeroEntrance();

    // Score animations
    initScoreRing();

    // Phone animations
    initPhoneFloat();
    initPhoneCarousel();

    // Micro-interactions
    initCheckmarkGlow();
    initGradientShimmer();
    initBadgePulse();
    initWaitlistGlow();

    // Scroll-linked
    initHeroParallax();

    console.log("🚀 Hero animations initialized");
  };

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
