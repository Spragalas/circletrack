function Obstacle(circleRadius,speed,h,w,fi){
	this.fi = 0;
	this.speed = 0.5;
	this.w = 15;
	this.h = 50;
	this.circleRadius = circleRadius;

	this.x = 0;
	this.y = 0;

	if(fi != null)
		this.fi = fi;
	if(speed != null)
		this.speed = speed;
	if(h != null)
		this.h = h;
	if(w != null)
		this.w = w;

	this.interact=function(player){
		angleMode(DEGREES);
		var theta=asin(this.w/2/this.circleRadius);
		if(abs(player.fi-this.fi) <= abs(theta)){
			if(player.jumpHeight < this.h){
				player.dead=true;
			}else{
				score++;
			}
		}
	}

	this.update = function(){
		this.fi = this.fi + this.speed;
		if(this.fi > 360){
			this.fi = this.fi - 360;
		}
		if(this.fi < 0)
			this.fi = this.fi + 360;
	}

	this.show = function(){
		push();
		translate(width/2,height/2);
		angleMode(DEGREES);

		this.x = sin(this.fi)*this.circleRadius;
		this.y = cos(this.fi)*this.circleRadius;

		translate(this.x,this.y);
		fill(255);
		noStroke();
		rotate(-this.fi);
		rect(-this.w/2,0,this.w,-this.h);
		
		if(debuggerLines){
			stroke(255,0,0);
			line(0,0,0,-this.circleRadius);
		}

		pop();
	}
}