var ball;
var position, database;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var d;
function preload() {
    d=loadImage("js/download.jpg");
    b=loadImage("js/a.png");
  }

function setup(){
    createCanvas(1200,800);

    database=firebase.database();
    console.log(database);

    game=new Game();
    game.getState();
    game.start();
    
}


function draw(){
    background(d);
    image(b,200,0);
    if(playerCount===4){
        game.update(1);
    }

    if(gameState===1){

        clear();
        game.play();
    }
}






   




