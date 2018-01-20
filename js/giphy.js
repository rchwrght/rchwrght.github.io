var search = location.search.slice(8);

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + search +"&api_key=53WYlS1SZqJ1NOEAgZeQlD6sddrUA013&limit=25", function(data){

	var images = document.querySelectorAll("img");

	for(var i = 0; i < images.length; i++){
		images[i].src=data["data"][i]["images"]["fixed_height"]["url"];
	}
});

$(".myButton").click(function(){
	$(".more").slideDown(1000, function(){
		$(".more").css("opacity", "1");
	});
});

$("form").submit(function(){
	var search = $("input[type='text']").val();
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=53WYlS1SZqJ1NOEAgZeQlD6sddrUA013&limit=25", function(data){
		var images = document.querySelectorAll("img");
		for(var i = 0; i < images.length; i++){
			images[i].src=data["data"][i]["images"]["fixed_height"]["url"];
		}
	});
});
