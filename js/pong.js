console.log('helloace')
// grab a reference of our "canvas" using its id
const canvas = document.getElementById('pong');
/* get a "context". Without "context", we can't draw on canvas */
const ctx = canvas.getContext('2d');

//create user object
//create paddle
const user= {
    x: 10,
    y: canvas.height/2 -  100/2 ,
    width: 10,
    height: 100,
    color: "White",
    Score: 0,
}

//create the computer paddle
const computer = {
    x: canvas.width -20,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "White",
    Score: 0,
}

//create the ball
const ball = {
    x: canvas.width /2,
    y: canvas.height /2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: "white",

}




// draw rectangle functions-Creating canvas background color
function drawRect(x,y,w,h,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}
drawRect(0,0,canvas.width, canvas.height, "black")

// create the net
const net = {
    x: canvas.width/2,
    y:0,
    width: 2,
    height: 10,
    color: "white"
}

//draw net function to draw the net on canvas
function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

//creating drawing my cicrle for the ball
function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    // syntax --> arc(x, y, radius, startAngle, endAngle, antiClockwise_or_not)
    ctx.arc(x, y, r, 0, Math.PI * 2, false); // π * 2 Radians = 360 degrees
    ctx.closePath();
    ctx.fill();
  }
  // calling function with paramaterss to draw my ball
//   drawCircle(100,100,50,'white')

  //draw text
  function drawText(text, x,y, color){
      ctx.fillStyle = color;
      ctx.font ="45px fantasy"
      ctx.fillText(text,x,y)
  }

//   drawText("ace", 300,200,"white")

//   Render the game
// render function draws everything on to canvas
function render(){
    // clear the canvas
    drawRect(0,0,canvas.width, canvas.height, "black" )
    
    // draw the net
    drawNet();

    //draw the score
    drawText(user.Score, canvas.width/4, canvas.height/5,"white");
    drawText(computer.Score, 3*canvas.width/4, canvas.height/5,"white");

    //draw the paddles
     drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(computer.x, computer.y, computer.width, computer.height, computer.color);

    //draw ball
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

//control the user paddle
canvas.addEventListener("mousemove", movepaddle);
function movepaddle(evt){
    let rect = canvas.getBoundingClientRect();

    user.y = evt.clientY - rect.top - user.height/2 

}

//collision detection
function collision(b,p){
    b.top = b.y -b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x -b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    if(ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0){
        ball.velocityY = -ball.velocityY;
    }

    let player = (ball.x < canvas.width/2) ? user : computer;
    if(collision(ball,player)) {

    }
}

//update function - update the game logics, movements, scores etc...
function update(){
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    if (ball.y + ball.radius > canvas.height || ball.y-ball.radius < 0){
        ball.velocityY = -ball.velocityY;
    }

}


//initalize game
  function game(){
      update();
      render();
  }

  //loop
  const framePerSecond = 50;
  setInterval(game, 1000/framePerSecond);