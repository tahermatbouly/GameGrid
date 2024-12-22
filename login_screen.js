"use strict";

function checkValid() {
  let isValid = true;
  let passWord = document.querySelector("#password");
  let eMail = document.querySelector("#email");
  let passWordError = document.querySelector(
    `#${passWord.parentElement.id} .error`
  );
  let eMailError = document.querySelector(`#${eMail.parentElement.id} .error`);

  if (eMail.value == "") {
    isValid = false;
    eMailError.textContent = `Please enter E-mail`;
    eMailError.previousElementSibling.style.backgroundColor =
      "rgba(255, 150, 150, 1)";
    eMailError.style.color = "red";
    eMailError.style.fontSize = "15px";
  } else {
    eMailError.textContent = ``;
    eMailError.previousElementSibling.style.backgroundColor = "white";
  }

  if (passWord.value == "") {
    isValid = false;

    passWordError.textContent = `Please enter password`;
    passWordError.previousElementSibling.style.backgroundColor =
      "rgba(255, 150, 150, 1)";
    passWordError.style.color = "red";
    passWordError.style.fontSize = "15px";
  } else if (passWord.value.length < 8 && passWord.value != "") {
    isValid = false;
    passWordError.textContent = `Password must be at least 8 characters long`;
    passWordError.previousElementSibling.style.backgroundColor =
      "rgba(255, 255, 150, 1)";
    passWordError.style.color = "rgba(255, 255, 150, 1)";
    passWordError.style.fontSize = "15px";
  } else {
    passWordError.textContent = ``;
    passWordError.previousElementSibling.style.backgroundColor = "white";
  }

  if (isValid == true) {
    // window.location.href = "/home.html";
  }
}

function switchToWelcomePage() {
  window.location.href = "index.html";
}
