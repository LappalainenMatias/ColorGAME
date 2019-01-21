var amountOfSquares = 5
var listOfSquares = []
listTransparents()
var wins = 0
var gameFinished = false
var number = 3

function sleepBeforeStart(){
	allToWhite();
	CountDown();
}
function CountDown(){
	document.getElementById("box-5").textContent=number;
	if (number == 0){
		document.getElementById("box-5").textContent="";
		number = 3
		reset()
	}
	else{
		number = number - 1 
		setTimeout(CountDown, 1000);
	}
}
function changeColor(id){
	if (gameFinished != true){
	var element = document.getElementById(id);
	var colorCode = getComputedStyle(element).backgroundColor;

	if (id == "box-1" && colorCode != "rgb(255, 255, 255)" ){
		color("box-1")
		color("box-2")
		color("box-4")
	}
	if (id == "box-2" && colorCode != "rgb(255, 255, 255)" ){
		color("box-1")
		color("box-2")
		color("box-3")
		color("box-5")
	}
	if (id == "box-3" && colorCode != "rgb(255, 255, 255)" ){
		color("box-2")
		color("box-3")
		color("box-6")
	}
	if (id == "box-4" && colorCode != "rgb(255, 255, 255)" ){
		color("box-1")
		color("box-4")
		color("box-5")
		color("box-7")
	}
	if (id == "box-5" && colorCode != "rgb(255, 255, 255)" ){
		color("box-2")
		color("box-4")
		color("box-5")
		color("box-6")
		color("box-8")
	}
	if (id == "box-6" && colorCode != "rgb(255, 255, 255)" ){
		color("box-3")
		color("box-5")
		color("box-6")
		color("box-9")
	}
	if (id == "box-7" && colorCode != "rgb(255, 255, 255)" ){
		color("box-4")
		color("box-7")
		color("box-8")
	}
	if (id == "box-8" && colorCode != "rgb(255, 255, 255)" ){
		color("box-5")
		color("box-7")
		color("box-8")
		color("box-9")
	}
	if (id == "box-9" && colorCode != "rgb(255, 255, 255)" ){
		color("box-6")
		color("box-8")
		color("box-9")
	}
	colorToTransparent()
	Check()
	}
}

function listTransparents(){
	while(listOfSquares.length < amountOfSquares){
    	var r = Math.floor(Math.random()*9+1);
    	if(listOfSquares.indexOf(r) === -1) listOfSquares.push(r);
	}
	colorToTransparent()
}

function colorToTransparent(){
	var s, myStringArray = listOfSquares;
	for (s of myStringArray) {
		StringId = "box-" + s
		var element = document.getElementById(StringId);
		var colorCode = getComputedStyle(element).backgroundColor;
		document.getElementById(StringId).style.background="#ffffff";
	}
}

function color(id){
	var element = document.getElementById(id);
	var colorCode = getComputedStyle(element).backgroundColor;
	if(colorCode == "rgb(124, 252, 0)"){
		document.getElementById(id).style.background="#B22222";
	}
	else if(colorCode == "rgb(178, 34, 34)"){
		document.getElementById(id).style.background="#7CFC00";
	}
}

function Check(){
	var amountGreen = 0
	for (i=1;i<10;i++){
		var boxString = "box-" + i
		var element = document.getElementById(boxString);
		var colorCode = getComputedStyle(element).backgroundColor;
		if(colorCode == "rgb(124, 252, 0)"){
			var amountGreen = amountGreen + 1;
		}
		if (amountGreen == 9-listOfSquares.length){
			wins = wins + 1
			console.log("WINS " + wins)
			if (wins == 10){
				gameFinished = true
				clearInterval(interval)
				allToBlue()
				wins = 0
				break;
			}
			else{setTimeout(alertWin, 200);
				break;}
		}
	}
}

function alertWin(){
	resetToRedAll()
	listOfSquares = []
	amountOfSquares = Math.floor(Math.random()*9)
	listTransparents()
}

function resetToRedAll(){
		document.getElementById("box-1").style.background="#B22222";
		document.getElementById("box-2").style.background="#B22222";
		document.getElementById("box-3").style.background="#B22222";
		document.getElementById("box-4").style.background="#B22222";
		document.getElementById("box-5").style.background="#B22222";
		document.getElementById("box-6").style.background="#B22222";
		document.getElementById("box-7").style.background="#B22222";
		document.getElementById("box-8").style.background="#B22222";
		document.getElementById("box-9").style.background="#B22222";
}

function allToBlue(){
		document.getElementById("box-1").style.background="#0000FF";
		document.getElementById("box-2").style.background="#0000FF";
		document.getElementById("box-3").style.background="#0000FF";
		document.getElementById("box-4").style.background="#0000FF";
		document.getElementById("box-5").style.background="#0000FF";
		document.getElementById("box-6").style.background="#0000FF";
		document.getElementById("box-7").style.background="#0000FF";
		document.getElementById("box-8").style.background="#0000FF";
		document.getElementById("box-9").style.background="#0000FF";
}

function allToWhite(){
		document.getElementById("box-1").style.background="#ffffff";
		document.getElementById("box-2").style.background="#ffffff";
		document.getElementById("box-3").style.background="#ffffff";
		document.getElementById("box-4").style.background="#ffffff";
		document.getElementById("box-5").style.background="#ffffff";
		document.getElementById("box-6").style.background="#ffffff";
		document.getElementById("box-7").style.background="#ffffff";
		document.getElementById("box-8").style.background="#ffffff";
		document.getElementById("box-9").style.background="#ffffff";
}


var interval = ""
function startTimer(){
	clearInterval(interval)
	var start = Date.now();
	interval = setInterval(function() {
    var delta = Date.now() - start; // milliseconds elapsed since start
   	document.getElementById('Timer').textContent = delta/1000;
}, 1);
}

function reset(){
	gameFinished = false
	resetToRedAll()
	listOfSquares = []
	amountOfSquares = Math.floor(Math.random()*9);
	listTransparents()
	startTimer()
}



