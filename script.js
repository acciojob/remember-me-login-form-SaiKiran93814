//your JS code here. If required.
 const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("checkbox");
    const existingButton = document.getElementById("existing");
    const form = document.getElementById("loginForm");

    // Show 'Login as existing user' button if data exists
    window.addEventListener("DOMContentLoaded", () => {
      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");

      if (savedUsername && savedPassword) {
        existingButton.style.display = "inline-block";
      }
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
      const remember = rememberCheckbox.checked;

      alert(`Logged in as ${username}`);

      if (remember) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingButton.style.display = "inline-block";
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingButton.style.display = "none";
      }

      form.reset();
    });

    // Handle login as existing user
    existingButton.addEventListener("click", () => {
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });