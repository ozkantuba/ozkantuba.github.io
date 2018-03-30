
//Create variable with the name of jpegs in asset folder
var elements = ["rock","paper","scissors"];

//this variable will hold the current randomized number to pull from the elements array 
var randomNum = 0; 
var computerChoice;
var audioElement;

//create random number for random reply, bc js does not have a random function so we will use this function to generate random numbers/choices
function randomNumGenerator (arrayName){
	return Math.floor(Math.random() * arrayName.length);
}

//this function will turn when rock image is clicked
function playRock(){

	//change player image with selected image and rotate
	$ ('#p1').attr("src","assets/images/rock.jpg");
	$ ('#p1').css({'transform':'rotate(180deg)'});
	var i = randomNumGenerator(elements); 
	var computerChoice = elements[i]
	console.log(computerChoice);
	$ ('#p2').attr('src',"assets/images/"+computerChoice+".jpg");
	
		//define all possibilities and generate the result according to player's choice and computer's choice 
		if (computerChoice === "rock"){
		$ ('#result').text("DRAW");
		
		} else if (computerChoice === "paper"){
		$ ('#result').text("UPPS! TRY AGAIN");
		
		} else {
		$ ('#result').text("WE ARE THE CHAMPIONS");
		//if you win you will see a winner gif with sound
		audioElement.setAttribute('src',"assets/sounds/champ.mp4");
		audioElement.play();
		$ ('#mercury').attr('src',"assets/images/mercury.gif");

		//gif disappears after three seconds
		setTimeout(function(){
		$ ('#mercury').attr('src',"");
		}, 5000);
		}
}

//this function will trun when paper image is clicked
function playPaper(){

	//change player image with selected image  and rotate
	$ ('#p1').attr("src","assets/images/paper.jpg");
	$ ('#p1').css({'transform':'rotate(180deg)'});
	var i = randomNumGenerator(elements); 
	var computerChoice = elements[i]
	console.log(computerChoice);
	$ ('#p2').attr('src',"assets/images/"+computerChoice+".jpg");
	
		if (computerChoice === "rock"){
		$ ('#result').text("WE ARE THE CHAMPIONS");
		audioElement.setAttribute('src',"assets/sounds/champ2.mp4");
		audioElement.play();
		$ ('#mercury').attr('src',"assets/images/mercury2.gif");
		
		setTimeout(function(){
		$ ('#mercury').attr('src',"");
		}, 5000);
		
		} else if (computerChoice === "paper"){
		$ ('#result').text("DRAW");

		} else {
		$ ('#result').text("UPPS! TRY AGAIN");
	
		}
}

//this function will trun when scissors image is clicked
function playScissors(){

	//change player image with selected image and rotate
	$ ('#p1').attr("src","assets/images/scissors.jpg");
	$ ('#p1').css({'transform':'rotate(180deg)'});
	var i = randomNumGenerator(elements); 
	var computerChoice = elements[i]
	console.log(computerChoice);
	$ ('#p2').attr('src',"assets/images/"+computerChoice+".jpg");
	
		if (computerChoice === "rock"){
		$ ('#result').text("UPPS! TRY AGAIN");
		
		} else if (computerChoice === "paper"){
		$ ('#result').text("WE ARE THE CHAMPIONS");
		audioElement.setAttribute('src',"assets/sounds/dontstopme.mp4");
		audioElement.play();
		$ ('#mercury').attr('src',"assets/images/mercury3.gif");
		
		setTimeout(function(){
		$ ('#mercury').attr('src',"");
		}, 5000);

		} else {
		$ ('#result').text("DRAW");
		}

}

//Init function will initialize the rest of the function
function init(){
		audioElement = document.createElement('audio'); // creating an audio element with the tag audio
		// audioElement.setAttribute('autoplay', ''); //
}

$(document).ready(function() {
	init();
})
