





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






function switchToWelcomePage(){
    window.location.href = "index.html";
}



// let y = 0;
// let y = 0;
// let y = 0;
// let y = 0;
// let y = 0;
// let y = 0;
// let y = 0;
// let y = 0;
// let y = 0;
// let y = 0;
// let y = 0;