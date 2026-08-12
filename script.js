document.addEventListener('DOMContentLoaded', () => {
  // Smooth alert on Contact Form submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you, Sweta! Your message has been sent successfully.');
      contactForm.reset();
    });
  }

  // Interactive Project Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Dark / Light Theme Toggle Placeholder
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      themeToggle.classList.toggle('fa-sun');
      themeToggle.classList.toggle('fa-moon');
    });
  }
});
