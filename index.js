var randomNumber1 =Math.floor(Math.random()*6 )+ 1;
var randomImg="dice" +randomNumber1 +".png";
var randomImgsrc="images/" + randomImg;
var diceImg1=document.querySelectorAll("img")[0];
diceImg1.setAttribute("src",randomImgsrc);

var randomNumber2 =Math.floor(Math.random()*6 )+ 1;
var randomImg2="dice" +randomNumber2 +".png";
var randomImgsrc2="images/" + randomImg2;
var diceImg2=document.querySelectorAll("img")[1];
diceImg2.setAttribute("src",randomImgsrc2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="player 2 wins🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!"
}