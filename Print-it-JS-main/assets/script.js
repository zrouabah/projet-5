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
	const nombreSlides = slides.length
 	console.log(nombreSlides);

 	let arrow_left = document.querySelector (".arrow_left");
arrow_left.addEventListener("click", () => {
		console.log("page précedente");
	})

let arrow_right = document.querySelector (".arrow_right");	
	arrow_right.addEventListener("click", () => {
   		console.log("page suivante");
})
 

let diaporama=1
function change(n) {
	(diaporama = n);
  }
let dots = document.getElementsByClassName("dot");

	for(i=0 ;i<dots.length;i++){
	console.log(dots[0])
// dots[i].className = dots[i].className.replace(" dot_selected", "");
// dots[diaporama-1].className += " dot_selected";
}


	

	
	


	

/*let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides (slideIndex +=n)
}
function currentSlide(n) {
	showSlides (slideIndex = n)
}

function showSlides(n){
	let i;
	let slides = document.getElementsByClassName(".banner-img");
	let dots = document.querySelectorAll(".dots");

if(n > slides.length) {slideIndex=1}
if (n < 1) {slideIndex= slides.length}
}

for(let i= 0; i < dots.length; i++) {
	dots[i].classList.remove("active");
}
slides[slideIndex -1].style.display ="block";

dots[slideIndex -1].classList.add("active");*/
