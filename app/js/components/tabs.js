export default function tabsFunction(tabs, btns, btnsParent) {
    function hideTabs() {
        tabs.forEach(tab => tab.classList.remove("portfolio__items__active"));
        btns.forEach(btn => btn.classList.remove("portfolio_btn__active"));
    }

    function showTabs(i = 0) {
        tabs[i].classList.add("portfolio__items__active");
        btns[i].classList.add("portfolio_btn__active");
    }

    btnsParent.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("portfolio_btn")) {
            btns.forEach((btn, index) => {
                if (e.target === btn) {
                    hideTabs();
                    showTabs(index);
                }
            });
        }
    });
}