var myMenu = document.querySelector(".myMenu");
var menuLis = document.querySelectorAll("nav li");

myMenu.addEventListener("click", function(){
	menuLis.forEach(function(element){
		element.classList.toggle("showMenu");
	});
});