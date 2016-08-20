var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;
var ballY = 10;
var ballSpeedY = 4;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10

function calculateMousePos(evt){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
	return {
		x: mouseX,
		y:mouseY
	};
}

window.onload = function(){
	console.log("Asuh, World")
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d')

	var framesPerSecond = 60
	setInterval(function(){
		moveEverything();
		drawEverything();
	}, 1000/framesPerSecond);

	canvas.addEventListener('mousemove',
		function(evt){
			var mousePos = calculateMousePos(evt);
			paddle1Y = mousePos.y-(PADDLE_HEIGHT/2);
		});
}

function ballReset() {
	ballSpeedX=-ballSpeedX
	ballX = canvas.width/2;
	ballY = canvas.height/2;
}

function computerMovement(){
	if (ballY > paddle2Y){
		paddle2Y += 10;
	}
	if (ballY < paddle2Y){
		paddle2Y-=10;
	}
}

function moveEverything(){
	computerMovement();

	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;
	//Horizontal movement
	if (ballX > canvas.width){
		//ballSpeedX=-ballSpeedX;
		if(ballY > paddle2Y &&
			ballY< paddle2Y + PADDLE_HEIGHT){
			ballSpeedX=-ballSpeedX;
		} else {
		ballReset();}
	}
	if (ballX < 0){
		
		if(ballY > paddle1Y &&
			ballY< paddle1Y + PADDLE_HEIGHT){
			ballSpeedX=-ballSpeedX;
		} else {
		ballReset();}
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
	//this is User paddle
	colorRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');	

	//this is COMP paddle
	colorRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');
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
