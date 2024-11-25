const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const phone = document.getElementById("phone");
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const dob = document.getElementById("dob");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const confirm_passwordValue = confirm_password.value.trim();
  const phoneValue = phone.value.trim();
  const first_nameValue = first_name.value.trim();
  const last_nameValue = last_name.value.trim();
  const dobValue = dob.value.trim();

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  const phoneRegex = /^\d+$/;

  const dobDate = new Date(dobValue);
  const age = calculateAge(dobDate);

  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else if (!emailValue.includes("@")) {
    setErrorFor(email, "Invalid email format");
  }

  if (usernameValue === "") {
    setErrorFor(username, "Username is required");
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password is required");
  } else if (!passwordRegex.test(passwordValue)) {
    setErrorFor(
      password,
      "Password must be at least 8 characters, contain an uppercase letter, and a number"
    );
  }

  if (confirm_passwordValue === "") {
    setErrorFor(confirm_password, "Confirm password is required");
  } else if (passwordValue !== confirm_passwordValue) {
    setErrorFor(confirm_password, "Passwords do not match");
    console.error("Error: Passwords do not match");
    alert("Error: Passwords do not match");
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone number is required");
  } else if (!phoneRegex.test(phoneValue)) {
    setErrorFor(phone, "Phone number must contain only numbers");
  }

  if (first_nameValue === "") {
    setErrorFor(first_name, "First name is required");
  }

  if (last_nameValue === "") {
    setErrorFor(last_name, "Last name is required");
  }

  if (dobValue === "") {
    setErrorFor(dob, "Date of birth is required");
  } else if (age < 12) {
    setErrorFor(dob, "You must be at least 12 years old to register");
  }

  if (
    emailValue !== "" &&
    usernameValue !== "" &&
    passwordValue !== "" &&
    confirm_passwordValue !== "" &&
    phoneValue !== "" &&
    first_nameValue !== "" &&
    last_nameValue !== "" &&
    dobValue !== "" &&
    age >= 12 &&
    phoneRegex.test(phoneValue)
  ) {
    // Form is valid, submit it
    form.submit();
  }
}
function setErrorFor(input, message) {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = message;
  inputControl.classList.add("error");
}

function calculateAge(dob) {
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}
