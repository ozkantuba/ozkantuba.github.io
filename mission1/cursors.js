function Cursors(x,y, randomImages){
	this.x = x;
	this.y = y;
	this.randomImages = randomImages;

	this.display = funtion(){
	imageMode(CENTER);
	image (this.randomImages, this.x, this.y);
	}

	this.update = funtion(){
	this.x = this.x + random(-1,1);
	this.y = this.y + random(-1,1);

	}

}