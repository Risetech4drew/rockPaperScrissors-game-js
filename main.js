const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) return "rock";
  else if (computerChoice === 1) return "paper";
  else return "scissors";
};

const getHumanChoice = () => {
  let humanChoice = prompt("enter choice: rock, paper or scissors: ");
  return humanChoice;
};

const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! paper beats rock");
      computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! rock beats scissors");
      humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! paper beats rock");
      humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! scissors beats paper");
      computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! rock beats scissors");
      computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! scissors beats paper");
      humanScore += 1;
    } else {
      computerScore += 1;
      humanScore += 1;
    }
  };

  if (humanScore > computerScore) {
    console.log("You've won!");
  } else if (humanScore < computerScore) {
    console.log("You've lost!");
  } else {
    console.log("Draw!!");
  }

  console.log("Your score: " + humanScore);
  console.log("Computers score: " + computerScore);
};

playGame();
