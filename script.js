function gamePress() {   
  let newGame = prompt("Do you want to play?๐ฒ Yes or No").trim().toLowerCase();
  // newGame = game.trim(); 
  // newGame = newGame.toLowerCase(); 
  alert(newGame);
if (newGame == 'yes') { 
  alert("ะK, lets play!") + playRound();
} else if (newGame == 'no') { 
  alert("Ok, bye") + exit();
} else if (newGame == null) {exit();
} else { 
  alert("Please enter yes or no") + gamePress();}; 
}
 
function playRound(playerSelection,computerSelection) {
  function playerSelection() {
      let player = prompt("Please enter scissorsโ๏ธ, paper๐ or rock๐").trim().toLowerCase();
if (player == "scissors") { 
  alert("You picked scissors!โ๏ธ");
} else if (player == "paper") {
  alert("You picked paper!๐");
} else if (player == "rock") { 
  alert("You picked rock!๐");
} else if (player == null) {exit();
} else {alert("Wrong entry, please try again") + playerSelection();
};
  return player; 

  }
playerSelection = playerSelection();

function computerSelection() {
let computer = Math.floor(Math.random()*3+1);
if (computer == 1) { alert("Computer picked scisssors!โ๏ธ");
} else if (computer == 2 ) { alert("Computer picked paper!๐");
} else { alert("Computer picked rock!๐");
}
  return computer; 
  
}

computerSelection = computerSelection(); 
if (playerSelection == 1 && computerSelection == 1) { 
  alert("It's a tie!!");
}  else if (playerSelection == 2 && computerSelection == 2) { 
  alert("It's a tie!!");
}  else if (playerSelection == 3 && computerSelection == 3) {
  alert("It's a tie!!");
}  else if (playerSelection == 1 && computerSelection == 2) {
  alert("You won!!");
}  else if (playerSelection == 1 && computerSelection == 3) {
  alert("You lost:(");
}  else if (playerSelection == 2 && computerSelection == 3) {
  alert("You won!");
}  else if (playerSelection == 3 && computerSelection == 2) {
  alert("You lost:(");
}  else if (playerSelection == 3 && computerSelection == 1) {
  alert("You won!!");
}  else if (playerSelection == 2 && computerSelection == 1) {
  alert("You lost:(");
} else{}
   
  }
gamePress();
playRound();



function play5(){

  let i=1;
  while (i<=5){
      alert(`Game ${i}`);
      playRound();
      i++;
  }

}
play5();
