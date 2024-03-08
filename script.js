function playGame(userChoice) {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = 'rock';
    } else if (computerChoice <= 0.67) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    var result = "";
    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win! My choice was " + computerChoice + ".";
    } else {
        result = "You lose! My choice was " + computerChoice + ".";
    }

    document.getElementById("result").innerText = result;
}
