var a = "";
var b = "";
var c = 0;
var isA = true;
var signInput = ""

var p = document.querySelector("span");

function number (num) {
	if(isA){
		a += num;
		p.textContent = a;
		return a;
	} else {
		b += num;
		p.textContent = b;
		return b;
	}
}

function moveToB(sign) {
	signInput = sign;
	isA = false;
}

function equals(){
	if(signInput == '+'){
		c = Number(a) + Number(b);
		p.textContent = c;
		a=c;
		b="";
	} else if (signInput == '-') {
		c = a - b;
		p.textContent = c;
		a=c;
		b="";
	} else if (signInput = '*') {
		c = a * b;
		p.textContent = c;
		a=c;
		b="";
	}
}

function clearAll() {
	a = "";
	b = "";
	c = 0;
	isA = true;
	p.textContent = 0;
}


