function gamePress() {   
    let game = prompt("Do you want to play?🎲 Yes or No");
    newGame = game.trim(); 
    newGame = newGame.toLowerCase(); 
    alert(newGame);
if (newGame == 'yes') { 
    alert("ОK, lets play!") + playRound();
} else if (newGame == 'no') { 
    alert("Ok, bye") + exit();
} else if (newGame == null) {exit();
} else { 
    alert("Please enter yes or no") + gamePress();}; 
}
   
function playRound(playerSelection,computerSelection) {
    function playerSelection() {
        let player = prompt("Please enter a number 1(scissors✂️), 2(paper📜) or 3(rock💎)");
if (player == 1) { 
    alert("You picked scissors!✂️");
} else if (player == 2) {
    alert("You picked paper!📜");
} else if (player == 3) { 
    alert("You picked rock!💎");
} else if (player == null) {exit();
} else {alert("Wrong, enter a number from 1 to 3") + playerSelection();
};
    return player; 

    }
playerSelection = playerSelection();

function computerSelection() {
 let computer = Math.floor(Math.random()*3+1);
 if (computer == 1) { alert("Computer picked scisssors!✂️");
} else if (computer == 2 ) { alert("Computer picked paper!📜");
} else { alert("Computer picked rock!💎");
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
        alert(`Game ${1}`);
        playRound();
        i++;
    }

}
play5();
