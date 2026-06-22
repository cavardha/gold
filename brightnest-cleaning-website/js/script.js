(() => {
  document.body.classList.add('animations-ready');

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('menu-open', isOpen);
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach((el) => revealObserver.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in-view'));
  }

  const slider = document.getElementById('baSlider');
  const afterImage = document.querySelector('.ba-img.after');
  const divider = document.getElementById('baDivider');

  function updateBeforeAfter(value) {
    if (!afterImage || !divider) return;
    afterImage.style.clipPath = `inset(0 0 0 ${value}%)`;
    divider.style.left = `${value}%`;
  }

  if (slider) {
    updateBeforeAfter(slider.value || 52);
    slider.addEventListener('input', (event) => updateBeforeAfter(event.target.value));
  }


  function setupAutoSlider(slideSelector, dotSelector, intervalMs) {
    const slides = Array.from(document.querySelectorAll(slideSelector));
    const dots = Array.from(document.querySelectorAll(dotSelector));
    if (slides.length <= 1) return;

    let currentIndex = 0;
    let timerId = null;

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === currentIndex;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === currentIndex);
      });
    }

    function start() {
      window.clearInterval(timerId);
      timerId = window.setInterval(() => showSlide(currentIndex + 1), intervalMs);
    }

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => {
        showSlide(dotIndex);
        start();
      });
    });

    showSlide(0);
    start();
  }

  setupAutoSlider('.hero-slide', '.slide-dot', 4200);
  setupAutoSlider('.review-slide', '.review-dot', 3500);

  const quoteForm = document.getElementById('quoteForm');
  const stickyText = document.getElementById('stickyText');

  // Replace with the real US business number in E.164 format.
  // Example: +14155550138 means +1 (415) 555-0138.
  const businessPhoneE164 = '+14155550138';
  const defaultTextMessage = 'Hello BrightNest Cleaning, I would like a cleaning estimate.';

  function buildSmsUrl(message) {
    return `sms:${businessPhoneE164}?&body=${encodeURIComponent(message)}`;
  }

  if (stickyText) {
    stickyText.href = buildSmsUrl(defaultTextMessage);
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(quoteForm);
      const details = {
        name: String(formData.get('name') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        city: String(formData.get('city') || '').trim(),
        service: String(formData.get('service') || '').trim(),
        date: String(formData.get('date') || '').trim(),
        message: String(formData.get('message') || '').trim()
      };

      const smsText = [
        'Hello BrightNest Cleaning, I need a cleaning estimate.',
        '',
        `Name: ${details.name}`,
        `Phone: ${details.phone}`,
        `City/Area: ${details.city}`,
        `Service: ${details.service}`,
        `Preferred Date: ${details.date || 'Not fixed'}`,
        `Requirement: ${details.message || 'Please call or text me to discuss.'}`
      ].join('\n');

      window.location.href = buildSmsUrl(smsText);
    });
  }
})();
