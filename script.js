// Family Trivia Landing Page Interactivity

document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  document.getElementById('current-year').textContent =
    new Date().getFullYear();

  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Close other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // CTA Button handlers
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

  ctaButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const buttonText = this.textContent.trim();

      if (buttonText.includes('iOS')) {
        alert('📱 iOS App\n\nComing soon to the App Store!');
      } else if (buttonText.includes('Android')) {
        alert('📱 Android App\n\nComing soon to Google Play!');
      } else {
        alert(
          '🎉 Welcome to Family Trivia!\n\nGet ready for personalized trivia fun for the whole family.\n\nApp launching soon!'
        );
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for fade-in animation
  document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});
