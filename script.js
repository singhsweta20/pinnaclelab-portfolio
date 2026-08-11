document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const icon = themeToggleBtn.querySelector('i');

  // Local Storage Theme Persistence
  const currentTheme = localStorage.getItem('portfolio-theme');
  if (currentTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
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
});
