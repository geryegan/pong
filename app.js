var canvas;
var canvasContext;

window.onload = function(){
	
	console.log("Asuh, World")
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d')
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	canvasContext.fillStyle = 'red';
	canvasContext.fillRect(200,200,50,25);
	canvasContext.fillStyle = 'green';
	canvasContext.fillRect(400,300,40,40);

}