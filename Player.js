function Player(circleRadius){
	this.fi = 0;
	this.radius = 10;
	this.circleRadius = circleRadius;

	this.jumpHeight = 0;
	this.isJumping = false;
	this.idh = 3;

	this.dfi=0;

	this.maxJump = 70;
	this.inAirTime = 0;

	this.dead = false;

	this.moveLeft=function(){
		this.dfi=-0.4;
	}

	this.moveRight=function(){
		this.dfi=0.4;
	}

	this.jump=function(){
		if(this.isJumping)
			return;
		this.isJumping=true;
		this.dh = this.idh;
	}

	this.stopLeft=function(){
		if(this.dfi>0)
			return;
		this.dfi=0;
	}

	this.stopRight=function(){
		if(this.dfi<0)
			return;
		this.dfi=0;
	}

	this.stopJump=function(){
		if(!this.isJumping)
			return;
		this.dh = -this.idh;
	}

	this.reset = function(){
		this.fi = 0;
		this.isJumping = false;
		this.inAirTime = 0;
		this.jumpHeight = 0;
		this.dead = false;
	}

	this.update = function(){
		if(this.isJumping){
			this.inAirTime++;
			this.jumpHeight = this.jumpHeight + this.dh;
			if(this.jumpHeight >= this.maxJump){
				this.jumpHeight = this.maxJump;
				if(this.inAirTime > 45){
					this.stopJump();
				}
			}else if(this.jumpHeight < 0){
				this.jumpHeight = 0;
				this.isJumping = false;
				this.inAirTime = 0;
			}
		}
		this.fi=this.fi+this.dfi;
		if(this.fi < 0)
			this.fi = this.fi + 360;
		if(this.fi > 360)
			this.fi = this.fi - 360;
	}

	this.show = function(){
		push();

		translate(width/2,height/2);
		angleMode(DEGREES);
		if(this.dead)
			fill(255,0,0);
		else
			fill(0,255,255)
		noStroke();
		var x = sin(this.fi)*(this.circleRadius-this.radius-this.jumpHeight);
		var y = cos(this.fi)*(this.circleRadius-this.radius-this.jumpHeight);

		ellipse(x,y,this.radius*2,this.radius*2);

		pop();
	}
}