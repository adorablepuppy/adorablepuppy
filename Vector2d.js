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