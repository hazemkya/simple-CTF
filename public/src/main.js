// const bodyParser = require('body-parser');
// const express = require('express');

// let app = express();
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json);

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");



    loginForm.addEventListener("submit", e => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        let isValid = false;
        // alert('Username:'+ btoa(username))
        // alert(btoa(password))
        if(btoa(username) === "YWRtaW5fdXNlcl8zNzg0ODc=" && btoa(password) === "U3VwZXJTZWN1cmVfcGFzc3dvcmQzNzIzNDk="){    //validated the input locally
            isValid = true  //send it to the server to validate then redirect
        }

        if(isValid){
            return true;
        }
        else{
            e.preventDefault();
            setFormMessage(loginForm, "error", "Invalid username/password");
            return false
        }
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});