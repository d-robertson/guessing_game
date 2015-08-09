var GuessingGame = function() {
  this.guess;
  this.message = document.getElementById('message');
  this.answer;
  this.promptGuess = document.getElementById('promptGuess');
  this.myPrompt = document.getElementById('myPrompt');
  this.promptButton = document.getElementById('promptButton');
  this.score = 0;
  this.highScore = localStorage.highScore;
  this.scoreLabel = document.getElementById('scoreLabel');

  this.getRandom = function(seed) {
  return Math.floor(Math.random() * seed + 1);
  }

  this.run = function(guess, answer) {

    if(answer) {
      this.answer = answer;
    }
    else {
      this.answer = this.getRandom(100);
      console.log(this.answer);
    }
    this.guess = parseInt(guess);
    this.checkGuess();
  }

  this.checkGuess = function() {

    if(this.guess === this.answer) {
      this.message.innerHTML = 'You won the amazing prize of feeling great about guessing right!';
      if(this.score < this.highScore) {
        this.score = localStorage.highScore;
        document.getElementById('highScoreNumber').innerHTML = localStorage.highScore;
      }
    }
    else if(this.guess < this.answer) {
      this.message.innerHTML = 'you are a little low, try again';
      this.showPrompt();
    }
    else if(this.guess > this.answer) {
      this.message.innerHTML = 'you are a little high, try again';
      this.showPrompt();
    }
    else {
      this.message.innerHTML = 'Whoa! Please enter a valid number';
      this.showPrompt();
    }
  }

  this.showPrompt = function() {
    this.promptGuess.value = '';
    this.myPrompt.style.display = 'block';
  }

  this.submitPrompt = function() {
    this.guess = this.promptGuess.value;
    this.myPrompt.style.display = 'none';
    this.run(this.guess, this.answer);
    this.score ++;
    this.scoreLabel.innerHTML = this.score;
  }

  
}
var guessingGame = new GuessingGame();
guessingGame.message.innerHTML = 'I am thinking of a number between 1 and 100. See if you can guess it!';

document.getElementById('highScoreNumber').innerHTML = localStorage.highScore;

document.getElementById('promptButton').addEventListener('click', function() {
  guessingGame.submitPrompt();
}); 




