document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('#darkmode-toggle');
    const bodyElement = document.body;

    // Load the saved theme from localStorage
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
        bodyElement.classList.add('darkmode');
        darkModeToggle.checked = true;
    } else {
        bodyElement.classList.remove('darkmode');
        darkModeToggle.checked = false;
    }

    // Toggle dark mode on checkbox change
    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            bodyElement.classList.add('darkmode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            bodyElement.classList.remove('darkmode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
