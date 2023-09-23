let { log } = console;
let count = 0;
let playerScore = 0;
let computerScore = 0;
let message;
let displaySelection;

let winner = document.querySelector('#winner');
let selection = document.querySelector('#selection');

let computer = document.querySelector('.computer');
let player = document.querySelector('.player');

let buttons = document.querySelectorAll('div button');
let playBtn = document.querySelector('#play');
playBtn.disabled = true;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  let choice = '';
  if (random === 0) {
    choice = 'rock';
  } else if (random === 1) {
    choice = 'paper';
  } else {
    choice = 'scissors';
  }
  return choice;
}

function startPlay(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    displaySelection = `Computer selected ${computerSelection} and you selected ${playerSelection}`;
    return `Its a TIE!`;
  } else if (playerSelection === 'rock' && computerSelection == 'paper') {
    displaySelection = `Computer selected ${computerSelection} and you selected ${playerSelection}`;
    return (computerScore += 1);
  } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
    displaySelection = `Computer selected ${computerSelection} and you selected ${playerSelection}`;
    return (playerScore += 1);
  } else if (playerSelection === 'paper' && computerSelection == 'rock') {
    displaySelection = `Computer selected ${computerSelection} and you selected ${playerSelection}`;
    return (playerScore += 1);
  } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
    displaySelection = `Computer selected ${computerSelection} and you selected ${playerSelection}`;
    return (computerScore += 1);
  } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
    displaySelection = `Computer selected ${computerSelection} and you selected ${playerSelection}`;
    return (computerScore += 1);
  } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
    displaySelection = `Computer selected ${computerSelection} and you selected ${playerSelection}`;
    return (playerScore += 1);
  }
}

function game(playerChoice) {
  startPlay(playerChoice, getComputerChoice());

  if (computerScore > playerScore) {
    message = `Computer wins with ${computerScore} points`;
  } else if (computerScore === playerScore) {
    message = `It's a tie with ${computerScore} point`;
  } else {
    message = `You win with ${playerScore} points`;
  }
  selection.textContent = displaySelection;
  computer.textContent = `Computer Score ${computerScore}`;
  player.textContent = `Player Score ${playerScore}`;
  return message;
}

buttons.forEach((button) => {
  button.onclick = () => {
    count++;
    if (count < 5) {
      game(button.value);
    } else {
      playBtn.disabled = false;
      selection.textContent = displaySelection;
      winner.textContent = message;
      disableAllBtns();
    }
  };
});

playBtn.onclick = () => {
  console.log(count);
  buttons.forEach((button) => {
    selection.textContent = '';
    winner.textContent = '';
    count = 0;
    playerScore = 0;
    computerScore = 0;
    button.disabled = false;
    playBtn.disabled = true;
  });
};

function disableAllBtns() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
