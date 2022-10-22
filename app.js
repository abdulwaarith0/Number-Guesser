/*
GAME FUNCTION:
- Players must guess a number between a min and max
- Players gets a certain amount of guesses
- Notify player of number of guesses remaining
- Notify player of the correct answer if lose 
- Let play choose to play again.
*/

// Game values
let min = 1,
    max = 10,
    winingNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector("game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");


minNum.textContent = min;
maxNum.textContent = max;

// Listen For Guess
guessBtn.addEventListener("click", function (){
    let guess = parseInt(guessInput.value); 
    // console.log(guess);
    // Validate
    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    };

    // Check if won
    if (guess === winingNum) {
        // Disable Inputs
        guessInput.disables = true;
        setMessage(`${winingNum} is correct, YOU WIN!!`, "green");
        guessInput.style.borderColor = "green";
    } else {

    }

});

// Set Message
function setMessage(msg, color) {
    message.style.color = color; 
    message.textContent = msg;
};