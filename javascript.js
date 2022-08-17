let comp = 0;
let player = 0;
let para = document.querySelector('.par');
let ROCK = document.querySelector('.Rock');
ROCK.addEventListener('click',function(){let game1='rock';

let hand = ['rock','paper','sissor'];
let game = hand[Math.floor(Math.random()*hand.length)];


if (game1 === game)
{
    let text = document.createTextNode("Draw");
    para.appendChild(text);
}
else if(game1 == 'rock'){
    if(game == 'paper')
    {
        let text = document.createTextNode("i win paper wins rock ");
    para.appendChild(text);
        
        comp++;
        

    }
    else
    {
        let text = document.createTextNode("You win rock beats sissor");
    para.appendChild(text);
        
        player++;
    }
    }
else if(game1 == 'paper'){
    if(game == 'sissor')    
    {
        let text = document.createTextNode("i win sissor wins paper");
    para.appendChild(text);
        
        comp++;
        
    }
    else
    {
        let text = document.createTextNode("u win paper beats rock");
    para.appendChild(text);
        
        player++;
    }
    }
else{
    if(game == 'rock') 
    {
        let text = document.createTextNode("i win rock wins sissor");
    para.appendChild(text);
        
        comp++;
        
    }
    else    
    {
        let text = document.createTextNode("u win sissor win paper");
    para.appendChild(text);
        
        player++;
    }

    }
    if(player==5)
    {
        alert("you win");
    }
    if(comp == 5)
    {
        alert("you lose");

    }
   



});

let PAPER = document.querySelector('.Paper');
PAPER.addEventListener('click',function(){let game1='paper';

let hand = ['rock','paper','sissor'];
let game = hand[Math.floor(Math.random()*hand.length)];


if (game1 === game)
{
    let text = document.createTextNode("Draw");
    para.appendChild(text);
}
else if(game1 == 'rock'){
    if(game == 'paper')
    {
        let text = document.createTextNode("i win paper wins rock ");
    para.appendChild(text);
        
        comp++;
        

    }
    else
    {
        let text = document.createTextNode("You win rock beats sissor");
    para.appendChild(text);
        
        player++;
    }
    }
else if(game1 == 'paper'){
    if(game == 'sissor')    
    {
        let text = document.createTextNode("i win sissor wins paper");
    para.appendChild(text);
        
        comp++;
        
    }
    else
    {
        let text = document.createTextNode("u win paper beats rock");
    para.appendChild(text);
        
        player++;
    }
    }
else{
    if(game == 'rock') 
    {
        let text = document.createTextNode("i win rock wins sissor");
    para.appendChild(text);
        
        comp++;
        
    }
    else    
    {
        let text = document.createTextNode("u win sissor win paper");
    para.appendChild(text);
        
        player++;
    }

    }
    if(player==5)
    {
        alert("you win");
    }
    if(comp == 5)
    {
        alert("you lose");

    }
   



});

let SISSOR = document.querySelector('.Sissor');
SISSOR.addEventListener('click',function(){let game1='sissor';

let hand = ['rock','paper','sissor'];
let game = hand[Math.floor(Math.random()*hand.length)];


if (game1 === game)
{
    let text = document.createTextNode("Draw");
    para.appendChild(text);
}
else if(game1 == 'rock'){
    if(game == 'paper')
    {
        let text = document.createTextNode("i win paper wins rock ");
    para.appendChild(text);
        
        comp++;
        

    }
    else
    {
        let text = document.createTextNode("You win rock beats sissor");
    para.appendChild(text);
        
        player++;
    }
    }
else if(game1 == 'paper'){
    if(game == 'sissor')    
    {
        let text = document.createTextNode("i win sissor wins paper");
    para.appendChild(text);
        
        comp++;
        
    }
    else
    {
        let text = document.createTextNode("u win paper beats rock");
    para.appendChild(text);
        
        player++;
    }
    }
else{
    if(game == 'rock') 
    {
        let text = document.createTextNode("i win rock wins sissor");
    para.appendChild(text);
        
        comp++;
        
    }
    else    
    {
        let text = document.createTextNode("u win sissor win paper");
    para.appendChild(text);
        
        player++;
    }

    }
    if(player==5)
    {
        alert("you win");
    }
    if(comp == 5)
    {
        alert("you lose");

    }
   



});

