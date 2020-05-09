var rand = Math.floor(Math.random()*6)+1
var diceImage = "images/"+"dice"+rand+".png";
document.querySelector(".img1").setAttribute("src", diceImage)

var rand1 = Math.floor(Math.random()*6)+1
var diceImage1 = "images/"+"dice"+rand1+".png";
document.querySelector(".img2").setAttribute("src", diceImage1)

if(rand1>rand){
    document.querySelector("h1").innerHTML = "Player 2 wins"
}else{
    document.querySelector("h1").innerHTML = "Player 1 wins"
}