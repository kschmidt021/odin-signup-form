const submitBtn = document.querySelector("#submit-btn");
const passwordElement = document.querySelector("#password-element");
const error = document.createElement("p");

submitBtn.addEventListener("click", (event) => {
    const password = document.querySelector("#pass");
    const confirmPassword = document.querySelector("#conf-pass");
    error.textContent = "";
    if (password.value != confirmPassword.value) {
        event.preventDefault();
        error.textContent = "Passwords do not match.";
        password.className = "invalid";
        confirmPassword.className = "invalid";
        passwordElement.prepend()
        passwordElement.appendChild(error);
    } 
})