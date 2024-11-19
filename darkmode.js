document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.querySelector('#darkmode-toggle');
  const container = document.querySelector('#darkmode-toggle-container');
  const body = document.body;
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#darkmode-toggle');

console.log(darkMode);

// check if dark mode is enabled
// if dark mode is enabled, turn it off. If dark mode is dusabled, tturn it on

const enableDarkMode = () => {
  // 1. add the class darkmode to the body
  body.classList.add('darkmode');
  // 2. update darkMode in the localStorage
  localStorage.setItem('darkMode', 'enabled')
};

const disableDarkMode = () => {
  // 1. add the class darkmode to the body
  body.classList.remove('darkmode');
  // 2. update darkMode in the localStorage
  localStorage.setItem('darkMode', 'null')
};

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
