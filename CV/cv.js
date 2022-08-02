//var card = $(".card");
var span = $("span");

//expand cards to see content
/*
card.click(function(e){
	$(this).toggleClass("expanded");
});
*/
//use plus icon to expand menu when viewing on mobile
span.click(function(e){
	$(this.parentNode).toggleClass("menu-expanded");
	$(this).toggleClass("rotated");
});