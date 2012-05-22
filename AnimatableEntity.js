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