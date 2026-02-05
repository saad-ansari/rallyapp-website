/**
 * Rally Website - GSAP Animation System
 * Premium animations with GSAP + ScrollTrigger
 */

(function () {
  "use strict";

  // Wait for GSAP and ScrollTrigger to load
  if (typeof gsap === "undefined") {
    console.warn("GSAP not loaded");
    return;
  }

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // ============================================
  // MOTION DESIGN TOKENS
  // ============================================

  window.RALLY_MOTION = {
    // Easing curves
    easing: {
      // Primary - smooth deceleration (most transitions)
      primary: "expo.out",
      // Bouncy - playful entrances
      bounce: "elastic.out(1, 0.5)",
      // Snappy - quick interactions
      snappy: "power3.out",
      // Smooth - exits and subtle moves
      smooth: "power2.inOut",
      // Linear - for continuous animations
      linear: "none",
    },

    // Duration tokens
    duration: {
      fast: 0.3,
      normal: 0.5,
      slow: 0.8,
      slower: 1.2,
    },

    // Stagger amounts
    stagger: {
      fast: 0.05,
      normal: 0.1,
      slow: 0.15,
    },
  };

  // ============================================
  // ACCESSIBILITY: Reduced Motion Support
  // ============================================

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    // Disable all GSAP animations
    gsap.globalTimeline.timeScale(0);
    ScrollTrigger.defaults({ markers: false });

    // Make all elements visible immediately
    document.querySelectorAll(".gsap-hidden").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });

    console.log("Reduced motion enabled - animations disabled");
    return;
  }

  // ============================================
  // SCROLL PROGRESS INDICATOR
  // ============================================

  const initScrollProgress = () => {
    const progressBar = document.getElementById("scroll-progress");
    if (!progressBar) return;

    gsap.to(progressBar, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  };

  // ============================================
  // PARALLAX ORB BACKGROUNDS
  // ============================================

  const initOrbsParallax = () => {
    const orbs = document.querySelectorAll(".orb");
    if (!orbs.length) return;

    orbs.forEach((orb, index) => {
      const speed = 100 + index * 50;

      gsap.to(orb, {
        y: speed,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  };

  // ============================================
  // MAGNETIC BUTTON EFFECT
  // ============================================

  const initMagneticButtons = () => {
    const buttons = document.querySelectorAll(".btn-primary, .floating-cta");

    buttons.forEach((btn) => {
      const strength = 0.3;

      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });
  };

  // ============================================
  // CARD SPOTLIGHT EFFECT
  // ============================================

  const initCardSpotlight = () => {
    const cards = document.querySelectorAll(
      ".problem-card, .step-card, .feature-card, .scope-card, .rule-card",
    );

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
      });
    });
  };

  // ============================================
  // 3D TILT CARD EFFECT
  // ============================================

  const initTiltCards = () => {
    const cards = document.querySelectorAll(".tilt-card, .score-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  };

  // ============================================
  // FLOATING CTA VISIBILITY
  // ============================================

  const initFloatingCta = () => {
    const floatingCta = document.getElementById("floating-cta");
    const heroWaitlistForm = document.querySelector("#waitlist-form-hero");

    if (!floatingCta || !heroWaitlistForm) return;

    ScrollTrigger.create({
      trigger: heroWaitlistForm,
      start: "bottom top",
      onEnter: () => floatingCta.classList.add("visible"),
      onLeaveBack: () => floatingCta.classList.remove("visible"),
    });
  };

  // ============================================
  // SCROLL-TRIGGERED SECTION ANIMATIONS
  // ============================================

  const initSectionAnimations = () => {
    // Generic scroll-reveal for all sections
    const sections = document.querySelectorAll(
      ".problem-section, .solution-section, .how-section, .leaderboard-section, .features-section, .cta-section",
    );

    sections.forEach((section) => {
      const animatedElements = section.querySelectorAll(".scroll-animate");

      animatedElements.forEach((el, index) => {
        gsap.set(el, {
          opacity: 0,
          y: 60,
          scale: 0.95,
        });

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "expo.out",
            });
          },
        });
      });
    });
  };

  // ============================================
  // COUNTER ANIMATION UTILITY
  // ============================================

  window.animateCounter = (element, endValue, duration = 2, suffix = "") => {
    const obj = { value: 0 };

    gsap.to(obj, {
      value: endValue,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.round(obj.value) + suffix;
      },
    });
  };

  // ============================================
  // BUTTON CLICK RIPPLE
  // ============================================

  const initButtonRipple = () => {
    document.querySelectorAll(".btn-primary").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement("span");
        ripple.className = "btn-ripple";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        this.appendChild(ripple);

        gsap.fromTo(
          ripple,
          { scale: 0, opacity: 0.5 },
          {
            scale: 4,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => ripple.remove(),
          },
        );
      });
    });
  };

  // ============================================
  // INITIALIZE ALL BASE ANIMATIONS
  // ============================================

  const init = () => {
    // Core utilities
    initScrollProgress();
    initOrbsParallax();
    initMagneticButtons();
    initCardSpotlight();
    initTiltCards();
    initFloatingCta();
    initButtonRipple();

    // Section animations
    initSectionAnimations();

    console.log("🎬 GSAP Animation System initialized");
  };

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
