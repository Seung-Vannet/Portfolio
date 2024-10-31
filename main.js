// Select the theme toggle button and icon
const themeToggleButton = document.querySelector('.theme');
const themeIcon = themeToggleButton.querySelector('i');

// Function to switch themes
function switchTheme() {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    themeIcon.classList.replace('fa-toggle-on', 'fa-toggle-off');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.replace('fa-toggle-off', 'fa-toggle-on');
    localStorage.setItem('theme', 'light');
  }
}

// Apply the saved theme on page load
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-toggle-on', 'fa-toggle-off');
  }
}

// Add event listener to the theme toggle button
themeToggleButton.addEventListener('click', switchTheme);

// Call the function to apply the saved theme on page load
applySavedTheme();
