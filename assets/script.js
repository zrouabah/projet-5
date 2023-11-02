const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const banner = document.getElementById("banner");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
let currentSlide = 0;


const dotsContainer = document.querySelector(".dots");
const dots = [];

slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
    dots.push(dot); 
	if (index===0){
		dot.classList.add("dot_selected");
	}
});

function showSlide(slideIndex) {
	const slide = slides[slideIndex];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	tagLine.innerHTML = slide.tagLine;	
	dots.forEach((dot, index) => {
		if (index === slideIndex) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}
function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
}
function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
}
leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

