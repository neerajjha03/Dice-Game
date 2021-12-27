var randomNumber=Math.floor(Math.random()*6+1);
var randomDiceImage="images/" + "dice" + randomNumber+".png";
var randomSelect=document.querySelectorAll("img")[0];
randomSelect.setAttribute("src", randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice" + randomNumber2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 win";
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 win 🚩";

}
else{
    document.querySelector("h1").innerHTML="Draw!";
}