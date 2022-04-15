export default function burgerFunction(selector, navBar) {
    selector.addEventListener("click", () => {
        navBar.classList.toggle("nav__items__active");
    });
}