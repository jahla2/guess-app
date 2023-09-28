'use strict';
//DOM Manipulation App
/*
console.log(document.querySelector('.message').textContent);
//Modify html content
document.querySelector('.message').textContent = 'Correcr Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 132;

//Read and set value property
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//Event Listener
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Message setter function
const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Check if the input has no value or 0
  if (!guess) {
    // document.querySelector('.message').textContent = '🚨 No Number!';
    displayMessage('🚨 No Number!');
    //When player Wins
  } else if (guess === secretNumber) {
    // console.log((document.querySelector('.message').textContent = '🚩 Correcr Number!'));
    console.log(displayMessage('🚩 Correcr Number!'));
    document.querySelector('.number').textContent = secretNumber;

    //Read Style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Chekc if currentscore is > than highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '✈️ Too high!' : '📉Too Low!';
      displayMessage(guess > secretNumber ? '✈️ Too high!' : '📉Too Low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😵‍💫 You lost the game!';
      displayMessage('😵‍💫 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#e32f2d';
    }
  }

  //Unrefacroted code sa 2 same functionality
  //When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '✈️ Too high!';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😵‍💫 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low!';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😵‍💫 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
