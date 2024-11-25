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

setErrorFor = (input, message) => {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  // Add the error message to the small tag that is a direct child of the parent element
  errorDisplay.innerText = message;
  // Add the error class to the parent element
  inputControl.className = "form-control error";
  // Add the error class to the parent element, this is needed because we are using a css class to style the form control
  inputControl.classList.add("error");
  // Remove the success class from the parent element, this is needed because we are using a css class to style the form control
  inputControl.classList.remove("success");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const confirm_passwordValue = confirm_password.value.trim();
  const phoneValue = phone.value.trim();
  const first_nameValue = first_name.value.trim();
  const last_nameValue = last_name.value.trim();
  const dobValue = dob.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setErrorFor(email, "Provide a valid email address");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be at least 8 characters");
  } else {
    setSuccessFor(password);
  }

  if (confirm_passwordValue === "") {
    setErrorFor(confirm_password, "Password is required");
  } else if (confirm_passwordValue !== passwordValue) {
    setErrorFor(confirm_password, "Passwords do not match");
  } else {
    setSuccessFor(confirm_password);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "phone number must be numbers only");
  } else {
    setSuccessFor(phone);
  }

  if (first_nameValue === "") {
    setErrorFor(first_name, "First name is required");
  } else {
    setSuccessFor(first_name);
  }

  if (last_nameValue === "") {
    setErrorFor(last_name, "Last name is required");
  } else {
    setSuccessFor(last_name);
  }

  if (dobValue === "") {
    setErrorFor(dob, "Date of birth cannot be blank");
  } else {
    setSuccessFor(dob);
  }

  if (usernameValue === "") {
    setErrorFor(username, "Username is required");
  } else {
    setSuccessFor(username);
  }
};
