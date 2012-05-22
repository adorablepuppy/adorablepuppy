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