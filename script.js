document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Switcher Persistence
  const themeToggleBtn = document.getElementById('theme-toggle');
  const icon = themeToggleBtn.querySelector('i');

  const currentTheme = localStorage.getItem('portfolio-theme');
  if (currentTheme === 'light') {
    document.body.classList.replace('dark-theme', 'light-theme');
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.replace('dark-theme', 'light-theme');
      icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      document.body.classList.replace('light-theme', 'dark-theme');
      icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  });

  // 2. Animated Skill Progress Bars on Scroll
  const skillSection = document.getElementById('skills');
  const progressFills = document.querySelectorAll('.progress-fill');
  let animated = false;

  window.addEventListener('scroll', () => {
    if (!skillSection) return;
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !animated) {
      progressFills.forEach(fill => {
        const targetWidth = fill.getAttribute('data-progress');
        fill.style.width = targetWidth;
      });
      animated = true;
    }
  });

  // 3. Dynamic Interactive Project Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // 4. Interactive Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      formStatus.style.color = '#2dd4bf';
      formStatus.textContent = 'Sending message...';

      setTimeout(() => {
        formStatus.textContent = 'Message sent successfully! (Demo Mode)';
        contactForm.reset();
      }, 1200);
    });
  }

  // 5. Resume Download Action
  const resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Resume download triggered! Attach your resume PDF link to this button.');
    });
  }
});
