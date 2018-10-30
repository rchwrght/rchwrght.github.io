var aboutSection = document.querySelector(".about p");
var musicSection = document.querySelector(".music hr")
var aboutLis = document.querySelectorAll(".about .grid li");
var musicLis = document.querySelectorAll(".music .grid li")

window.addEventListener('scroll', function(){
	isInViewPort(aboutSection, aboutLis);
	isInViewPort(musicSection, musicLis)
});

function isInViewPort(elem, item){
	var bounding = elem.getBoundingClientRect();
	if (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	) {
		console.log('In the viewport!');
		for(var i = 0; i < item.length; i++){
			item[i].classList.add("animate");
		}
	}
};