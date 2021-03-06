class Form{
    constructor(){
        this.input=createInput("PLAYER'S NAME");
        
        this.button=createButton('PLAY');
        
        this.greeting=createElement('h3')
    }
    hide(){

        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
   var title=createElement('h2');
   title.html("HURDLE RACE GAME");
   title.position(800,0);
   this.input.position(400,360);
   this.button.position(400,400);
   

   this.button.mousePressed(()=>{   
       this.input.hide();
       this.button.hide();
       //b.hide();
       //background("white");
       player.name=this.input.value();

       playerCount+=1;
       player.index=playerCount;

       player.update();
       player.updateCount(playerCount);

       this.greeting.html("Hello!! "+player.name);
       this.greeting.position(400,360);
   })
   
    }

}