function Ball(radius,color) {
    var ball = this;
    ball.r = radius || 10;// ball of radius
    ball.c = color || "red";//ball of red
    ball.x = 0;//center x
    ball.y = 0;//center y
    ball.m = 0;//mass
    ball.vx = 0;//veloctiy x
    ball.vy = 0;//veloctiy y
    ball.context = null;//drawing context of ball

}
Ball.prototype.draw = function () {
    //base
    var ball = this;
    //check context
    if(!ball.context){return}
    //draw
    ball.context.beginPath();
    ball.context.fillStyle = ball.c;
    ball.context.arc(ball.x, ball.y, ball.r, Math.PI * 0, Math.PI * 2);
    //ball.context.rect(ball.x, ball.y, ball.r, ball.r); //rectangle draw
    
    ball.context.fill();
    
    
}