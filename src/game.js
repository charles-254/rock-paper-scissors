let computerScoreValue = 0;
let playerScoreValue = 0;
let computerScoreElement = document.querySelector(".computer-score");
let playerScoreElement = document.querySelector(".player-score");
let playerChoiceElement = document.querySelector(".player-choice");
let computerChoiceElement = document.querySelector(".computer-choice");

const scissorsElement = document.querySelector(".scissors");
const rockElement = document.querySelector(".rock");
const paperElement = document.querySelector(".paper");

const scissors = "✌️";
const paper = "✋";
const rock = "✊";

let computerChoice = "";
let playerChoice = "";

function checkWinner() {
  let showResults = document.querySelector(".show-results-text");
  if (playerChoice === computerChoice) {
    showResults.textContent = `DRAW`;
  } else if (
    (playerChoice === scissors && computerChoice === paper) ||
    (playerChoice === paper && computerChoice === rock) ||
    (playerChoice === rock && computerChoice === scissors)
  ) {
    showResults.textContent = `PLAYER WINS`;
    playerScoreValue += 1;
    playerScoreElement.textContent = playerScoreValue;
  } else if (
    (playerChoice === scissors && computerChoice === rock) ||
    (playerChoice === paper && computerChoice === scissors) ||
    (playerChoice === rock && computerChoice === paper)
  ) {
    showResults.textContent = `COMPUTER WINS`;
    computerScoreValue += 1;
    computerScoreElement.textContent = computerScoreValue;
  } else {
    console.log("Invalid game options");
  }
}

function computerRandomChoice() {
  let choices = ["✊", "✋", "✌️"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function setChoices(choice) {
  playerChoice = choice;
  playerChoiceElement.textContent = playerChoice;
  computerChoice = computerRandomChoice();
  computerChoiceElement.textContent = computerChoice;
  checkWinner();
}

scissorsElement.addEventListener("click", function () {
  setChoices(scissors);
});
rockElement.addEventListener("click", function () {
  setChoices(rock);
});
paperElement.addEventListener("click", function () {
  setChoices(paper);
});
