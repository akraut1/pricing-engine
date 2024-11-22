document.addEventListener('DOMContentLoaded', function () {
    // Select the dark mode toggle using its ID
    const darkModeSwitch = document.querySelector('#darkmode-toggle');
    const bodyElement = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = bodyElement.classList.contains('darkmode');

        if (isDarkMode) {
            // Disable dark mode
            bodyElement.classList.remove('darkmode');
            localStorage.setItem('theme', 'light');
            darkModeSwitch.setAttribute('aria-pressed', 'false');
            console.log('Dark mode disabled');
        } else {
            // Enable dark mode
            bodyElement.classList.add('darkmode');
            localStorage.setItem('theme', 'dark');
            darkModeSwitch.setAttribute('aria-pressed', 'true');
            console.log('Dark mode enabled');
        }
    }

    // Retrieve the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            bodyElement.classList.add('darkmode');
            darkModeSwitch.checked = true;
            darkModeSwitch.setAttribute('aria-pressed', 'true');
            console.log('Dark mode applied from localStorage');
        } else {
            bodyElement.classList.remove('darkmode');
            darkModeSwitch.checked = false;
            darkModeSwitch.setAttribute('aria-pressed', 'false');
            console.log('Light mode applied from localStorage');
        }
    } else {
        // If no theme is saved, use the system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            bodyElement.classList.add('darkmode');
            darkModeSwitch.checked = true;
            darkModeSwitch.setAttribute('aria-pressed', 'true');
            console.log('Dark mode applied from system preference');
        } else {
            bodyElement.classList.remove('darkmode');
            darkModeSwitch.checked = false;
            darkModeSwitch.setAttribute('aria-pressed', 'false');
            console.log('Light mode applied from system preference');
        }
    }

    // Add event listener to the toggle switch if it exists
    if (darkModeSwitch) {
        darkModeSwitch.addEventListener('change', toggleDarkMode);
    } else {
        console.error('Dark mode toggle element not found! Ensure it has the correct ID ("darkmode-toggle").');
    }
});
