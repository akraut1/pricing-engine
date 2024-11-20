document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('#darkmode-toggle');
    const bodyElement = document.body;

    console.log('Dark Mode Toggle Element:', darkModeToggle);
    console.log('Body Element:', bodyElement);

    if (!darkModeToggle) {
        console.error('Dark mode toggle element not found!');
        return;
    }

    // Load the saved theme from localStorage
    const darkMode = localStorage.getItem('darkMode');
    console.log('Saved Dark Mode:', darkMode);

    if (darkMode === 'enabled') {
        bodyElement.classList.add('darkmode');
        darkModeToggle.checked = true;
        console.log('Dark mode enabled on load');
    } else {
        bodyElement.classList.remove('darkmode');
        darkModeToggle.checked = false;
        console.log('Dark mode disabled on load');
    }

    // Toggle dark mode on checkbox change
    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            bodyElement.classList.add('darkmode');
            localStorage.setItem('darkMode', 'enabled');
            console.log('Dark mode toggled on');
        } else {
            bodyElement.classList.remove('darkmode');
            localStorage.setItem('darkMode', 'disabled');
            console.log('Dark mode toggled off');
        }
    });
});
