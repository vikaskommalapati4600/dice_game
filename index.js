var randomnum=Math.floor(Math.random() * 6) + 1;
var randomnumm=Math.floor(Math.random() * 6) + 1;

if(randomnum === 1){
  document.querySelector(".img1").setAttribute("src","dice1.png");
}
else if(randomnum === 2){
  document.querySelector(".img1").setAttribute("src","dice2.png");
}else if(randomnum === 3){
  document.querySelector(".img1").setAttribute("src","dice3.png");
}else if(randomnum === 4){
  document.querySelector(".img1").setAttribute("src","dice4.png");
}else if(randomnum === 5){
  document.querySelector(".img1").setAttribute("src","dice5.png");
}else if(randomnum === 6){
  document.querySelector(".img1").setAttribute("src","dice6.png");
}

if(randomnumm === 1){
  document.querySelector(".img2").setAttribute("src","dice1.png");
}
else if(randomnumm === 2){
  document.querySelector(".img2").setAttribute("src","dice2.png");
}else if(randomnumm === 3){
  document.querySelector(".img2").setAttribute("src","dice3.png");
}else if(randomnumm === 4){
  document.querySelector(".img2").setAttribute("src","dice4.png");
}else if(randomnumm === 5){
  document.querySelector(".img2").setAttribute("src","dice5.png");
}else if(randomnumm === 6){
  document.querySelector(".img2").setAttribute("src","dice6.png");
}

if(randomnum>randomnumm){
  document.querySelector("h1").innerHTML="Player 1 won🚩";
}
else if(randomnum<randomnumm){
  document.querySelector("h1").innerHTML="🚩Player 2 won";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
