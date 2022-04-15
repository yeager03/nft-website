export default function fixedHeader(selector) {
    let pos = window.scrollY;
    const height = selector.offsetHeight;

    window.addEventListener("scroll", (e) => {
        pos = window.scrollY;

        if (pos >= height) {
            selector.classList.add("header__fixed");
        } else {
            selector.classList.remove("header__fixed");
        }
    });
}