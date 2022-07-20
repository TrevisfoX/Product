// Preloader
window.onload = () => {
	let preloader = document.getElementById("preloader");

	setTimeout(() => {
		preloader.style.display = "none";
	}, 3000);
};

// Scroll to top
const scrollButton = document.querySelector(".scroll");

window.onscroll = () => {
	if (window.scrollY > 400) {
		scrollButton.classList.remove("scroll-hide");
	} else if (window.scrollX < 400) {
		scrollButton.classList.add("scroll-hide");
	}
};

scrollButton.onclick = () => {
	window.scrollTo(0, 0);
};
