function breackout() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  //  ctx.beginPath();
  //  ctx.rect(20, 40, 50, 50);
  //  ctx.fillStyle = 'red';
  //  ctx.fill();
  //  ctx.closePath();
  //
  //  ctx.beginPath();
  //  ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
  //  ctx.fillStyle = "green";
  //  ctx.fill();
  //  ctx.closePath();
  //
  //  ctx.beginPath();
  //  ctx.rect(160, 10, 100, 40);
  //  ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
  //  ctx.stroke();
  //  ctx.closePath();
  var x = 0; //begining coordinates
  var y = canvas.height/2; //begining coordinates
  var dx = 0.2;
//  var dy = Math.sqrt(2500 - x*x);

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += Math.cos(x/10);
  }
  setInterval(draw, 10);

}
