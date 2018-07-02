//get all colors (randomly generated)
var colors = generateRandomColors(6);

//selecting all the squares and message id (which is for displaying try again or correct)
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var pickedH1 = document.querySelector("#pickedH1")
var resetButton = document.querySelector("#reset");
var hardButton = document.querySelector("#hardButton");
var easyButton = document.querySelector("#easyButton");
var numberOfSquares;

var hardButtonOn = true;
var easyButtonOn = false;


hardButton.addEventListener("click", function() {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColors(6);
	pickedColor = colors[randomNumber()];
	pickedH1.textContent = pickedColor;

	hardButtonOn = true;
	easyButtonOn = false;

	for (var i=0; i < 6; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}

});



easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = colors[Math.floor(Math.random() * 3)];
	// console.log(pickedColor);
	pickedH1.textContent = pickedColor;

	hardButtonOn = false;
	easyButtonOn = true;
	
	for (var i=0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});





//picked color which is the right color and when selected, the player wins.
var pickedColor = colors[randomNumber()];
//shows RGB on screen.
pickedH1.innerText = pickedColor;


for (var i=0; i < squares.length; i++)
{	
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to all the squares.
	squares[i].addEventListener("click", function() 
	{
		var clickedColor = this.style.backgroundColor;

		//if it is correct, msg content change to correct, change all squares to the correct color and also change the background of h1.
		if (clickedColor == pickedColor) 
		{
			messageDisplay.textContent = "Correct!";
			colorChange(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?"
		}
		else 
		{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again!"
		}

	});
}

//gets the color and then applies it to all the squares.
function colorChange(colorSelected) {
	for (var i=0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colorSelected;
	}
};

function randomNumber() {
	var x = Math.floor((Math.random() * colors.length));
	return x;
}

function generateRandomColors(number) {

	var colors = [];

	for (var i=0; i < number; i++) {
		var a = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var c = Math.floor(Math.random() * 256)
		var string = "rgb(" + a + ", " + b + ", " + c + ")";
		colors[i] = string;
		console.log(string);
	}

	return colors;
}

resetButton.addEventListener("click", function() {

	if (resetButton.textContent == "Play Again?") {
		resetButton.textContent = "New Colors"
	}

	messageDisplay.textContent = "";
	if (hardButtonOn == true) {
		numberOfSquares = 6;
	} else {
		numberOfSquares = 3;
	}
	colors = generateRandomColors(numberOfSquares);
	pickedColor = colors[randomNumber()];
	document.querySelector("#pickedH1").innerText = pickedColor;
	h1.style.backgroundColor = "steelblue";


	for (var i=0; i < squares.length; i++)
	{	
		if(colors[i]) {
		squares[i].style.backgroundColor = colors[i];
	}	else {
		squares[i].style.display = "none";
	}
	}

});
