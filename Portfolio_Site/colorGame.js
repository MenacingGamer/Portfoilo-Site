var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

 start();
 
 function start(){
      setupModeButtons();
      setupSquares();
	
 function setupModeButtons(){
		 		for(var i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
			});
		  }
	 }
 function setupSquares(){
		for(var i = 0; i < squares.length; i++){
				squares[i].addEventListener("click", function(){
				//grab color of clicked square
				var clickedColor = this.style.backgroundColor;
				//compare color to pickedColor
				if(clickedColor === pickedColor){
					messageDisplay.textContent = "Correct!";
					resetButton.textContent = "Play Again?"
					colorChange(clickedColor);
					h1.style.backgroundColor = clickedColor;
				}else{
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
				});
			   }
			   reset();
			 }
		 }

function reset(){
		colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDispaly to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
	    if(colors[i]){
	    squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	    }else{
	    squares[i].style.display = "none";
	    }
	}
	h1.style.backgroundColor = "steelblue";
	}
	resetButton.addEventListener("click", function(){
	reset();
})
	///looping through the array 

function colorChange(color){
// loop through all squares 
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.backgroundColor = color;	
		}
	}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
///card deck one 
function generateRandomColors(num){
	  //make an arry
	  var arr = []
	  //add num random colors to array
	  for(var i = 0; i < num; i++){
	  	// get random color and push into arr
	  	arr.push(randomColor());
	  	
	  }
	  //return that array
	  	return arr;
	} 

	function randomColor(){
		//pick a "red" from 0 -255
		var r = Math.floor(Math.random() * 256); 
		//pick a "green" from 0 to -255
		var g = Math.floor(Math.random() * 256);
		//pick a "blue" from 0 to -255
		var b = Math.floor(Math.random() * 256);
		return "rgb(" +  r +", " + g + ", " + b + ")";
	}