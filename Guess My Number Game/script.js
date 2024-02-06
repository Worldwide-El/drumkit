'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// eventListener for the click of the 'again' button...
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage() = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});

// eventListener for the Click of the 'check' button...
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When no input...
  if (!guess) {
    displayMessage('⛔ No Number!');
    console.log(`My Number: ${randomNumber}, Your Guess: ${guess}`);

    // When guess is wrong...
  } else if (guess !== randomNumber) {
    if (score > 1) {
      guess > randomNumber
        ? displayMessage('Go Lower!')
        : displayMessage('Go Higher!');
      score--;
      document.querySelector('.score').textContent = score;
      console.log(`My Number: ${randomNumber}, Your Guess: ${guess}`);
    } else {
      displayMessage('💥 You lose the game!');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > randomNumber) {
    //   if (score > 1) {
    //     displayMessage() = 'Go Lower!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     console.log(`My Number: ${randomNumber}, Your Guess: ${guess}`);
    //   } else {
    //     displayMessage() = '💥 You lose the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   // When guess is too low...
    // } else if (guess < randomNumber) {
    //   if (score > 1) {
    //     displayMessage() = 'Go Higher!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     console.log(`My Number: ${randomNumber}, Your Guess: ${guess}`);
    //   } else {
    //     displayMessage() = '💥 You lose the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    // When guess is correct!...
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct Guess!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    console.log(`My Number: ${randomNumber}, Your Guess: ${guess}`);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    console.log(displayMessage('Start Guessing'));
  }
});
