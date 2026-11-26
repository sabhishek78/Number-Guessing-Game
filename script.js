// 1. Use 'let' so the answer can change when the game resets
let answer = Math.floor(Math.random() * 10) + 1;

const inputField = document.getElementById('guess');
const guessButton = document.getElementById('guess-button');
const resetButton = document.getElementById('reset-button');
const result = document.getElementById('result');

let guess;

// 2. Attach the guess event handler
guessButton.addEventListener('click', () => {
    // Prevent running if the input is empty
    if (inputField.value === "") {
        result.textContent = "Please enter a number!";
        return;
    }

    guess = Number(inputField.value);
    console.log(guess);

    if (guess < 1 || guess > 10) {
        result.textContent = "INVALID INPUT";
    }
    else if (guess < answer) {
        result.textContent = "Too Low!";
    } else if (guess > answer) {
        result.textContent = "Too High!";
    } else {
        result.textContent = "CORRECT!!";
    }
});

// 3. Attach the reset event handler
resetButton.addEventListener('click', () => {
    guess = null;
    result.textContent = "";       // Clear the text, not the element variable
    inputField.value = "";         // Clear the input box
    answer = Math.floor(Math.random() * 10) + 1; // Pick a new secret number
});
