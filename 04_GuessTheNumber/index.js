'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


// Display Message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Display Score Function
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
};


// Function: guess 2 digits only
document.querySelector('.guess').addEventListener('input', (e) => {
    if (e.target.value.length > 2 ) {
      e.target.value = e.target.value.slice(0, 2);
  }
});



// Main function
document.querySelector('.check').addEventListener('click', function (){
  let guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');
  } 
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } 

  else if (guess !== secretNumber) {
    document.querySelector('.guess').value = '';
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score)
    } 
    else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});


// Restart the Game
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score)
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});