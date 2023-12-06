function playGuessingGame(numToGuess, totalGuesses = 10) {
    let gamePrompt = "Enter a number between 1 and 100.";
    let guessCount = 0;
    while (guessCount < totalGuesses) {
        let guess = prompt(gamePrompt);
        if (guess === null) {
            return 0;
        }
        guess = parseInt(guess);
        if (isNaN(guess) || guess === "") {
            gamePrompt = "Please enter a number.";
            continue;
        }
        if (guess === numToGuess) {
            return ++guessCount;
        }
        else {
            if (guess < numToGuess) {
                gamePrompt = guess + " is too small. Guess a larger number.";
            }
            else {
                gamePrompt = guess + " is too large. Guess a smaller number.";
            }
        }
        guessCount++;
    }
    return 0;
}
