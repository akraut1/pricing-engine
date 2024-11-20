document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.querySelector('#darkmode-container-toggle');
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
    darkModeToggle.checked = true;
  }

  // Add event listener for toggle
  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function () {
      if (this.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  } else {
    console.error('Dark mode toggle not found in the form.');
  }
});
