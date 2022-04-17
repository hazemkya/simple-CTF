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
        if(btoa(username) === "YWRtaW5fdXNlcl8zNzg0ODc=" && btoa(password) === "U3VwZXJTZWN1cmVfcGFzc3dvcmQzNzIzNDk="){
            isValid = true 
        }

        if(!isValid){
            e.preventDefault();
            setFormMessage(loginForm, "error", "Invalid username/password");
            return false
        }
        else return true;
    });
});