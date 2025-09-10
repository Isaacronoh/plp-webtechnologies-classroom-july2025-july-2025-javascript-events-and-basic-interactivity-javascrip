document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  heading.addEventListener("mouseover", () => {
    heading.style.color = "#0a9396";
    heading.style.fontSize = "54px";
  });

  heading.addEventListener("mouseout", () => {
    heading.style.color = "#ec0909ff";
    heading.style.fontSize = "28px";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "Light Mode";
    } else {
      toggleBtn.textContent = "Dark Mode";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enrollForm");

  // Input 
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const dobInput = document.getElementById("dob");
  const courseSelect = document.getElementById("course");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const dobError = document.getElementById("dobError");
  const courseError = document.getElementById("courseError");
  const passwordError = document.getElementById("passwordError");
  const confirmError = document.getElementById("confirmError");
  const successMsg = document.getElementById("successMsg");

//   email parten
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  function validateName() {
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      return false;
    }
    nameError.textContent = "";
    return true;
  }

  function validateEmail() {
    if (!emailInput.value.trim().match(emailPattern)) {
      emailError.textContent = "Enter a valid email.";
      return false;
    }
    emailError.textContent = "";
    return true;
  }

  function validateDob() {
    if (dobInput.value === "") {
      dobError.textContent = "Date of birth is required.";
      return false;
    }
    dobError.textContent = "";
    return true;
  }

  function validateCourse() {
    if (courseSelect.value === "") {
      courseError.textContent = "Please select a course.";
      return false;
    }
    courseError.textContent = "";
    return true;
  }

  function validatePassword() {
    if (passwordInput.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      return false;
    }
    passwordError.textContent = "";
    return true;
  }

  function validateConfirmPassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmError.textContent = "Passwords do not match.";
      return false;
    }
    confirmError.textContent = "";
    return true;
  }
  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  dobInput.addEventListener("change", validateDob);
  courseSelect.addEventListener("change", validateCourse);
  passwordInput.addEventListener("input", () => {
    validatePassword();
    validateConfirmPassword();
  });
  confirmPasswordInput.addEventListener("input", validateConfirmPassword);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successMsg.textContent = "";

    const valid =
      validateName() &
      validateEmail() &
      validateDob() &
      validateCourse() &
      validatePassword() &
      validateConfirmPassword();

    if (valid) {
      successMsg.textContent = "Registered successfully!";
      form.reset();
    }
  });
});
