var random1=Math.ceil(Math.random()*6);
var random2=Math.ceil(Math.random()*6);

// console.log(random1);
// console.log(random2);

document.querySelector('h1').style.fontSize="5rem";
if(random1 > random2){
    document.querySelector('h1').textContent = "🚩Player 1 Wins!";
}
else if(random1 < random2){
    document.querySelector('h1').textContent = "Player 2 Wins!🚩";
}
else
    document.querySelector('h1').textContent = "❌Draw";

document.querySelector(".img1").setAttribute("src","images/dice"+ random1 +".png");
document.querySelector(".img2").setAttribute("src","images/dice"+ random2 +".png");
