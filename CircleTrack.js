function CircleTrack(){
	this.radius=275;

	this.rotateSpeed = 1;
	this.edgeSize = 30;

	this.obstacles =  [
		new Obstacle(this.radius-this.edgeSize/2,0.2,null,null,45),
		new Obstacle(this.radius-this.edgeSize/2,0.4,null,null,135),
		new Obstacle(this.radius-this.edgeSize/2,0.6,null,null,-135),
		new Obstacle(this.radius-this.edgeSize/2,0.8,null,null,-45)
	];

	this.addNewObstacle=function(){
		this.obstacles.push(new Obstacle(this.radius-this.edgeSize/2,0.7,null,null,-45));
	}

	this.interact=function(player){
		for(var i = 0; i < this.obstacles.length; i++)
			this.obstacles[i].interact(player);
	}

	this.update = function () {
		for(var i = 0; i < this.obstacles.length; i++)
			this.obstacles[i].update();
	}

	this.show = function () {
		push();
		translate(width/2,height/2);

		fill(255,200,0);
		noStroke();
		ellipse(0,0,this.radius*2,this.radius*2);
		fill(51);
		noStroke();
		ellipse(0,0,this.radius*2-this.edgeSize,this.radius*2-this.edgeSize);

		pop();

		for(var i = 0; i < this.obstacles.length; i++)
			this.obstacles[i].show();
		

	}
}