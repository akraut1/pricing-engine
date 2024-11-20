document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-Toggle");
  const toggleDarkIcon = document.querySelector(".toggle-dark-icon");
  const toggleLightIcon = document.querySelector(".toggle-light-icon");

  // Handle dark mode toggle
  themeToggle.addEventListener("click", function() {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      toggleDarkIcon.classList.remove("hidden");
      toggleLightIcon.classList.add("hidden");
    } else {
      document.body.classList.add("dark-mode");
      toggleDarkIcon.classList.add("hidden");
      toggleLightIcon.classList.remove("hidden");
    }
  });
});
