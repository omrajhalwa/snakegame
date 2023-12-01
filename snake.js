

//board

let blockSize=25;
let rows=20;
let cols=20;
let board;
let context;

//snake head

let snakeX=blockSize*5;
let snakeY=blockSize*5;

//food
let foodX;
let foodY;
let velocityX=0;
let velocityY=0;
let snakeBody=[];
let gameOver=false;
let val=0;

window.onload=function(){
    board=document.getElementById("board");
    board.height=rows*blockSize;
    board.width=cols*blockSize;
    //used to drawing on the board
    context=board.getContext("2d");
placeFood();

document.addEventListener("keyup",changeDirection);
  //  update();
  setInterval(update,1000/10);//100 milliseconds;
}


function update(){

    if(gameOver){
       
        return;
    }
    context.fillStyle="blue";
    context.fillRect(0,0,board.width,board.height);

if(snakeX==foodX&&snakeY==foodY){
    snakeBody.push([foodX,foodY]);
    placeFood();
}



for(let i=snakeBody.length-1;i>0;i--){
    snakeBody[i]=snakeBody[i-1];
}

if(snakeBody.length){
    snakeBody[0]=[snakeX,snakeY];
}
    if(snakeBody.length%16==0)context.fillStyle="lime";
    else if(snakeBody.length%16==1)context.fillStyle="purple";
    else if(snakeBody.length%16==2)context.fillStyle="yellow";
    else if(snakeBody.length%16==3)context.fillStyle="#ffbf80";
    else if(snakeBody.length%16==4)context.fillStyle="#ff6699";
    else if(snakeBody.length%16==5)context.fillStyle="lime";
    else if(snakeBody.length%16==6)context.fillStyle="yellow";
    else if(snakeBody.length%16==7)context.fillStyle="lime";
    else if(snakeBody.length%16==8)context.fillStyle="#000099";
    else if(snakeBody.length%16==9)context.fillStyle=" #ff00ff";
    else if(snakeBody.length%16==10)context.fillStyle="#80ffff";
    else if(snakeBody.length%16==11)context.fillStyle="#33cc33";
    else if(snakeBody.length%16==12)context.fillStyle="#ff6699";
    else if(snakeBody.length%16==13)context.fillStyle="#ffbf80";
    else if(snakeBody.length%16==14)context.fillStyle="yellow";
    else if(snakeBody.length%16==15)context.fillStyle="pink";
   











    
    snakeX+=velocityX*blockSize;
    snakeY+=velocityY*blockSize;
    context.fillRect(snakeX,snakeY,blockSize,blockSize);
    for(let i=0;i<snakeBody.length;i++){
        context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
    }

    context.fillStyle="red";
    context.fillRect(foodX,foodY,blockSize,blockSize);

    if(snakeX<0||snakeY<0||snakeX>cols*blockSize||snakeY>rows*blockSize){
        gameOver=true;
        alert("Game Over");
    }

    for(let i=0;i<snakeBody.length;i++){
        if(snakeX==snakeBody[i][0]&&snakeY==snakeBody[i][1]){
            gameOver=true;
            alert("Game Over");
        }
    }
}

function changeDirection(e){

    if(e.code=="ArrowUp"&&velocityY!=1){
        velocityX=0;
        velocityY=-1;
    }
    else if(e.code=="ArrowDown"&&velocityY!=-1){
        velocityX=0;
        velocityY=1;
    }
    else if(e.code=="ArrowLeft"&&velocityX!=1){
        velocityX=-1;
        velocityY=0;
    }
    else if(e.code=="ArrowRight"&&velocityX!=-1){
        velocityX=1;
        velocityY=0;
    }
}

function placeFood(){
    foodX=Math.floor(Math.random()*cols)*blockSize;
    foodY=Math.floor(Math.random()*rows)*blockSize;
}
