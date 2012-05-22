function Animation(name,duration,loop){
	this.getName = function() { return this.name; }
	this.setName = function(name) { this.name = name; }
	this.getFrameDuration = function() { return this.duration; }
	this.setFrameDuration = function(duration) { this.duration = duration; }
	this.getFrameIndex = function() { return this.index; }
	this.setFrameIndex = function(index) { this.index = index; }
	
	this.getLoop = function() { return this.loop; }
	this.setLoop = function(loop) { this.looping = loop; }
	
	this.addFrame = function(x, y, width, height) {
		this.frames.push(
			new Rectangle( x
			             , y
						 , width
						 , height )); }
	
	this.update = function(deltaTime) {
		this.stateTime += deltaTime;
		if(this.stateTime > this.duration){
			
		}
	}
	
	this.name = name;
	this.looping = loop;
	this.stateTime = 0;
	this.index = 0;
	this.duration = duration;
	this.frames = [];
}