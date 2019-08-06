function breackout() {
  //defining canvas
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  //variables start

  var ballRadius = 20;
  var x = ballRadius; //begining coordinates
  var y = canvas.height / 2; //begining coordinates
  var dx = 4;
  var dy = -4;
  var ballColor = "yellow";


  //paddle parameters
  var paddleHeight = 20;
  var paddleWidth = 140;
  var paddleColor = 'grey';
  var paddleX = (canvas.width - paddleWidth) / 2;
  var rightPressed = false;
  var leftPressed = false;

  //variables end

  //event listeners for paddle start

  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);

  function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
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

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = paddleColor;
    ctx.fill();
    ctx.closePath();
  }
  function gameOver() {
    ctx.fillStyle = "#F00";
    ctx.font = 'bold 40px sans-serif';
    ctx.fillText("Game Over", (canvas.width/2 - 100), canvas.height/2);
    clearInterval(refreshIntervalId);
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    x += dx;
    y += dy;
    if (y - ballRadius < 0 ) {
      dy = -dy;
      ballColor = getRandomColor();
      drawBall();
    }
    if (y - ballRadius > canvas.height) {
      gameOver();
      
    }
    if (x - ballRadius < 0 || x + ballRadius > canvas.width  ) {
      dx = -dx;
      ballColor = getRandomColor();
      drawBall();
    }
    if ( ( paddleX < x && x < (paddleX + paddleWidth) ) && (y + ballRadius >  canvas.height - paddleHeight) ) {
      dy = -dy;
      ballColor = getRandomColor();
      drawBall();
    }

    //paddle moving logic
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    }
//    $('#key').html('right=' + rightPressed + ' left =' + leftPressed);

  }
  
  var refreshIntervalId = setInterval(draw, 10);

}
