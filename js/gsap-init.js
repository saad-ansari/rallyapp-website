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
  // 3D PHONE CAROUSEL INTERACTIVITY
  // ============================================

  const initPhone3D = () => {
    const container = document.querySelector('.phone-carousel-container');
    if (!container) return;

    const phones = container.querySelectorAll('.carousel-phone');
    
    // Add subtle mouse-follow parallax to container
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(container, {
        rotateY: x * 5,
        rotateX: -y * 3,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 2000,
      });
    });

    container.addEventListener('mouseleave', () => {
      gsap.to(container, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });
    });

    // Add hover tilt to individual phones
    phones.forEach(phone => {
      phone.addEventListener('mouseenter', () => {
        if (!phone.classList.contains('active')) {
          gsap.to(phone.querySelector('.phone-frame-mini'), {
            scale: 1.05,
            rotateY: 0,
            z: 30,
            duration: 0.4,
            ease: 'power2.out',
          });
        }
      });

      phone.addEventListener('mouseleave', () => {
        if (!phone.classList.contains('active')) {
          gsap.to(phone.querySelector('.phone-frame-mini'), {
            scale: 1,
            z: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        }
      });
    });
  };

  // ============================================
  // FLOATING CTA VISIBILITY
  // ============================================

  const initFloatingCta = () => {
    const floatingCta = document.getElementById("floating-cta");
    const heroDownloadButtons = document.querySelector(".hero .download-buttons");

    if (!floatingCta || !heroDownloadButtons) return;

    ScrollTrigger.create({
      trigger: heroDownloadButtons,
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
  // NAVIGATION SHOW/HIDE ON SCROLL
  // ============================================

  const initNavigation = () => {
    const nav = document.querySelector('.nav-header');
    if (!nav) return;

    let lastScrollY = 0;
    let ticking = false;

    const updateNav = () => {
      const scrollY = window.scrollY;
      
      // Show nav after scrolling 100px
      if (scrollY > 100) {
        nav.classList.add('visible');
        
        // Add scrolled class for enhanced styling
        if (scrollY > 200) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      } else {
        nav.classList.remove('visible', 'scrolled');
      }
      
      lastScrollY = scrollY;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNav);
        ticking = true;
      }
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
      });

      // Close menu on link click
      navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileToggle.classList.remove('open');
          navLinks.classList.remove('open');
        });
      });
    }
  };

  // ============================================
  // CURSOR GLOW EFFECT
  // ============================================

  const initCursorGlow = () => {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow) return;

    // Only init on non-touch devices
    if ('ontouchstart' in window) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let isVisible = false;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isVisible) {
        cursorGlow.classList.add('visible');
        isVisible = true;
      }
    });

    document.addEventListener('mouseleave', () => {
      cursorGlow.classList.remove('visible');
      isVisible = false;
    });

    // Smooth follow animation
    const updateGlow = () => {
      const dx = mouseX - glowX;
      const dy = mouseY - glowY;
      
      glowX += dx * 0.1;
      glowY += dy * 0.1;
      
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
      
      requestAnimationFrame(updateGlow);
    };
    
    updateGlow();
  };

  // ============================================
  // COUNTER ANIMATIONS
  // ============================================

  const initCounterAnimations = () => {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length) return;

    counters.forEach(counter => {
      const target = parseFloat(counter.dataset.count);
      const suffix = counter.dataset.suffix || '';
      const prefix = counter.dataset.prefix || '';
      const decimals = counter.dataset.decimals ? parseInt(counter.dataset.decimals, 10) : 0;
      // For decimals, divide target (e.g., 49 with decimals=1 becomes 4.9)
      const actualTarget = decimals > 0 ? target / Math.pow(10, decimals) : target;
      
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const obj = { value: 0 };
          gsap.to(obj, {
            value: actualTarget,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              const formatted = decimals > 0 
                ? obj.value.toFixed(decimals) 
                : Math.round(obj.value).toLocaleString();
              counter.innerText = prefix + formatted + suffix;
            }
          });
        }
      });
    });
  };

  // ============================================
  // SOCIAL PROOF SECTION ANIMATIONS
  // ============================================

  const initSocialProofAnimations = () => {
    const socialSection = document.querySelector('.social-proof-section');
    if (!socialSection) return;

    // Stat cards stagger animation
    const statCards = socialSection.querySelectorAll('.stat-card');
    if (statCards.length) {
      gsap.from(statCards, {
        scrollTrigger: {
          trigger: '.social-proof-stats',
          start: 'top 80%',
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'expo.out',
      });
    }

    // Testimonials entrance
    const testimonialWrapper = socialSection.querySelector('.testimonials-wrapper');
    if (testimonialWrapper) {
      gsap.from(testimonialWrapper, {
        scrollTrigger: {
          trigger: testimonialWrapper,
          start: 'top 85%',
          once: true,
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      });
    }
  };

  // ============================================
  // REVEAL ANIMATIONS ON SCROLL
  // ============================================

  const initRevealAnimations = () => {
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-scale');
    
    revealElements.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          el.classList.add('revealed');
        }
      });
    });
  };

  // ============================================
  // ENHANCED MAGNETIC BUTTONS
  // ============================================

  const initEnhancedMagnetic = () => {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach(btn => {
      const strength = 0.3;
      
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: 'power2.out'
        });
        
        // Also move inner elements slightly more
        const inner = btn.querySelector('span, svg');
        if (inner) {
          gsap.to(inner, {
            x: x * strength * 0.5,
            y: y * strength * 0.5,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
        
        const inner = btn.querySelector('span, svg');
        if (inner) {
          gsap.to(inner, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
          });
        }
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
    initPhone3D();
    initFloatingCta();
    initButtonRipple();

    // New enhanced features
    initNavigation();
    initCursorGlow();
    initCounterAnimations();
    initSocialProofAnimations();
    initRevealAnimations();
    initEnhancedMagnetic();

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
