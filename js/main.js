/**
 * Rally Website - Main JavaScript
 * Handles scroll animations and interactive elements
 */

(function() {
  'use strict';

  // ============================================
  // SCROLL ANIMATIONS (Intersection Observer)
  // ============================================

  const initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.scroll-animate');

    if (!animatedElements.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(element => {
      observer.observe(element);
    });
  };

  // ============================================
  // HEADER SCROLL BEHAVIOR
  // ============================================

  const initFloatingCta = () => {
    const floatingCta = document.getElementById('floating-cta');
    const heroWaitlistForm = document.querySelector('#waitlist-form-hero');
    if (!floatingCta || !heroWaitlistForm) return;

    let ticking = false;

    const updateFloatingCta = () => {
      const formRect = heroWaitlistForm.getBoundingClientRect();
      // Show CTA when the hero waitlist form is scrolled out of view
      if (formRect.bottom < 0) {
        floatingCta.classList.add('visible');
      } else {
        floatingCta.classList.remove('visible');
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateFloatingCta);
        ticking = true;
      }
    }, { passive: true });
  };

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================

  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        e.preventDefault();

        // Account for fixed nav header
        const navHeader = document.querySelector('.nav-header');
        const headerHeight = navHeader?.offsetHeight || 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const mobileToggle = document.querySelector('.nav-mobile-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (mobileToggle && navLinks) {
          mobileToggle.classList.remove('open');
          navLinks.classList.remove('open');
        }
      });
    });
  };

  // ============================================
  // TIER CARDS ANIMATION
  // ============================================

  const initTierHover = () => {
    const tierCards = document.querySelectorAll('.tier-card');

    tierCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        // Remove active from all
        tierCards.forEach(c => c.classList.remove('active'));
        // Add active to hovered
        card.classList.add('active');
      });
    });

    // Reset to gold on mouse leave from container
    const tiersShowcase = document.querySelector('.tiers-showcase');
    if (tiersShowcase) {
      tiersShowcase.addEventListener('mouseleave', () => {
        tierCards.forEach(c => c.classList.remove('active'));
        const goldTier = document.querySelector('.tier-gold');
        if (goldTier) goldTier.classList.add('active');
      });
    }
  };

  // ============================================
  // SCORE RING ANIMATION ON SCROLL
  // ============================================

  const initScoreRing = () => {
    const scoreRing = document.querySelector('.score-ring-fill');
    if (!scoreRing) return;

    // Reset animation when it comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scoreRing.style.animation = 'none';
          scoreRing.offsetHeight; // Trigger reflow
          scoreRing.style.animation = 'score-fill 2s ease-out forwards';
        }
      });
    }, { threshold: 0.5 });

    observer.observe(scoreRing);
  };

  // ============================================
  // PARALLAX EFFECT FOR ORBS
  // ============================================

  const initOrbsParallax = () => {
    const orbs = document.querySelectorAll('.orb');
    if (!orbs.length) return;

    let ticking = false;

    const updateOrbs = () => {
      const scrollY = window.scrollY;

      orbs.forEach((orb, index) => {
        const speed = 0.05 + (index * 0.02);
        const yOffset = scrollY * speed;
        orb.style.transform = `translateY(${yOffset}px)`;
      });

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOrbs);
        ticking = true;
      }
    }, { passive: true });
  };

  // ============================================
  // BUTTON RIPPLE EFFECT
  // ============================================

  const initButtonRipple = () => {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          pointer-events: none;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          left: ${x}px;
          top: ${y}px;
          width: 100px;
          height: 100px;
          margin-left: -50px;
          margin-top: -50px;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Add ripple animation to stylesheet
    if (!document.querySelector('#ripple-styles')) {
      const style = document.createElement('style');
      style.id = 'ripple-styles';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };

  // ============================================
  // COUNTER ANIMATION FOR SCORE
  // ============================================

  const initScoreCounter = () => {
    const scoreValue = document.querySelector('.score-value');
    if (!scoreValue) return;

    const targetValue = 87;
    let hasAnimated = false;

    const animateCounter = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      let current = 0;
      const increment = targetValue / 40;
      const duration = 2000;
      const stepTime = duration / 40;

      const counter = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(counter);
        }
        scoreValue.textContent = Math.round(current) + '%';
      }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(animateCounter, 1000); // Delay to sync with ring animation
        }
      });
    }, { threshold: 0.5 });

    observer.observe(scoreValue);
  };

  // ============================================
  // 3D TILT CARD EFFECT
  // ============================================

  const initTiltCards = () => {
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

        // Update CSS custom properties for spotlight effect
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${percentX}%`);
        card.style.setProperty('--mouse-y', `${percentY}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  };

  // ============================================
  // MAGNETIC BUTTON EFFECT
  // ============================================

  const initMagneticButtons = () => {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  };

  // ============================================
  // CARD SPOTLIGHT EFFECT (Mouse tracking)
  // ============================================

  const initCardSpotlight = () => {
    const cards = document.querySelectorAll('.problem-card, .step-card, .feature-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;

        card.style.setProperty('--mouse-x', `${percentX}%`);
        card.style.setProperty('--mouse-y', `${percentY}%`);
      });
    });
  };

  // ============================================
  // SCROLL PROGRESS INDICATOR
  // ============================================

  const initScrollProgress = () => {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });

    // Initial update
    updateProgress();
  };

  // ============================================
  // PHONE CAROUSEL (3D Multi-Phone)
  // ============================================

  const initPhoneCarousel = () => {
    const carousel = document.getElementById('phone-carousel');
    const phones = document.querySelectorAll('.carousel-phone');
    const dots = document.querySelectorAll('.carousel-dot');

    if (!carousel || phones.length < 2) return;

    let currentIndex = 2; // Start with middle phone (Ranks)
    let autoAdvanceInterval;
    let isHovering = false;
    const autoAdvanceDelay = 5000; // 5 seconds

    // Update active state with smooth transition
    const updateCarousel = (newIndex) => {
      currentIndex = newIndex;
      const totalPhones = phones.length;

      phones.forEach((phone, index) => {
        // Remove all position classes
        phone.classList.remove('active', 'prev', 'next');
        
        if (index === currentIndex) {
          phone.classList.add('active');
        } else if (index === (currentIndex - 1 + totalPhones) % totalPhones) {
          // Previous phone (with wrap-around)
          phone.classList.add('prev');
        } else if (index === (currentIndex + 1) % totalPhones) {
          // Next phone (with wrap-around)
          phone.classList.add('next');
        }
      });

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };

    // Navigate to specific index
    const goToSlide = (index) => {
      if (index < 0) index = phones.length - 1;
      if (index >= phones.length) index = 0;
      updateCarousel(index);
    };

    // Auto advance
    const startAutoAdvance = () => {
      if (autoAdvanceInterval) clearInterval(autoAdvanceInterval);
      autoAdvanceInterval = setInterval(() => {
        if (!isHovering) {
          goToSlide(currentIndex + 1);
        }
      }, autoAdvanceDelay);
    };

    const stopAutoAdvance = () => {
      if (autoAdvanceInterval) {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = null;
      }
    };

    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        startAutoAdvance();
      });
    });

    // HOVER to activate phones on desktop
    phones.forEach((phone, index) => {
      phone.addEventListener('mouseenter', () => {
        stopAutoAdvance();
        goToSlide(index);
      });

      // TAP to activate on mobile (touch devices)
      phone.addEventListener('click', (e) => {
        if (index !== currentIndex) {
          e.preventDefault();
          goToSlide(index);
          stopAutoAdvance();
        }
      });
    });

    // Resume auto-advance when mouse leaves the carousel
    carousel.addEventListener('mouseenter', () => {
      isHovering = true;
      stopAutoAdvance();
    });

    carousel.addEventListener('mouseleave', () => {
      isHovering = false;
      startAutoAdvance();
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - go to next
          goToSlide(currentIndex + 1);
        } else {
          // Swipe right - go to previous
          goToSlide(currentIndex - 1);
        }
        startAutoAdvance();
      }
    };

    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
        startAutoAdvance();
      } else if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
        startAutoAdvance();
      }
    });

    // Initialize
    updateCarousel(currentIndex);
    startAutoAdvance();
  };

  // ============================================
  // INITIALIZE ALL
  // ============================================

  const init = () => {
    initScrollAnimations();
    initFloatingCta();
    initSmoothScroll();
    initTierHover();
    initScoreRing();
    initOrbsParallax();
    initButtonRipple();
    initScoreCounter();
    initTiltCards();
    initMagneticButtons();
    initCardSpotlight();
    initScrollProgress();
    initPhoneCarousel();
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
