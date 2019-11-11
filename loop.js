function loop(balls) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  balls[0].velX = getVelX(keyboardState);
  balls[0].velY = getVelY(keyboardState);

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }
  requestAnimationFrame(() => loop(balls));
}
