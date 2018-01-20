var squares = document.querySelectorAll("td");
var player = document.querySelector(".player");
var reset = document.querySelector(".tttButton");

var player1 = true;
var rex = /X/;
var reo = /O/;

for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function() {
		if(player1){
			this.textContent = "X";
			player1 = false;
			player.textContent = "O to play";
			checkWin();
		} else {
			this.textContent = "O";
			player1 = true;
			player.textContent = "X to play";
			checkWin();
		}
	})
}

reset.addEventListener("click", function() {
	for(var i = 0; i < squares.length; i++){
		squares[i].textContent = "";
	}
})

function checkWin () {
	var topRow = squares[0].textContent + squares[1].textContent + squares[2].textContent;
	var midRow = squares[3].textContent + squares[4].textContent + squares[5].textContent;
	var botRow = squares[6].textContent + squares[7].textContent + squares[8].textContent;
	var colOne = squares[0].textContent + squares[3].textContent + squares[6].textContent;
	var colTwo = squares[1].textContent + squares[4].textContent + squares[7].textContent;
	var colThr = squares[2].textContent + squares[5].textContent + squares[8].textContent;
	var diaLtoR = squares[0].textContent + squares[4].textContent + squares[8].textContent;
	var diaRtoL = squares[2].textContent + squares[4].textContent + squares[6].textContent;
	
	if(topRow == "XXX"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "X";
		}
	} else if(topRow == "OOO"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "O";
		}
	} else if(midRow == "OOO"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "O";
		}
	}  else if(midRow == "XXX"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "X";
		}
	} else if(botRow == "OOO"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "O";
		}
	}  else if(botRow == "XXX"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "X";
		}
	} else if(colOne == "XXX"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "X";
		}
	} else if(colOne == "OOO"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "O";
		}
	} else if(colTwo == "OOO"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "O";
		}
	}  else if(colTwo == "XXX"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "X";
		}
	} else if(colThr == "OOO"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "O";
		}
	}  else if(colThr == "XXX"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "X";
		}
	}  else if(diaLtoR == "OOO"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "O";
		}
	}  else if(diaLtoR == "XXX"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "X";
		}
	} else if(diaRtoL == "OOO"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "O";
		}
	}  else if(diaRtoL == "OOO"){
		console.log("WIN");
		for(var i = 0; i < squares.length; i++){
			squares[i].textContent = "X";
		}
	}
}
