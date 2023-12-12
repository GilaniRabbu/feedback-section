let Btn = document.querySelector("[btn-close]");
let Card = document.querySelector(".feedback");

Btn.addEventListener("click", () => {
    Card.classList.add("hide");
    setTimeout(() => { Card.classList.remove("hide"); }, 3000);
});