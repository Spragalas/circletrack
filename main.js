var trackCirle;
var player;
var debuggerLines=false;
var score = 0;

function setup() {
	createCanvas(600,600);
	trackCirle = new CircleTrack();
	player = new Player(trackCirle.radius-trackCirle.edgeSize/2);
}

function keyPressed(){
	switch(keyCode){
		case 32: //space bar
			player.jump();
			break;
		case 39: //right arrow
			player.moveRight();
			break;
		case 37: //left arrow
			player.moveLeft();
			break;
		default: break;
	}
}

function keyReleased(){
	switch(keyCode){
		case 32:
			player.stopJump();
			break;
		case 39: //right arrow
			player.stopRight();
			break;
		case 37: //left arrow
			player.stopLeft();
			break;
		default: break;
	}
}
 
function draw() {
 	background(51);

 	if(floor(score / 10) > trackCirle.obstacles.length)
 		trackCirle.addNewObstacle();

	trackCirle.update();
	player.update();

	trackCirle.interact(player);

	trackCirle.show();
	if(player.dead){
		trackCirle.obstacles = trackCirle.obstacles.splice(0,4);
		player.reset();
		score=0;
	}
	player.show();

	if(debuggerLines){
		stroke(255);
		line(0,300,600,300);
		stroke(255);
		line(300,0,300,600);
	}
	textSize(32);
	fill(255);
	text("Score: " + score,10,32);
}