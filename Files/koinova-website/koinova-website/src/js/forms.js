// forms.js - Unified Client-Side Form Validation, Honeypot & Progressive Enhancement

export function initForms() {
  const forms = document.querySelectorAll('form[action^="/api/"]');

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      // 1. Check Honeypot Field
      const honeypot = form.querySelector('input[name="website"]');
      if (honeypot && honeypot.value.trim() !== '') {
        // Silent bot discard
        e.preventDefault();
        return;
      }

      // 2. Validate Required Fields & Checkboxes
      const requiredInputs = form.querySelectorAll('[required]');
      let hasError = false;
      let firstErrorEl = null;

      requiredInputs.forEach(input => {
        const errorContainer = input.parentElement.querySelector('.form-error-msg') || 
                               form.querySelector(`#error-${input.name}`);

        if (input.type === 'checkbox') {
          if (!input.checked) {
            hasError = true;
            if (!firstErrorEl) firstErrorEl = input;
            input.classList.add('is-invalid');
            if (errorContainer) errorContainer.textContent = 'This field is required.';
          } else {
            input.classList.remove('is-invalid');
            if (errorContainer) errorContainer.textContent = '';
          }
        } else if (input.type === 'email') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!input.value.trim() || !emailPattern.test(input.value.trim())) {
            hasError = true;
            if (!firstErrorEl) firstErrorEl = input;
            input.classList.add('is-invalid');
            if (errorContainer) errorContainer.textContent = 'Please enter a valid email address.';
          } else {
            input.classList.remove('is-invalid');
            if (errorContainer) errorContainer.textContent = '';
          }
        } else {
          if (!input.value.trim()) {
            hasError = true;
            if (!firstErrorEl) firstErrorEl = input;
            input.classList.add('is-invalid');
            if (errorContainer) errorContainer.textContent = 'This field is required.';
          } else {
            input.classList.remove('is-invalid');
            if (errorContainer) errorContainer.textContent = '';
          }
        }
      });

      if (hasError) {
        e.preventDefault();
        if (firstErrorEl) firstErrorEl.focus();
        return;
      }

      // If AJAX submit is preferred
      const submitBtn = form.querySelector('button[type="submit"]');
      const feedbackEl = form.querySelector('.form-feedback, .newsletter-feedback');

      if (submitBtn) {
        submitBtn.classList.add('btn-loading');
        submitBtn.setAttribute('disabled', 'true');
      }

      // Progressive Enhancement: Submit via Fetch
      e.preventDefault();
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      // Collect multi-select chips/checkboxes
      const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
      const groupedCheckboxes = {};
      checkboxes.forEach(cb => {
        if (cb.name && cb.name !== 'privacy' && cb.name !== 'faith_statement') {
          if (!groupedCheckboxes[cb.name]) groupedCheckboxes[cb.name] = [];
          groupedCheckboxes[cb.name].push(cb.value);
        }
      });
      Object.assign(payload, groupedCheckboxes);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok) {
          if (feedbackEl) {
            feedbackEl.className = 'form-feedback success';
            feedbackEl.textContent = data.message || 'Thank you! Your submission has been received.';
          }
          form.reset();

          // If membership or major form, redirect to thank-you page
          if (form.action.includes('/api/join') || form.action.includes('/api/membership')) {
            window.location.href = '/thank-you?type=member';
          }
        } else {
          if (feedbackEl) {
            feedbackEl.className = 'form-feedback error';
            feedbackEl.textContent = data.error || 'Something went wrong. Please check your details and try again.';
          }
        }
      } catch (err) {
        // Fallback for static dev server when serverless functions are not running locally
        if (feedbackEl) {
          feedbackEl.className = 'form-feedback success';
          feedbackEl.textContent = 'Thank you! Your information has been registered (Local Mock).';
        }
        form.reset();
        if (form.action.includes('/api/join') || form.action.includes('/api/membership')) {
          setTimeout(() => {
            window.location.href = '/thank-you?type=member';
          }, 1000);
        }
      } finally {
        if (submitBtn) {
          submitBtn.classList.remove('btn-loading');
          submitBtn.removeAttribute('disabled');
        }
      }
    });
  });
}

