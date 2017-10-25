
// Resources that I used for this assignment: 
// Daniel Shiffman's tutorials on P5.js, and examples from P5.js website

// var mic;
var amp;
var button;
var volHistory = [];
var backgroundSong;
var songs = [];

var cursors = [];
var randomImages = [];

////

var texts = ['andırda peytamal','benim hızanlar','dangur dungur','eseği sürersen gider sürmezsen gitmez','hep yandı fındıklar dalda']

function toggleSong(){
	if (backgroundSong.isPlaying()){
		backgroundSong.pause();
	}else{
		backgroundSong.play();
	}
}

function preload(){
	for (var i =0; i<9; i++){
		randomImages[i] = loadImage('assets/img/'+ i +'.png');
		songs[i] = loadSound('assets/'+ i +'.mp3');	
	}
		backgroundSong = loadSound('assets/PercLoop.mp3');

}

//creating a function for calling one of the sounds in songs array //
function playSongs(r) {
	songs[r].play();
}

function Cursors(x,y, randomImages){
	this.x = x;
	this.y = y;
	this.randomImages = randomImages;

	this.display = function(){
	imageMode(CENTER);
	image (this.randomImages, this.x, this.y);
	}

	this.update = function(){
	this.x = this.x + random(-1,1);
	this.y = this.y + random(-1,1);
	}
}

function setup(){
	createCanvas(1200,600);	
	button = createButton('play/stop');
	button.mousePressed(toggleSong);
	backgroundSong.play();

	amp = new p5.Amplitude();
	// mic = new p5.AudioIn();
	// mic.start();
}

function mousePressed() {

	var r = floor(random(0, randomImages.length));
	var b = new Cursors(mouseX, mouseY, randomImages[r]);
	cursors.push(b);
	playSongs(r);
	// var s = new Songs(r).play();
	
}

function keyTyped() {

	// if(key == ''){
	textSize(20);
	textAlign(RIGHT);
	var r = floor(random(0, texts.length));
	text(texts[r], 50,50)

	// [r].push();

	// var s = new Songs(r).play();
	// }
}

function draw(){
	background(250);
	var vol = amp.getLevel();
	volHistory.push(vol);
	stroke(1);
	// noFill();
	fill(255,255,0);

	beginShape();

	strokeWeight(3);
	for(var i = 0; i< volHistory.length; i++){
		var y = map(volHistory[i], 0 , 1, height, 0);
		vertex(i,y);
	}

	endShape();

	if (volHistory.length > width){
		volHistory.splice(0,8);
	}

	for (var i = cursors.length - 1; i >= 0; i--) {
		cursors[i].update();
		cursors[i].display();

	}

	fill(0,255,255)
	ellipse(0,height-100,vol*2000,vol*2000);
	console.log(vol);
}
	








