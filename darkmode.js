let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#darkmode-toggle');

console.log(darkMode);

// check if dark mode is enabled
// if dark mode is enabled, turn it off. If dark mode is dusabled, tturn it on

const enableDarkMode = () => {
  //1. add the class darkmode to the body
  document.body.classList.add('darkmode');
  // 2. update darkMode in the localStorage
  localStorage.setItem('darkMode', 'enabled')
};

const disableDarkMode = () => {
  //1. add the class darkmode to the body
  document.body.classList.remove('darkmode');
  // 2. update darkMode in the localStorage
  localStorage.setItem('darkMode', 'null')
};

if (darkMode === 'enabled') {
  enableDarkMOde();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode !== 'enabled') {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});
