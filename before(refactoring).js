'use strict';
//Defining Number to be gussed
var valueToGuess = Math.floor(Math.random() * 20) + 1;
console.log(valueToGuess);
var highScore = document.querySelector('.highscore').textContent;
var score = 10;
// Adding an event Listner to check button
document.querySelector('.check').addEventListener('click', function () {
  //Taking value input by user
  var inputValue = Number(document.querySelector('.guess').value);
  console.log(inputValue);

  //Adding Functionality
  if (inputValue < 1 || inputValue > 20) {
    document.querySelector('.message').textContent = 'enter a valid number';
    message('enter a valid number');
  } else {
    //checking if the game is over
    if (score === 1) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'YOU LOST!';
      document.querySelector('body').style.backgroundColor = '#a15d5d';
      document.querySelector('.number').style.width = '20rem';
      document.querySelector('.number').textContent = valueToGuess;
      document.querySelector('.again').textContent = 'REPLAY!';
      document.querySelector('.heading').textContent = 'GAME OVER...';
    }

    //When guess is correct
    else {
      if (inputValue === valueToGuess) {
        document.querySelector('body').style.backgroundColor = '#73a165';
        document.querySelector('.number').style.width = '20rem';
        document.querySelector('.message').textContent = '🎉🎊 Correct Number!';
        document.querySelector('.number').textContent = valueToGuess;
        document.querySelector('.again').textContent = 'REPLAY!';
        document.querySelector('.heading').textContent = 'YOU WON!';
        document.querySelector('.guess').value = '';

        // Comparing the high score
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else {
        inputValue > valueToGuess
           ? (document.querySelector('.message').textContent =
            'number input is too large')
          : (document.querySelector('.message').textContent =
            'number input is too small');
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
      }
      // When num is high
        if (inputValue > valueToGuess) {
        score--;
        document.querySelector('.message').textContent =
          'number input is too large';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
      }

      // When num is low
      else {
        score--;
        document.querySelector('.message').textContent =
          'number input is too small';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
      }
    }
  }
});

//Restoring the initial consitions through using again
document.querySelector('.again').addEventListener('click', function () {
  score = Number(10);
  valueToGuess = Math.floor(Math.random() * 20) + 1;
  console.log(valueToGuess);
  document.querySelector('body').style.backgroundColor = '#775a5a';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.heading').textContent = 'Guess  My  Number!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
