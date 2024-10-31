document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const googleSignInButton = document.getElementById("googleSignInButton");
  const githubSignInButton = document.getElementById("githubSignInButton");
  const darkModeToggle = document.getElementById("dark-mode");
  const errorMessage = document.getElementById("error-message");

  // Handle dark mode toggle
  darkModeToggle.addEventListener("change", function() {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
  });

  // Handle login form submission
  loginForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    errorMessage.textContent = "";

    try {
      // Call Supabase API for authentication (replace URL as needed)
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

  // Handle Google sign in
  googleSignInButton.addEventListener("click", function() {
    alert("Google sign-in not implemented yet.");
  });

  // Handle GitHub sign in
  githubSignInButton.addEventListener("click", function() {
    alert("GitHub sign-in not implemented yet.");
  });
});
