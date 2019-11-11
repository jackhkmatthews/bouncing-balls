function keyHandler(key, down) {
  switch (key) {
    case "ArrowUp":
      event.preventDefault();
      keyboardState.arrowUpPressed = down;
      break;
    case "ArrowDown":
      event.preventDefault();
      keyboardState.arrowDownPressed = down;
      break;
    case "ArrowLeft":
      event.preventDefault();
      keyboardState.arrowLeftPressed = down;
      break;
    case "ArrowRight":
      event.preventDefault();
      keyboardState.arrowRightPressed = down;
      break;
    default:
      break;
  }
}

function keyDownHandler(event) {
  keyHandler(event.key, true);
}

function keyUpHandler(event) {
  keyHandler(event.key, false);
}

function getVelX(keyboardState) {
  if (keyboardState.arrowLeftPressed && keyboardState.arrowRightPressed) {
    return 0;
  }
  if (keyboardState.arrowRightPressed) {
    return 7;
  }
  if (keyboardState.arrowLeftPressed) {
    return -7;
  }
  return 0;
}

function getVelY(keyboardState) {
  if (keyboardState.arrowUpPressed && keyboardState.arrowDownPressed) {
    return 0;
  }
  if (keyboardState.arrowDownPressed) {
    return 7;
  }
  if (keyboardState.arrowUpPressed) {
    return -7;
  }
  return 0;
}
