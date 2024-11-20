document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.querySelector('#darkmode-toggle');
  const container = document.querySelector('#darkmode-container');
  const body = document.body;

  // Load the saved theme from localStorage
  let darkMode = localStorage.getItem('darkMode');

  const enableDarkMode = () => {
    body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
  };

  const disableDarkMode = () => {
    body.classList.remove('darkmode');
    localStorage.setItem('darkMode', 'disabled');
  };

  // Apply the saved theme
  if (darkMode === 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  // Add event listener for toggle
  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function () {
      darkMode = localStorage.getItem('darkMode');
      if (darkMode !== 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  } else {
    console.error('Dark mode toggle not found in Feathery form.');
  }
});
