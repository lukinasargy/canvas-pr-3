function breackout() {
  //defining canvas
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  //variables start

  var ballRadius = 20;
  var x = ballRadius + Math.floor((canvas.width - 2 * ballRadius) * Math.random()); //begining coordinates
  var y = ballRadius; //begining coordinates
  var dx = Math.round(Math.random() * 3) + 2;
  var dy = Math.round(Math.random() * 3) + 2;
  var ballColor = "yellow";
  var persons = 1;


  //paddle parameters
  var paddleHeight = 20;
  var paddleWidth = 140;
  var paddleColor = 'grey';
  var paddleX = (canvas.width - paddleWidth) / 2;
  var paddleX2 = (canvas.width - paddleWidth) / 2;
  var rightPressed = false;
  var leftPressed = false;

  var rightPressed2 = false;
  var leftPressed2 = false;

  var score = 0;
  var score2 = 0;

  //variables end

  //event listeners for paddle start

  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);

  function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
    } else if (e.code == "KeyD") {
      rightPressed2 = true;
    } else if (e.code == "KeyA") {
      leftPressed2 = true;
    }
  }

  function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
    } else if (e.code == "KeyD") {
      rightPressed2 = false;
    } else if (e.code == "KeyA") {
      leftPressed2 = false;
    }
  }


  //event listeners for paddle end


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
  }

  function drawPaddle(paddleX, paddleY) {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = paddleColor;
    ctx.fill();
    ctx.closePath();
  }

  function gameOver() {
    ctx.fillStyle = "#F00";
    ctx.font = 'bold 40px sans-serif';
    ctx.fillText("Game Over", (canvas.width / 2 - 100), canvas.height / 2);
    ctx.fillStyle = "blue";
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText("press any key to reload", (canvas.width / 2 - 100), canvas.height / 2 + 50);
    document.onkeypress = function (e) {
      document.location.reload();
    }
    clearInterval(refreshInterval);
  }

  function reset() {
    x = Math.floor(ballRadius + (canvas.width - 2 * ballRadius) * Math.random()); //begining coordinates
    y = ballRadius + paddleHeight; //begining coordinates
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle(paddleX, canvas.height - paddleHeight);
    drawPaddle(paddleX2, 0);
    $('#key').html(dx + "scoreDown =" + score + "scoreUp=" + score2);
    x += dx;
    y += dy;
    //ball hitting wall
    //    if ((y - ballRadius) < 0) {
    //      score += 100;
    //      x = ballRadius + Math.floor((canvas.width - ballRadius) * Math.random());
    //      y = ballRadius + Math.floor((canvas.width - ballRadius) * Math.random());
    //      //      dy = -dy;
    //    }
    //ball hitting wall
    if (x - ballRadius < 0 || x + ballRadius > canvas.width) {
      dx = -dx;
    }
    //paddle ball interaction
    else if (y + ballRadius > canvas.height - paddleHeight) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      } else if (y + ballRadius > canvas.height) {
        score2 += 100;
        reset();
      }
    } else if (y - ballRadius < paddleHeight) {
      if (x > paddleX2 && x < paddleX2 + paddleWidth) {
        dy = -dy;
      }
      else if (y - ballRadius < 0) {
      score += 100;
        dy=-dy;
      reset();
    } 


    };


    //paddle moving logic
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    }

    //second player
    if (rightPressed2 && paddleX2 < canvas.width - paddleWidth) {
      paddleX2 += 7;
    } else if (leftPressed2 && paddleX2 > 0) {
      paddleX2 -= 7;
    }

  }

  var refreshInterval = setInterval(draw, 10);

}
