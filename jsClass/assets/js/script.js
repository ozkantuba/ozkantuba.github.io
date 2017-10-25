//Create variables

var replies = ["don't stop me now!", "cause i am having a good time!", "...lady goddava! i am gonna go go there is no stopping me!", 
"is this the real life?", "open your eyes!","escape from reality...", "little high, little low", "easy come, easy go", "doesnt really matter to me!", 
"mamma, just killed a man!", "mammaaaaaa, uuuhuhuhu!", "nothing really matters", "is this just fantasy?", "we are the champions, my friend!", "no time for losers, cos we are the champions"]; 
// array of replies. this array order must correspond with the right sound life.

var sounds = ["dontstopme", "dontstopme2", "dontstopme4", "bohemiam", "bohemiam2", "bohemiam3", "bohemiam4", "bohemiam5", 
"bohemiam6", "bohemiam7", "bohemiam8", "bohemiam9", "bohemiam10", "champians", "champians2"];
// name of sound files

var mercury = [ "mercury", "mercury3", "mercury4", "mercury5", "mercury7", "mercury8", 
"mercury10", "mercury11", "mercury12", "mercury13", "mercury14", "mercury15", "mercury16", "mercury17", "mercury18", "mercury19", "mercury20", 
"mercury21"];
// name of gifs of mercuries

var randomNum = 0; 
//this variable will hold the current randomized number to pull from the replies array

var randomMercury = 0;
//this variable holds random number to pull a new mercury gif, 

var audioElement;

// a function to play sound based off of random variable being passed

function playSounds(r) {
	audioElement.setAttribute('src', "assets/sound/" + sounds[r] + ".mp4");
	audioElement.play();
}

function randomNumGenerator (arrayName){
	//create random number for random reply
	return Math.floor(Math.random() * arrayName.length);
}

//create answerQuestions function

function answerQuestion(){
	//assign a random number to randomNum
	randomNum = randomNumGenerator(replies);
	console.log("Random reply:" + randomNum);

	$('#truths').text(replies[randomNum]);

	// call playSounds function
	playSounds(randomNum);

	randomMercury = randomNumGenerator(mercury); 

	$ ('#mercury').css("background", "url('assets/img/" + mercury[randomMercury] + ".gif') no-repeat");
	$ ('#mercury').css("background-size", "100% auto");

}

//Init function will initialize the rest of the function

function init(){

		audioElement = document.createElement('audio'); // creating an audio element with the tag audio
		audioElement.setAttribute('autoplay', 'autoplay'); //

 		$('#truths').click(function(){
 		answerQuestion();
 		});
}


$(document).ready(function() {
	init();

})

