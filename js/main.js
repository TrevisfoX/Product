window.onload = () => {
	let preloader = document.getElementById("preloader");

	setTimeout(() => {
		preloader.style.display = "none";
	}, 1500);
};

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

const box = document.querySelectorAll(".box");

box.forEach((item) => {
	item.addEventListener("click", function () {
		box.forEach((el) => el.classList.remove("active"));
		this.classList.add("active");
	});
});