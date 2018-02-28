/*
Game Rules:
-Player must guess a number between a min and max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify player of the correct answer if lost
-Let player choose to play again
*/

//game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign UI min max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', (e) => {
    // console.log(e.target);
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});
      
//event listener
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
    // console.log(guess);
    //validate 
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        // console.log('Holy crap good guess!');
        //clears error message after 3secs
        setTimeout(clearMessage, 3000);
    }
     //check if won
    if(guess === winningNum){
        // //disable input
        // guessInput.disabled = true;
        // //change border color
        // guessInput.style.borderColor = 'green';
        // setMessage(`${winningNum} is correct!  You win!`, 'green');
        gameOver(true, `${winningNum} is correct!  You win!`);
    } else {
        //guessed wrong
        guessesLeft -= 1;
        if(guessesLeft === 0){
            //game over lost
            //disable input
            // guessInput.disabled = true;
            // //change border color
            // guessInput.style.borderColor = 'red';
            // setMessage(`Ah, dang.  You lost! The correct number was ${winningNum}`, 'red');
            gameOver(false, `Ah, dang.  You lost! The correct number was ${winningNum}`);
        } else {
            //game continues - answer wrong
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
            //change border color
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
        }
    }
});      

//functions
function setMessage(string, color){
    message.style.color = color;
    message.textContent = string;
}
function clearMessage(){
    message.textContent = '';
    guessInput.style.borderColor = '#d3d3d3';
}

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    setMessage(msg, color);
    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}