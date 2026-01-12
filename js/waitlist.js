/**
 * Rally Website - Waitlist Form Handler
 * Handles email capture and Supabase integration
 */

(function() {
  'use strict';

  // ============================================
  // SUPABASE CONFIGURATION
  // ============================================

  const SUPABASE_URL = 'https://luycgijiyhemhtjiggze.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1eWNnaWppeWhlbWh0amlnZ3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNjU3MTQsImV4cCI6MjA3OTc0MTcxNH0.P8JgjE0Ewt3DKoHm1txZgmvDnhzJKi5addToq5Zatsw';

  // Initialize Supabase client
  let supabase = null;

  const initSupabase = () => {
    if (typeof window.supabase !== 'undefined' && SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
      supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      return true;
    }
    return false;
  };

  // ============================================
  // FORM HANDLING
  // ============================================

  const handleFormSubmit = async (form, email) => {
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const messageEl = form.querySelector('.waitlist-message');

    // Show loading state
    btnText.hidden = true;
    btnLoading.hidden = false;
    submitBtn.disabled = true;

    try {
      if (!supabase) {
        // Fallback: Log to console if Supabase isn't configured
        console.log('Waitlist signup (Supabase not configured):', email);

        // Simulate success for demo
        await new Promise(resolve => setTimeout(resolve, 1000));
        showMessage(messageEl, 'success', "You're on the list! We'll be in touch soon.");
        form.reset();
        updateWaitlistCount();
        return;
      }

      // Insert email into Supabase waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email.toLowerCase().trim(),
            source: 'website'
          }
        ]);

      if (error) {
        // Handle duplicate email
        if (error.code === '23505') {
          showMessage(messageEl, 'info', "You're already on the waitlist! We'll notify you when we launch.");
        } else {
          throw error;
        }
      } else {
        showMessage(messageEl, 'success', "You're on the list! We'll be in touch soon.");
        form.reset();
        updateWaitlistCount();
      }
    } catch (error) {
      console.error('Waitlist signup error:', error);
      showMessage(messageEl, 'error', 'Something went wrong. Please try again.');
    } finally {
      // Reset button state
      btnText.hidden = false;
      btnLoading.hidden = true;
      submitBtn.disabled = false;
    }
  };

  const showMessage = (el, type, text) => {
    el.textContent = text;
    el.hidden = false;
    el.className = `waitlist-message waitlist-message-${type}`;

    // Auto-hide after 5 seconds
    setTimeout(() => {
      el.hidden = true;
    }, 5000);
  };

  // ============================================
  // WAITLIST COUNT
  // ============================================

  const updateWaitlistCount = async () => {
    // No longer displaying count on the page - removed fake numbers
  };

  // ============================================
  // EMAIL VALIDATION
  // ============================================

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // ============================================
  // INITIALIZE
  // ============================================

  const init = () => {
    // Initialize Supabase
    initSupabase();

    // Get all waitlist forms
    const forms = document.querySelectorAll('.waitlist-form');

    forms.forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;
        const messageEl = form.querySelector('.waitlist-message');

        // Validate email
        if (!isValidEmail(email)) {
          showMessage(messageEl, 'error', 'Please enter a valid email address.');
          return;
        }

        await handleFormSubmit(form, email);
      });
    });

    // Fetch initial waitlist count
    updateWaitlistCount();
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
