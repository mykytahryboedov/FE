var Random = Math.floor(Math.random() * 100) + 1;

var container = document.getElementsByClassName('container')[0];
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
  var userGuess = Number(guessField.value);
  let ComputerGuessLess = Math.floor(Math.random() * guessField.value  +1);
  let computerGuessMore = Math.floor(Math.random() * (+100 - +guessField.value +1) + +guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
 
  if (userGuess === Random) {
    lastResult.textContent = 'You win turtle!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "Sorry mate, let's try again ";
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < Random) {
      lowOrHi.textContent = 'Last guess was too low!';
      if (ComputerGuessLess === Random) {
        alert("Computer wins! He entered"  + " " + Random);
        setGameOver();
      }
      else if (Random < ComputerGuessLess) {
        alert('Computer entered: ' + ComputerGuessLess + '. Input a smaller number');
      }
      else {
       alert('Computer entered: ' + ComputerGuessLess + '. Input a bigger number');
      }
    } 
    else if(userGuess > Random) {
      lowOrHi.textContent = 'Last guess was too high!';
      if (ComputerGuessLess === Random) {
        alert("Computer wins! He entered " + " " + Random);
        setGameOver();
      }
      else if (Random < computerGuessMore) {
        alert('Computer entered: ' + computerGuessMore + '. Input a smaller number');
      }
      else {
       alert('Computer entered: ' + computerGuessMore + '. Input a bigger number');
      }
    } 
    else if(userGuess > Random) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
    }

 
 
function setGameOver(){
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Try again';
	container.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
  resetButton.style.width = "10em";
  resetButton.style.height =  "2em";

}

function resetGame() {
  guessCount = 1;

  var resetBlock = document.querySelectorAll('.resultBlock p');
  for (var i = 0 ; i < resetBlock.length ; i++) {
    resetBlock[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  Random = Math.floor(Math.random() * 100) + 1;
}


 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

