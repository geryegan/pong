var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;
var ballY = 10;
var ballSpeedY = 4;

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
	ballY = ballY + ballSpeedY;
	//Horizontal movement
	if (ballX > canvas.width){
		ballSpeedX=-ballSpeedX;
	}
	if (ballX < 0){
		ballSpeedX=-ballSpeedX;
	}
	//Vertical movement
	if (ballY > canvas.height){
		ballSpeedY=-ballSpeedY;
	}
	if (ballY < 0){
		ballSpeedY=-ballSpeedY;
	}

}
function drawEverything(){	
	//draws the black screen
	colorRect(0,0,canvas.width, canvas.height, 'black')
	//this is left player paddle
	colorRect(0,210,10,100,'white');
	//this is the ball
	colorCircle(ballX,ballY,10,'white')
	
}

function colorCircle(centerX,centerY,radius,drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
	canvasContext.fill();

}
function colorRect (leftX, topY, width, height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY,width, height);
};
