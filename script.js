let { log } = console;
let playerChoice = prompt('Enter your Pick').toLowerCase();
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
  log(choice);
  log(playerChoice);
  return choice;
}

function startPlay(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Its a TIE!`;
  } else if (playerSelection === 'rock' && computerSelection == 'paper') {
    return `You Lose! Paper beats Rock`;
  } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
    return `You Win! Rock beats Scissors!`;
  } else if (playerSelection === 'paper' && computerSelection == 'rock') {
    return `You Win! Paper beats Rock`;
  } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
    return `You Lose! Scissors beats Paper`;
  } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
    return `You Lose! Rock beats Scissors!`;
  } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
    return `You Win! Scissors beats Paper`;
  }
}

let x = startPlay(playerChoice, getComputerChoice());
log(x);
