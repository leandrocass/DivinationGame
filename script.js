const tryButton = document.querySelector('.try-button');
const playAgain = document.querySelector('.play-again-button');
const firstScreen = document.querySelector('.screen1');
const secondScreen = document.querySelector('.screen2');
const textSecondScreen = document.querySelector('.text-screen-2');
const inputNumber = document.querySelector('#numberGuessed');

let randomNumber;
let attempts = 1;
setRandomNumber();

tryButton.addEventListener('click', handleClick);
playAgain.addEventListener('click', handleResetClick);

function handleClick(event) {
  event.preventDefault();
  if (randomNumber == inputNumber.value) {
    activeToggle();
    const attemptsText = attempts > 1 ? 'tentativas' : 'tentativa';
    textSecondScreen.innerText = `Acertou em ${attempts} ${attemptsText}!`;
  }
  inputNumber.value = '';
  attempts++;
}

function handleResetClick() {
  activeToggle();
  attempts = 1;
  setRandomNumber();
}

function setRandomNumber() {
  randomNumber = Math.round(Math.random() * 10);
}

function activeToggle() {
  firstScreen.classList.toggle('hide');
  secondScreen.classList.toggle('hide');
}
