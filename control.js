let d;

document.addEventListener("keydown",direction);

function direction(event){
    if(event.keyCode === 37 && d !== "RIGHT"){
        d = "LEFT";
    }
    if(event.keyCode === 38 && d !== "DOWN"){
        d = "UP";
    }
    if(event.keyCode === 39 && d !== "LEFT"){
        d = "RIGHT";
    }
    if(event.keyCode === 40 && d !== "UP"){
        d = "DOWN";
    }
};
