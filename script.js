
const fixButton = document.querySelector(".hero-button");
const message = document.querySelector("#message");

fixButton.addEventListener("click", () => {
    console.log("Let's begin PC fixing!");
    message.textContent = "Let's begin PC fixing!";
});

const darkMode = document.querySelector(".dark-mode")