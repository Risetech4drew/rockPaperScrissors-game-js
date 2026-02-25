const playerBtns = document.querySelectorAll("button");
const scoreDiv = document.querySelector(".score-div");
const humanOptionSpan = document.querySelector(".human-option");
const computerOptionSpan = document.querySelector(".computer-option");
const humanScoreSpan = document.querySelector(".human-score");
const computerScoreSpan = document.querySelector(".computer-score");
const winnerTag = document.querySelector(".winner");

let computerScore = 0;
let humanScore = 0;

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) return "rock";
  else if (computerChoice === 1) return "paper";
  else return "scissors";
};

const updateHumanScore = () => {
  humanScore += 1;
  humanScoreSpan.textContent = humanScore;
  checkForWinner();
};

const updateComputerScore = () => {
  computerScore += 1;
  computerScoreSpan.textContent = computerScore;
  checkForWinner();
};

const updateBothCompAndHumanScore = () => {
  updateComputerScore();
  updateHumanScore();
  checkForWinner();
};

const checkForWinner = () => {
  if (humanScore === 5) {
    winnerTag.textContent = "Winner player";
  }
  if (computerScore === 5) {
    winnerTag.textContent = "Winner computer";
  }
  if (humanScore === 5 && computerScore === 5) {
    winnerTag.textContent = "Draw!!";
  }
};

const playRound = (humanChoice, computerChoice) => {
  humanOptionSpan.textContent = humanChoice;
  computerOptionSpan.textContent = computerChoice;

  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! paper beats rock");
    updateComputerScore();
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! rock beats scissors");
    updateHumanScore();
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! paper beats rock");
    updateHumanScore();
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! scissors beats paper");
    updateComputerScore();
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! rock beats scissors");
    updateComputerScore();
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! scissors beats paper");
    updateHumanScore();
  } else {
    console.log(`${humanChoice} : ${computerChoice} DRAW!!!`);
    updateBothCompAndHumanScore();
  }
};

playerBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});
