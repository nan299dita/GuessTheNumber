'use strict';
//Defining Number to be gussed
var valueToGuess = Math.floor(Math.random() * 20) + 1;
console.log(valueToGuess);
var highScore = document.querySelector('.highscore').textContent;
var score = 10;
function message(msg) {
  document.querySelector('.message').textContent = msg;
}
function number(num) {
  document.querySelector('.number').textContent = num;
}
function scoreBoard(score) {
  document.querySelector('.score').textContent = score;
}
function guess() {
  document.querySelector('.guess').value = '';
}
function again(Again) {
  document.querySelector('.again').textContent = Again;
}
function heading(heading) {
  document.querySelector('.heading').textContent = heading;
}
function body(text) {
  document.querySelector('body').style.backgroundColor = text;
}
function numberSize(size) {
  document.querySelector('.number').style.width = size;
}
// Adding an event Listner to check button
document.querySelector('.check').addEventListener('click', function () {
  //Taking value input by user
  var inputValue = Number(document.querySelector('.guess').value);
  console.log(inputValue);
  //Adding Functionality
  if (inputValue < 1 || inputValue > 20) {
    message('enter a valid number');
  } else {
    //checking if the game is over
    if (score === 1) {
      scoreBoard(0);
      message('YOU LOST!');
      body('#a15d5d');
      numberSize('20rem');
      number(valueToGuess);
      again('REPLAY!');
      heading('GAME OVER...');
      guess();
    }
    //When guess is correct
    else {
      if (inputValue === valueToGuess) {
        body('#73a165');
        numberSize('20rem');
        message('🎉🎊 Correct Number!');
        number(valueToGuess);
        again('REPLAY!');
        heading('YOU WON!');
        guess();
        // Comparing the high score
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else {
        inputValue > valueToGuess ?
            message('number input is too large'):
            message('number input is too small');
        score--;
        scoreBoard(score);
        guess();
      }
    }
  }
});

//Restoring the initial consitions through using again
document.querySelector('.again').addEventListener('click', function () {
  score = Number(10);
  valueToGuess = Math.floor(Math.random() * 20) + 1;
  console.log(valueToGuess);
  body('#775a5a');
  numberSize('15rem');
  number('?');
  again('Again!');
  heading('Guess  My  Number!');
  scoreBoard(score);
  message('Start guessing...');
  guess();
});
