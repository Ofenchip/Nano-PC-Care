
const darkButton = document.querySelector(".dark-button");

darkButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkButton.textContent = "☀️ Light Mode";
    } else {
        darkButton.textContent = "🌙 Dark Mode";
    }
});

const fixButton = document.querySelector(".hero-button");
const message = document.querySelector("#message");

fixButton.addEventListener("click", () => {
    console.log("Let's begin PC fixing!");
    message.textContent = "Let's begin PC fixing!";
});
