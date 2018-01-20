$(window).scroll(function(){
	var s = -$(document).scrollTop()/5 + 20;
	console.log(s);
	$(".border").css("transform", "translateY(" + s + "px)");
});

$(".underlay").hover(function(){
	$(".overlay").fadeTo(500, 1.0);
}, function(){
	$(".overlay").fadeTo(500, 0);
})