'use strict';
const guessInput = document.querySelector('.guess');
const again = document.querySelector('.again');
const btn = document.querySelector('.check');
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = (selector, msg) => {
  document.querySelector(selector).textContent = msg;
};

btn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  // when there is no input
  if (score > 1) {
    if (!guess) {
      displayMessage('.message', 'No Number !! ⛔');
      //when the player wins
    } else if (guess === secretNumber) {
      displayMessage('.message', 'Correct Number! 🎉');
      displayMessage('.number', secretNumber);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        displayMessage('.highscore', highScore);
      }
    } else if (guess !== secretNumber) {
      displayMessage(
        '.message',
        guess > secretNumber ? 'Too High!!' : 'Too Low!!'
      );
      score--;
      displayMessage('.score', score);
    }
  } else {
    displayMessage('.message', 'Game Over!!');
    displayMessage('.highscore', highScore);
  }
});

again.addEventListener('click', _ => {
  // location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('.score', score);
  displayMessage('.message', 'Start guessing...');
  displayMessage('.number', '?');
  guessInput.value = '';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
