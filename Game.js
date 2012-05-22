function Game(canvas){
	this.update = function() {
		
	}
	
	this.draw = function() {
		this.clear();
	}
	
	this.clear = function(){
		this.context.clearRect(0, 0, canvas.width, canvas.height);
	}
	
	this.requestFullScreen = function requestFullScreen(){
		this.canvas.width = document.width;
		this.canvas.height = document.height;
	}
	
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
}