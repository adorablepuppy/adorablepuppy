function Vector2d(point1, point2) {
	
	this.getPoint1 = function() { return this.point1; }
	this.getPoint2 = function() { return this.point2; }
	
	this.setPoint1 = function(point1) { this.point1 = point1; }
	this.setPoint2 = function(point2) { this.point2 = point2; }
	
	this.getMin = function(vector) {
		return new Vector2d( Math.min(this.getPoint1(), vector.getPoint1())
						   , Math.min(this.getPoint2(), vector.getPoint2()) );
	}
	
	this.getMax = function(vector) {
		return new Vector2d( Math.max(this.getPoint1(), vector.getPoint1())
						   , Math.max(this.getPoint2(), vector.getPoint2()) );	
	}
	
	this.point1 = point1;
	this.point2 = point2;
}

function Rectangle(x, y, width, height) {

	this.getLocation = function() { return this.location; }
	this.getX = function() { return this.location.getPoint1(); }
	this.getY = function() { return this.location.getPoint2(); }
	
	this.getSize =   function() { return this.size; }
	this.getWidth =  function() { return this.size.getPoint1(); }
	this.getHeight = function() { return this.size.getPoint2(); }
	
	this.setLocation = function(x, y) {
		this.location.setPoint1(x);
		this.location.setPoint2(y);
	}
	this.setX = function(x) { this.location.setPoint1(x); }
	this.setY = function(y) { this.location.setPoint2(y); }
	
	this.setSize = function(width, height) {
		this.size.setPoint1(width);
		this.size.setPoint2(height);
	}
	
	this.intersects = function(rectangle) {
		
		var r1Left = this.getX();
		var r1Right = r1Left + this.getWidth();
		var r1Top = this.getY();
		var r1Bottom = r1Top + this.getHeight();
		
		var r2Left = rectangle.getX();
		var r2Right = r2Left + rectangle.getWidth();
		var r2Top = rectangle.getY();
		var r2Bottom = r2Top + rectangle.getHeight();
		
		if(r1Left > r2Right)
			return false;
		if(r1Top > r2Bottom)
			return false;
		if(r2Left > r1Right)
			return false;
		if(r2Top > r2Bottom)
			return false;
		
		return true;
		
	}
	
	this.setWidth = function(width) { this.size.setPoint1(width); }
	this.setHeight = function(height) { this.size.setPoint2(height); }
	
	this.location = new Vector2d(x, y);
	this.size = new Vector2d(width, height);
}

function RenderableEntity(texture, x, y, width, height, srcX, srcY, srcWidth, srcHeight, visible, drawOrder, flipX, flipY) {

	this.getTexture = function() { return this.texture; }
	this.getRectangle = function() { return this.rectangle; }
	
	this.getLocation = function() { return this.rectangle.getLocation(); }
	this.getX = function() { return this.rectangle.getX(); }
	this.getY = function() { return this.rectangle.getY(); }
	
	this.getSize = function() { return this.rectangle.getSize(); }
	this.getWidth = function() { return this.rectangle.getWidth(); }
	this.getHeight = function() { return this.rectangle.getHeight(); }
	
	this.getSrcRectangle = function() { return this.srcRectangle; }
	
	this.getSrcLocation = function() { return this.srcRectangle.getLocation(); }
	this.getSrcX = function() { return this.srcRectangle.getX(); }
	this.getSrcY = function() { return this.srcRectangle.getY(); }
	
	this.getSrcSize = function() { return this.srcRectangle.getSize(); }
	this.getSrcWidth = function() { return this.srcRectangle.getWidth(); }
	this.getSrcHeight = function() { return this.srcRectangle.getHeight(); }
	
	this.getVisible = function() { return this.visible; }
	
	this.getFlipX = function() { return this.flipX; }
	this.getFlipY = function() { return this.flipY; }
	
	this.setTexture = function(texture) { this.texture = texture; }
	
	this.setRectangle = function(x, y, width, height) {
		this.rectangle.setLocation(x, y);
		this.rectangle.setSize(width, height);
	}
	
	this.setLocation = function(x, y) { this.rectangle.setLocation(x, y); }
	this.setX = function(x) { this.rectangle.setX(x); }
	this.setY = function(y) { this.rectangle.setY(y); }
	
	this.setSize = function(width, height) { this.rectangle.setSize(width, height); }
	this.setWidth = function(width) { this.rectangle.setWidth(width); }
	this.setHeight = function(height) { this.rectangle.setHeight(height); }
	
	this.setSrcRectangle = function(x, y, width, height) {
		this.srcRectangle.setLocation(x, y);
		this.srcRectangle.setSize(width, height);
	}
	
	this.setSrcLocation = function(x, y) { this.srcRectangle.setLocation(x, y); }
	this.setSrcX = function(x) { this.srcRectangle.setX(x); }
	this.setSrcY = function(y) { this.srcRectangle.getY(y); }
	
	this.setSrcSize = function(width, height) { this.srcRectangle.setSize(width, height); }
	this.setSrcWidth = function(width) { this.srcRectangle.setWidth(width); }
	this.setSrcHeight = function(height) { this.srcRectangle.setHeight(height); }
	
	this.setVisible = function(visible) { this.visible = visible; }
	
	this.setFlipX = function(flipX) { this.flipX = flipX; }
	this.setFlipY = function(flipY) { this.flipY = flipY; }
	
	this.render = function(context,camera) {
		if( this.visible
		 && camera.intersects(this.getRectangle())) {
		 
			if(this.flipX) {
				context.translate(this.getWidth(), 0);
				context.scale(-1, 1);
			}
			
			if(this.flipY) {
				context.translate(0, this.getHeight());
				context.scale(1, -1);
			}
			
			context.drawImage( texture
							 , this.getSrcX()
							 , this.getSrcY()
							 , this.getSrcWidth()
							 , this.getSrcHeight()
							 , this.getX()
							 , this.getY()
							 , this.getWidth()
							 , this.getHeight() );
			
			if(this.flipX) {
				context.translate(-this.getWidth(), 0);
				context.scale(-1, 1);
			}
			
			if(this.flipY) {
				context.translate(0, -this.getHeight());
				context.scale(1, -1);
			}
			
		}
		
	}
	
	this.texture = texture;
	this.rectangle = new Rectangle(x, y, width, height);
	this.srcRectangle = new Rectangle(srcX, srcY, srcWidth, srcHeight);
	this.visible = visible;
	this.drawOrder = drawOrder;
	this.flipX = flipX;
	this.flipY = flipY;
}

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

AnimatableEntity.inheritFrom(RenderableEntity);
function AnimatableEntity(texture, x, y, width, height) {
	this.texture = texture;
	this.rectangle = new Rectangle(x, y, width, height);
}

function Timer(){
	this.lastTime = Date.now();
	
	this.getDelaTime = function(){
		var deltaTime = (Date.now() - this.lastTime) / 1000;
	}
}

Function.prototype.inheritFrom = function( object ){ 
	this.prototype = new object();
	this.prototype.constructor = this;
	return this;
}

function requestFullScreen(canvas){
	canvas.width = document.width;
	canvas.height = document.height;
	
}

function Game(canvas){
	this.update = function() {
		
	}
	
	this.draw = function() {
		this.clear();
	}
	
	this.clear = function(){
		this.context.clearRect(0, 0, canvas.width, canvas.height);
	}
	
	this.context = canvas.getContext("2d");
}