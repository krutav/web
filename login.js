document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");
    const createAccountForm = document.getElementById("CreateAccount");
    const createAccountLink = document.getElementById("LinkCreateAccount");
    const loginLink = document.getElementById("LinkLogin");
  
    // Function to toggle the visibility of forms
    function toggleForms() {
      loginForm.classList.toggle("form--hidden");
      createAccountForm.classList.toggle("form--hidden");
    }
  
    // Add click event listeners to the links
    createAccountLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      toggleForms(); // Toggle forms
    });
  
    loginLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      toggleForms(); // Toggle forms
    });
  });
  