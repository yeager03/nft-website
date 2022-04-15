import tabsFunction from "./components/tabs.js";
import {
	scrollHeaderAnimation,
	scrollFooterAnimation,
} from "./components/scroll.js";
import fixedHeader from "./components/header.js";
import animation from "./components/animation.js";
import burgerFunction from "./components/burger.js";

window.addEventListener("load", function () {
	const tabs = document.querySelectorAll(".portfolio__items"),
		btns = document.querySelectorAll(".portfolio_btn"),
		btnsParent = document.querySelector(".portfolio__btns"),
		menuParent = document.querySelector(".header"),
		menuLinks = document.querySelectorAll(".nav__links a"),
		footerParent = document.querySelector(".footer__items"),
		logoParent = document.querySelector(".logo"),
		btnParent = document.querySelector(".btn_wrap"),
		burger = document.querySelector(".hamburger"),
		navBar = document.querySelector(".nav__items");

	tabsFunction(tabs, btns, btnsParent);
	scrollHeaderAnimation(menuParent, menuLinks);
	scrollFooterAnimation(footerParent, "scroll-link", menuParent);
	scrollFooterAnimation(btnParent, "btn", menuParent);
	scrollFooterAnimation(btnParent, "btn", menuParent);
	scrollFooterAnimation(logoParent, "logo", menuParent);
	fixedHeader(menuParent);
	animation();
	burgerFunction(burger, navBar);
});

window.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});

window.addEventListener("keydown", function (e) {
	e.preventDefault();
});

if (history.scrollRestoration) {
	history.scrollRestoration = "manual";
} else {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};
}
