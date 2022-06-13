/*
Create a dice roll game
- page with dice image
drop down menu for number choice + submit


- chose a number  - 1 to 6
- chose an amount to bet (start with 100)
- roll the dice
- is it a win, lose, error?
- update "accoutn balance" + numRolls
*/

let numRolls = 0;
document.getElementById("numRolls").innerHTML = numRolls;

let accountBalance = 100;
document.getElementById("accountBalance").innerHTML = accountBalance;

var guess = window.prompt("Enter your guess: ");

const guessNumber = Number(guess);

const diceRollResult = getRandomInt(1, 6);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log("Dice rolled: " + diceRollResult);
console.log("You guessed: " + guessNumber);

//convert guess to number

if (guessNumber === diceRollResult) {
  console.log("you win!");
  numRolls = numRolls + 1;
} else if (guessNumber != diceRollResult) {
  console.log("you lose!");
  numRolls = numRolls + 1;
} else {
  console.log("error - try again!");
}
