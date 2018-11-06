var sectionOne = document.querySelector(".section_one");
var sectionTwo = document.querySelector(".section_two");

var fade = 0;

window.addEventListener('mousewheel', function(e){
		if(e.deltaY > 0){
			fade = fade < 1 ? fade += 0.05 : 1;
			sectionOne.style.opacity = 1 - fade;
			sectionTwo.style.opacity = fade;
		} else {
			fade = fade > 0 ? fade -= 0.05 : 0;
			sectionOne.style.opacity = 1 - fade;
			sectionTwo.style.opacity = fade;
		}
});


//Mobile compatibility
var startY = null;
var endY = null;

window.addEventListener('touchmove', function(e){
	endY = e.touches[0].pageY;
		if(startY - endY < 0){
			fade = fade < 1 ? fade += 0.05 : 1;
			sectionOne.style.opacity = 1 - fade;
			sectionTwo.style.opacity = fade;
		} else {
			fade = fade > 0 ? fade -= 0.05 : 0;
			sectionOne.style.opacity = 1 - fade;
			sectionTwo.style.opacity = fade;
		}
});

window.addEventListener('touchstart', function(e){
	startY = e.touches[0].pageY;
});
