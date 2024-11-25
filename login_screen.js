const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
    checkInputs();
});

const setErrorFor = (input, message) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector("small");
    const small = inputControl.querySelector("small");
    inputControl.className = "form-control error";
    small.innerText = message;
    errorDisplay.innerText = message;
};

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
};



const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");    
    }
    else if (!isValidEmail(emailValue)) {
        setErrorFor(email, "Provide a valid email address");
    } 
    else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else {
        setSuccessFor(password);
    }
};

