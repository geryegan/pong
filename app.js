var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;

window.onload = function(){
	console.log("Asuh, World")
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d')

	var framesPerSecond = 60
	setInterval(function(){
		moveEverything();
		drawEverything();
	}, 1000/framesPerSecond);

}


function moveEverything(){
	ballX = ballX + ballSpeedX;
	if (ballX === canvas.width){
		ballSpeedX=-ballSpeedX;
	}
	if (ballX < 0){
		ballSpeedX=-ballSpeedX;
	}

}
function drawEverything(){	
	//draws the black screen
	colorRect(0,0,canvas.width, canvas.height, 'black')
	//this is left player paddle
	colorRect(0,210,10,100,'white');
	//this is the ball
	colorRect(ballX,100,10,10,'red');
}

function colorRect (leftX, topY, width, height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY,width, height);
};
