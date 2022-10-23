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
    winingNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");


minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listeners
game.addEventListener("mousedown", function (e){
    if (e.target.className === "play-again"){
        window.location.reload();
    }
});

// Listen For Guess
guessBtn.addEventListener("click", function () {

    let guess = parseInt(guessInput.value);
    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    };

    // Check if won, then GAME OVER "WON!!"
    if (guess === winingNum) {

        gameOver(true, `${winingNum} is correct, YOU WIN!!`,);
        
    } else {
        // Wrong number, then GAME OVER "LOST!!"
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            
            // Game over -- lost 
            gameOver(false, `Game Over, YOU LOST!!, the correct number was ${winingNum}`);

        } else {
            // Clear Input
            guessInput.value = "";

            // Game continue --- continue
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, "red");
            guessInput.style.borderColor = "red";
        }
    }

});
// Game over
function gameOver(won, msg) {
    let color;

    won === true ? color = "green" : color = "red";

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    guessBtn.style.backgroundColor = color;
    setMessage(msg);

    // Play Again
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again"
};
// Set wining Number to a Random Number
function getRandomNum(min, max) {
    return (Math.floor(Math.random() *(max - min + 1) + min));

};


// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
};