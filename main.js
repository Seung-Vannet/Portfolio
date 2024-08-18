document.addEventListener('DOMContentLoaded', function() {
  const themeButton = document.getElementById('theme');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  themeButton.addEventListener('click', function() {
      const theme = document.documentElement.getAttribute('data-theme');

      if (theme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'light');
          themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
          localStorage.setItem('theme', 'light');
      } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
          localStorage.setItem('theme', 'dark');
      }
  });
});
