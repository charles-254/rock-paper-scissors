let computerScoreValue = 0;
let playerScoreValue = 0;
let computerScoreElement = document.querySelector(".computer-score");
let playerScoreElement = document.querySelector(".player-score");
let playerChoiceElement = document.querySelector(".player-choice")
let computerChoiceElement = document.querySelector(".computer-choice")

const scissorsElement = document.querySelector(".scissors")
const rockElement = document.querySelector(".rock")
const paperElement = document.querySelector(".paper")

const scissors = "✌️";
const paper = "✋";
const rock = "✊";

let computerChoice = rock
let playerChoice = ""

function checkWinner(){
  let showResults = document.querySelector(".show-results-text")
  if (playerChoice === computerChoice){
    showResults.textContent = `DRAW`

  }else if (playerChoice === scissors && computerChoice === paper){
    showResults.textContent = `PLAYER WINS`
    playerScoreValue += 1
    playerScoreElement.textContent = playerScoreValue

  }else if (playerChoice === scissors && computerChoice === rock){
    showResults.textContent = `COMPUTER WINS`
    computerScoreValue += 1
    computerScoreElement.textContent = computerScoreValue
    
  }else if (playerChoice === paper && computerChoice === rock){
    showResults.textContent = `PLAYER WINS`
    playerScoreValue += 1
    playerScoreElement.textContent = playerScoreValue

  }else if (playerChoice === paper && computerChoice === scissors){
    showResults.textContent = `COMPUTER WINS`
    computerScoreValue += 1
    computerScoreElement.textContent = computerScoreValue

  }else if (playerChoice === rock && computerChoice === paper){
    showResults.textContent = `COMPUTER WINS`
    computerScoreValue += 1
    computerScoreElement.textContent = computerScoreValue

  }else if (playerChoice === rock && computerChoice === scissors){
    showResults.textContent = `PLAYER WINS`
    playerScoreValue += 1
    playerScoreElement.textContent = playerScoreValue

  }else {
    console.log("Invalid game options")
  }
    
}


scissorsElement.addEventListener("click", function (){
  playerChoice = scissors
  playerChoiceElement.textContent = scissors
  checkWinner()
})
rockElement.addEventListener("click", function (){
  playerChoice = rock
  playerChoiceElement.textContent = rock
  checkWinner()
})
paperElement.addEventListener("click", function (){
  playerChoice = paper
  playerChoiceElement.textContent = paper
  checkWinner()
})

