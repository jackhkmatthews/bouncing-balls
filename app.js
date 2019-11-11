var canvas = document.querySelector("canvas");

var ctx = canvas.getContext("2d");

var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);

var keyboardState = {
  arrowLeftPressed: false,
  arrowRightPressed: false,
  arrowUpPressed: false,
  arrowDownPressed: false
};

var balls = [];

while (balls.length < 50) {
  var size = random(10, 20);
  var ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    // 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );

  balls.push(ball);
}

balls[1].color = "red";
balls[0].color = "blue";
balls[0].velX = 0;
balls[0].velY = 0;

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);

loop(balls);
