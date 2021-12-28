console.log('helloace')
// grab a reference of our "canvas" using its id
const canvas = document.getElementById('pong');
/* get a "context". Without "context", we can't draw on canvas */
const ctx = canvas.getContext('2d');

//create user object
//create paddle
const user= {
    x: 0,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "White",
    Score: 0,
}

//create the computer paddle
const comp = {
    x: canvas.width -10
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "White",
    Score: 0,
}

//create the ball
const ball = {
    x : canvas.width /2,
    y: canvas.height /2,
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

//creating drawing my cicrle for the ball
function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    // syntax --> arc(x, y, radius, startAngle, endAngle, antiClockwise_or_not)
    ctx.arc(x, y, radius, 0, Math.PI * 2, false); // π * 2 Radians = 360 degrees
    ctx.closePath();
    ctx.fill();
  }
  // calling function with paramaterss to draw my ball
  drawCircle(100,100,50,'white')

  //draw text
  function drawText(text, x,y, color){
      ctx.fillStyle = color;
      ctx.font ="45px fantasy"
      ctx.fillText(text,x,y)
  }

  drawText("ace", 300,200,"white")

//   Render function
// render function draws everything on to canvas