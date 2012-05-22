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