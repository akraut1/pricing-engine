(function() {
  // Theme toggle functionality
  function createThemeToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle-btn';
    toggleButton.setAttribute('aria-label', 'Toggle theme');
    toggleButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sun-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="moon-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    `;
    
    document.body.appendChild(toggleButton);
    return toggleButton;
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }

  function initThemeToggle() {
    const themeToggle = createThemeToggle();
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    // Toggle theme when the button is clicked
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });

    // Listen for changes in system color scheme
    prefersDarkScheme.addEventListener('change', (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    });
  }

  // Initialize theme toggle when the form is ready
  if (window.Feathery) {
    window.Feathery.onFormReady(() => {
      initThemeToggle();
    });
  } else {
    console.error('Feathery object not found. Make sure this script is loaded after the Feathery form script.');
  }
})();
