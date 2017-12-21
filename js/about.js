$(window).scroll(function(){
	var s = -$(document).scrollTop()/5 - 200;
	console.log(s);
	$(".border").css("transform", "translateY(" + s + "px)");
}) 