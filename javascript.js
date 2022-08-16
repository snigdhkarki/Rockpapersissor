

let win = 0;
for(let i = 1;i<=5;i++)
{
    let game2= prompt("enter rock paper or sissor");
let game1 = game2.toLowerCase();
let hand = ['rock','paper','sissor'];
let game = hand[Math.floor(Math.random()*hand.length)];


if (game1 === game)
{
    console.log("Draw");
}
else if(game1 == 'rock'){
    if(game == 'paper')
    {
        console.log("i win paper wins rock ");
        win++;

    }
    else
    {
        console.log("You win rock beats sissor");
    }
    }
else if(game1 == 'paper'){
    if(game == 'sissor')    
    {
        console.log("i win sissor wins paper");
        win++;
    }
    else
    {
        console.log("u win paper beats rock");
    }
    }
else{
    if(game == 'rock') 
    {
        console.log("i win rock wins sissor");
        win++;
    }
    else    
    {
        console.log("u win sissor win paper");
    }

    }
   
}

console.log("i win" + win + "times");
