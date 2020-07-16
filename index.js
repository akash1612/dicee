var randomNumber1 = Math.floor(Math.random()*6+1);
var src1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").src=src1;

var randomNumber2 = Math.floor(Math.random()*6+1);
var src1="images/dice"+randomNumber2+".png";
document.querySelector(".img2").src=src1;

head=document.querySelector(".container h1")

if (randomNumber1>randomNumber2){
    head.innerHTML="&#128681 Player 1 wins!"
}

else if (randomNumber1<randomNumber2){
    head.innerHTML="Player 2 wins!&#128681"
}

else{
    head.innerHTML="DRAW!!"
}