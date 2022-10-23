window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var bounding = canvas.getBoundingClientRect();
    


    //spece
    var balls = 5;
    var ballsArr = [];
    var currentBall = null;
    //create ball
    for (let i = 0; i < balls; i++) {
        var redius = getRandomInt(25, 50);
        var rndcolorBall = createRandomRGBColor();
        var color = `rgb(${rndcolorBall.r},${rndcolorBall.g},${rndcolorBall.b})`
        
        var ball = new Ball(redius, color);
        ball.x = getRandomInt(redius, canvas.width - redius);
        ball.y = getRandomInt(redius, canvas.height - redius);
        ball.context = context;


        ballsArr.push(ball);
 
        
    }

    ballDraw();

    function ballDraw() {

   // Clear canvas
   context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < ballsArr.length; i++) {
        ballsArr[i].draw();
        
    }
}

function isHitOnBall(mx, my){
    
    for(var i = balls - 1; i >= 0; i--){
      if(Math.sqrt(Math.pow((mx - ballsArr[i].x) , 2) + Math.pow((my - ballsArr[i].y) , 2)) < ballsArr[i].r){
        currentBall = ballsArr[i];
        break;
      }
    }
  }
  // Mouse Event Handlers
    canvas.addEventListener('mousedown', (e) => {
        console.log("mousedown")
        var mouseDownX = e.clientX - bounding.left;
        var mouseDownY = e.clientY - bounding.top;
        isHitOnBall(mouseDownX,mouseDownY)
    })
    canvas.addEventListener('mousemove', (e) => {
        var mouseMoveX = e.clientX - bounding.left;
        var mouseMoveY = e.clientY - bounding.top;
        if (currentBall) {
            currentBall.x = mouseMoveX;
            currentBall.y = mouseMoveY;
            ballDraw();
        }
       
    })
    canvas.addEventListener('mouseup', (e) => {
        currentBall = null; 
    })
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function createRandomRGBColor() {
    var red = getRandomInt(0, 257);
    var green = getRandomInt(0, 257);
    var blue = getRandomInt(0, 257);
    return {r: red, g: green, b: blue};
  }