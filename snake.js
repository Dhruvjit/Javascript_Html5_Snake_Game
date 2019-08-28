// draw everything to canvas
function draw(){
    ctx.drawImage(ground,0,0);
    for(let i=0; i<snake.length; i++){
        ctx.fillStyle = (i==0)?"green":"white";
        // draws mentioned color filled rectangle
        ctx.fillRect(snake[i].x,snake[i].y,box,box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    // place food on random direction on the canvas
    ctx.drawImage(foodImg,food.x,food.y);

    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // which direction
    if(d==="LEFT") snakeX -= box;
    if(d==="UP") snakeY -= box;
    if(d==="RIGHT") snakeX += box;
    if(d==="DOWN") snakeY += box;

    // if snake has found the food
    if(snakeX === food.x && snakeY === food.y){
        score++;
        food = {
            // 17 boxes and 15 boxes are the limit of inside canvas board
            x: Math.floor(Math.random()*17+1) * box,
            y: Math.floor(Math.random()*15+3) * box
        };
        // we don't remove the tail, but rather add the new head
        // this happens automatically below 'snake.unshift(newHead)'
    }else{
        // remove the tail
        snake.pop();
    }

    // add new head
    let newHead = {
        x : snakeX,
        y: snakeY
    };
    snake.unshift(newHead);

    // call gameover function in another class to check if snake has not hit the wall
    gameOver(snakeX,snakeY,newHead);

    // fill the score
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
}


