var images = document.querySelectorAll(".carImg");
var buttonLeft = document.querySelector(".left");
var buttonRight = document.querySelector(".right");

buttonLeft.addEventListener("click", rotateImage);
buttonRight.addEventListener("click", rotateRight);

function rotateImage() {
	for(var i = 0; i < images.length; i++) {
		if(i < images.length - 1) {
			images[i].src = images[i+1].src;
		} else {
			images[i].src = images[0].src;
		}
	}
}

function rotateRight() {
	for(var i = images.length - 1; i >= 0; i--){
		if(i == 0){
			images[i].src = images[images.length - 1].src;
		} else {
			images[i].src = images[i - 1].src;
		}
	}
}