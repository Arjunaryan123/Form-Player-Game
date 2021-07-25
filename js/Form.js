class Form{
    constructor(){

    }
    display(){
        var title=createElement("H2");
        title.html("My Car Racing Game");
        title.position(130,0);

        var input=createInput("name");
        input.position(130,160);

        var button=createButton("play");
        button.position(250,200);
        var Greeting=createElement("H3");

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);

            Greeting.html("Hello "+name);
            Greeting.position(130,160);
        })
    }
}