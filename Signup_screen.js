// const form = document.getElementById("form")[0];
// const email = document.getElementById("email")[0];
// const username = document.getElementById("username")[0];
// const password = document.getElementById("password")[0];
// const confirm_password = document.getElementById("confirm-password")[0];
// const phone = document.getElementById("phone")[0];
// const first_name = document.getElementById("firstname")[0];
// const last_name = document.getElementById("last-name")[0];
// const dob = document.getElementById("dob")[0];
// const errorElement = document.getElementById("error")[0];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validateInputs();
// });


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
 
// setErrorFor = (input, message) => {
//   const inputControl = input.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");

//   // Add the error message to the small tag that is a direct child of the parent element
//   errorDisplay.innerText = message;
//   // Add the error class to the parent element
//   inputControl.className = "form-control error";
//   // Add the error class to the parent element, this is needed because we are using a css class to style the form control
//   inputControl.classList.add("error");
//   // Remove the success class from the parent element, this is needed because we are using a css class to style the form control
//   inputControl.classList.remove("success");
// };

// const isValidEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// const validateInputs = () => {
//   const emailValue = email.value.trim();
//   const usernameValue = username.value.trim();
//   const passwordValue = password.value.trim();
//   const confirm_passwordValue = confirm_password.value.trim();
//   const phoneValue = phone.value.trim();
//   const first_nameValue = first_name.value.trim();
//   const last_nameValue = last_name.value.trim();
//   const dobValue = dob.value.trim();

//   if (emailValue === "") {
//     setErrorFor(email, "Email is required");
//   } else if (!isValidEmail(emailValue)) {
//     setErrorFor(email, "Provide a valid email address");
//   } else {
//     setSuccessFor(email);
//   }

//   if (passwordValue === "") {
//     setErrorFor(password, "Password is required");
//   } else if (passwordValue.length < 8) {
//     setErrorFor(password, "Password must be at least 8 characters");
//   } else {
//     setSuccessFor(password);
//   }

//   if (confirm_passwordValue === "") {
//     setErrorFor(confirm_password, "Password is required");
//   } else if (confirm_passwordValue !== passwordValue) {
//     setErrorFor(confirm_password, "Passwords do not match");
//   } else {
//     setSuccessFor(confirm_password);
//   }

//   if (phoneValue === "") {
//     setErrorFor(phone, "phone number must be numbers only");
//   } else {
//     setSuccessFor(phone);
//   }

//   if (first_nameValue === "") {
//     setErrorFor(first_name, "First name is required");
//   } else {
//     setSuccessFor(first_name);
//   }

//   if (last_nameValue === "") {
//     setErrorFor(last_name, "Last name is required");
//   } else {
//     setSuccessFor(last_name);
//   }

//   if (dobValue === "") {
//     setErrorFor(dob, "Date of birth cannot be blank");
//   } else {
//     setSuccessFor(dob);
//   }

//   if (usernameValue === "") {
//     setErrorFor(username, "Username is required");
//   } else {
//     setSuccessFor(username);
//   }
// };





function checkIfValid(){
  let firstNameState = 1
  let lastNameState = 1
  let emailState = 1
  let userNameState = 1
  let dateOfBirthState = 1
  let passwordState = 1
  let repeatPasswordState = 1


  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const userName = document.getElementById("username");
  const phneNumber = document.getElementById("phonenumber");
  const dateOfBirth = document.getElementById("dateofbirth");
  const password = document.getElementById("password");
  const repeatPassword = document.getElementById("repeat-password");

  let fields = [firstName, lastName, email, userName, dateOfBirth, password, repeatPassword]
  let fieldState = [firstNameState, lastNameState, emailState, userNameState, dateOfBirthState, passwordState, repeatPasswordState]


  

  for(i = 0 ; i < fields.length -1; i++){
    if(fields[i].value == ""){
      fieldState[i] = 0;
    }
  }
  
  for(i=0;i<fieldState.length - 1;i++){

    let emptyField = document.querySelector(`#${fields[i].parentElement.id} .error`) ;

    if(fieldState[i] == 0){

      if(i == 0){
        emptyField.textContent = `Please enter First name`;
        emptyField.previousElementSibling.style.backgroundColor = "rgba(255, 100, 100, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if(i == 1){
        emptyField.textContent = `Please enter Last name`;
        emptyField.previousElementSibling.style.backgroundColor = "rgba(255, 100, 100, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if(i == 2){
        emptyField.textContent = `Please enter Email`;
        emptyField.previousElementSibling.style.backgroundColor = "rgba(255, 100, 100, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if(i == 3){
        emptyField.textContent = `Please enter Username`;
        emptyField.previousElementSibling.style.backgroundColor = "rgba(255, 100, 100, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if(i == 4){
        emptyField.textContent = `Please enter Date Of Birth`;
        emptyField.previousElementSibling.style.backgroundColor = "rgba(255, 100, 100, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if(i == 5){
        emptyField.textContent = `Please enter a Password`;
        emptyField.previousElementSibling.style.backgroundColor = "rgba(255, 100, 100, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }

     

    }else if(fieldState[i] == 1){
      emptyField.textContent = ``;
      emptyField.previousElementSibling.style.backgroundColor = "white";



    }

  }
  

};


// let x = 1;
// let x = 1;
// let x = 1;
// let x = 1;
// let x = 1;



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
