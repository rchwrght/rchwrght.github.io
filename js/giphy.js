var search = location.search.slice(8);
console.log(search);

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=53WYlS1SZqJ1NOEAgZeQlD6sddrUA013&limit=25", function(data){

	var images = document.querySelectorAll("img");

	for(var i = 0; i < images.length; i++){
		images[i].src=data["data"][i]["images"]["fixed_height"]["url"];
	}
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
