document.addEventListener('DOMContentLoaded', () => {
  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you, Sweta! Your message has been sent successfully.');
      contactForm.reset();
    });
  }

  // Project Category Filter Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Certificate Modal Logic
  const certModal = document.getElementById('certModal');
  const modalCertTitle = document.getElementById('modalCertTitle');
  const modalCertImage = document.getElementById('modalCertImage');
  const closeCertModal = document.getElementById('closeCertModal');
  const certBtns = document.querySelectorAll('.cert-btn');

  certBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const certTitle = btn.getAttribute('data-title');
      const certImg = btn.getAttribute('data-img');

      modalCertTitle.innerText = certTitle;
      modalCertImage.src = certImg;
      certModal.style.display = 'flex';
    });
  });

  if (closeCertModal) {
    closeCertModal.addEventListener('click', () => {
      certModal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === certModal) {
      certModal.style.display = 'none';
    }
  });
});
