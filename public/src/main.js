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
    const username = document.getElementById("username");
    const password = document.getElementById("password");


    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // if(username.value == "hello" && password.value == "hi"){    //validated the input locally
        //     app.post('/', (req,res) => {
        //         const {username, password} = req.body;
        //         res.send(req_username, req_password);
            
        //     })
            
        //     alert('hey you')        //send it to the server to validate then redirect
        // }
        // else {
        //     setFormMessage(loginForm, "error", "Invalid username/password");
        //     return false;
        // }

        setFormMessage(loginForm, "error", "Invalid username/password");
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