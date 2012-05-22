Function.prototype.inheritFrom = function( object ){ 
	this.prototype = new object();
	this.prototype.constructor = this;
	return this;
}