// const collision = (head,array) => {
//     for(let i=0; i<array.length; i++){
//         if(head.x === array[i].x && head.y === array[i].y){
//             return true;
//         }
//     }
//     return false;
// };

const gameOver = (snakeX,snakeY,newHead) =>{
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box){
        clearInterval(game);
    }
};
