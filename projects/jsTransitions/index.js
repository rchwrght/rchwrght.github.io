var sectionOne = document.querySelector(".section_one");
var sectionTwo = document.querySelector(".section_two");

var fade = 0;

window.addEventListener('mousewheel', function(e){
		if(e.deltaY > 0){
			fade = fade < 1 ? fade += 0.05 : 1;
			sectionOne.style.opacity = 1 - fade;
			sectionTwo.style.opacity = fade;
			console.log(fade);
		} else {
			fade = fade > 0 ? fade -= 0.05 : 0;
			sectionOne.style.opacity = 1 - fade;
			sectionTwo.style.opacity = fade;
		}
});