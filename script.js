document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("themeToggle");
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

  // Form submission handler
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";

    try {
      // Call your authentication API
      const response = await fetch("YOUR_SUPABASE_LOGIN_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error.message);

      // Redirect to dashboard after successful login
      window.location.href = "/dashboard";
    } catch (error) {
      errorMessage.textContent = "Invalid login credentials. Please try again.";
    }
  });

  // Google Sign-In Button
  const googleSignInButton = document.getElementById("googleSignInButton");
  googleSignInButton.addEventListener("click", function() {
    alert("Google sign-in not implemented yet.");
  });

  // GitHub Sign-In Button
  const githubSignInButton = document.getElementById("githubSignInButton");
  githubSignInButton.addEventListener("click", function() {
    alert("GitHub sign-in not implemented yet.");
  });
});
