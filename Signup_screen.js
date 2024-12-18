function checkIfValid() {
  let isValid = true;

  let firstNameState = 1;
  let lastNameState = 1;
  let emailState = 1;
  let userNameState = 1;
  let dateOfBirthState = 1;
  let passwordState = 1;
  let repeatPasswordState = 1;

  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const userName = document.getElementById("username");
  const phneNumber = document.getElementById("phonenumber");
  const dateOfBirth = document.getElementById("dateofbirth");
  const password = document.getElementById("password");
  const repeatPassword = document.getElementById("repeatpassword");

  let fields = [
    firstName,
    lastName,
    email,
    userName,
    dateOfBirth,
    password,
    repeatPassword,
  ];
  let fieldState = [
    firstNameState,
    lastNameState,
    emailState,
    userNameState,
    dateOfBirthState,
    passwordState,
    repeatPasswordState,
  ];

  for (i = 0; i < fields.length; i++) {
    if (fields[i].value == "") {
      let isValid = false;
      fieldState[i] = 0;
    }
  }
  console.log(fields.length);

  console.log(fieldState[6]);

  for (i = 0; i < fieldState.length; i++) {
    let emptyField = document.querySelector(
      `#${fields[i].parentElement.id} .error`
    );

    if (fieldState[i] == 0) {
      isValid = false;

      if (i == 0) {
        emptyField.textContent = `Please enter First name`;
        emptyField.previousElementSibling.style.backgroundColor =
          "rgba(255, 150, 150, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if (i == 1) {
        emptyField.textContent = `Please enter Last name`;
        emptyField.previousElementSibling.style.backgroundColor =
          "rgba(255, 150, 150, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if (i == 2) {
        emptyField.textContent = `Please enter Email`;
        emptyField.previousElementSibling.style.backgroundColor =
          "rgba(255, 150, 150, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if (i == 3) {
        emptyField.textContent = `Please enter Username`;
        emptyField.previousElementSibling.style.backgroundColor =
          "rgba(255, 150, 150, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if (i == 4) {
        emptyField.textContent = `Please enter Date Of Birth`;
        emptyField.previousElementSibling.style.backgroundColor =
          "rgba(255, 150, 150, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if (i == 5) {
        emptyField.textContent = `Please enter a Password`;
        emptyField.previousElementSibling.style.backgroundColor =
          "rgba(255, 150, 150, 1)";
        emptyField.style.color = "red";
        emptyField.style.fontSize = "15px";
      }
      if (i == 6) {
      }
    } else if (fieldState[i] == 1) {
      emptyField.textContent = ``;
      emptyField.previousElementSibling.style.backgroundColor = "white";
      // isValid = true;
    }
  }

  if (fields[5].value != fields[6].value) {
    isValid = false;

    let unmachingPasswordField1 = document.querySelector(
      `#${fields[5].parentElement.id} .error`
    );
    let unmachingPasswordField2 = document.querySelector(
      `#${fields[6].parentElement.id} .error`
    );

    unmachingPasswordField1.textContent = "Passwords do not match !";
    unmachingPasswordField1.previousElementSibling.style.backgroundColor =
      "rgba(255, 255, 150, 1)";
    unmachingPasswordField1.style.color = "rgba(255, 255, 150, 1)";
    unmachingPasswordField1.style.fontSize = "15px";

    unmachingPasswordField2.textContent = "Passwords do not match !";
    unmachingPasswordField2.previousElementSibling.style.backgroundColor =
      "rgba(255, 255, 150, 1)";
    unmachingPasswordField2.style.color = "rgba(255, 255, 150, 1)";
    unmachingPasswordField2.style.fontSize = "15px";
  } else {
    // isValid = true;
  }

  if (fieldState[5] != 0) {
    if (fields[5].value.length < 8) {
      let shortPasswordField = document.querySelector(
        `#${fields[5].parentElement.id} .error`
      );
      shortPasswordField.previousElementSibling.style.backgroundColor =
        "rgba(255, 255, 150, 1)";
      shortPasswordField.textContent = "Password must be atleast 8 characters";
      shortPasswordField.style.color = "rgba(255, 255, 150, 1)";
      shortPasswordField.style.fontSize = "15px";
      isValid = false;
    } else {
      // isValid = true;
    }
  }

  if (fieldState[6] != 0) {
    if (fields[6].value.length < 8) {
      let shortPasswordField = document.querySelector(
        `#${fields[6].parentElement.id} .error`
      );
      shortPasswordField.previousElementSibling.style.backgroundColor =
        "rgba(255, 255, 150, 1)";
      shortPasswordField.textContent = "Password must be atleast 8 characters";
      shortPasswordField.style.color = "rgba(255, 255, 150, 1)";
      shortPasswordField.style.fontSize = "15px";
      isValid = false;
    } else {
      // isValid = true;
    }
  }

  if (isValid == true) {
    window.location.href = "/Home.html";
  }
}

function switchToWelcomePage() {
  window.location.href = "index.html";
}

// let y = 0;
// let y = 0;
// let y = 0;
// let y = 0;
