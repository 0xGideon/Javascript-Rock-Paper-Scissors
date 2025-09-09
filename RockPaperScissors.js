//Rock Paper and Scissors game.
//0 beats 2
//1 beats 0
//2 beats 1

const gameArr = ["Rock", "Paper", "Scissors"];
let player = prompt("Enter Rock, Paper, Scissors");

switch(player) {
case "Rock":
case "Paper":
case "Scissors":
let playerIndex = gameArr.lastIndexOf(player);
let computer = Math.random() * 3;
let computerIndex = Math.floor(computer);
console.log(`You choose: ${gameArr[playerIndex]} and Computer choose: ${gameArr[computerIndex]}`);
if ((playerIndex === 0) && (computerIndex ===  2)) {
console.log("You win");
}
else if ((playerIndex === 1) && (computerIndex === 0)) {
console.log("You win");
}
else if ((playerIndex === 2) && (computerIndex === 1)) {
console.log("You win");
}
else if ((playerIndex === 2) && (computerIndex === 0)) {
console.log("You lose, Computer Wins");
}
else if ((playerIndex === 0) && (computerIndex === 1)) {
console.log("You lose, Computer Wins");
}
else if ((playerIndex === 1) && (computerIndex === 2)) {
console.log("You lose, Computer Wins");
}
else {
console.log("Its a tie");
}
break;

default:
console.log("Enter a valid input (Rock, Paper, Scissors)");
} //end project