const submitButton = document.querySelector("#submit-button");

const error = document.querySelector(".error")

submitButton.addEventListener("click", createHTML);

function createHTML() {
    error.style.display = "block";
}