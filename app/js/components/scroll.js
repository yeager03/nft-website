export function scrollHeaderAnimation(menu, menuLinks) {
	const height = getComputedStyle(menu).height.slice(0, -2); // высота хедера

	if (window.location.hash != "") {
		scrollToId(window.location.hash);
	}

	menu.addEventListener("click", function (e) {
		if (e.target.tagName === "A") {
			e.preventDefault();

			let link = e.target;
			scrollToId(link.hash);
		}
	});

	window.addEventListener("scroll", function (e) {
		let pos = Math.floor(window.pageYOffset);

		for (let i = menuLinks.length - 1; i >= 0; i--) {
			let link = menuLinks[i];
			let header = document.querySelector(link.hash);

			if (pos >= elemOffsetTop(header) - 250) {
				menu
					.querySelector(".nav__links__active")
					.classList.remove("nav__links__active");
				link.classList.add("nav__links__active");
				break;
			}
		}
	});

	function scrollToId(id) {
		const target = document.querySelector(id);

		if (target !== null) {
			let pos = elemOffsetTop(target) - height;

			scrollToPos(pos);
		}
	}

	function elemOffsetTop(node) {
		let coords = node.getBoundingClientRect();
		return coords.top + window.pageYOffset;
	}

	function scrollToPos(pos) {
		window.scrollTo({
			top: pos,
			behavior: "smooth",
		});
	}
}

export function scrollFooterAnimation(footerParent, className, headerParent) {
	const height = getComputedStyle(headerParent).height.slice(0, -2);

	footerParent.addEventListener("click", function (e) {
		if (e.target.classList.contains(className)) {
			console.log(1);
			e.preventDefault();

			let link = e.target;
			scrollToId(link.hash);
		} else {
			e.preventDefault();
			console.log(2);
		}
	});

	function scrollToId(id) {
		const target = document.querySelector(id);

		if (target !== null) {
			let pos = elemOffsetTop(target) - height;

			scrollToPos(pos);
		}
	}

	function elemOffsetTop(node) {
		let coords = node.getBoundingClientRect();
		return coords.top + window.pageYOffset;
	}

	function scrollToPos(pos) {
		window.scrollTo({
			top: pos,
			behavior: "smooth",
		});
	}
}
