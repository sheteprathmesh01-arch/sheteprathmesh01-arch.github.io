// rock paper scissors

let myScore = 0;
let compScore = 0;

const icons = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

function play(myChoice) {
    // computer picks 0, 1 or 2
    let num = Math.floor(Math.random() * 3);
    let compChoice;

    if (num == 0) {
        compChoice = "rock";
    } else if (num == 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }

    let result;

    if (myChoice == compChoice) {
        result = "It's a tie!";
    } else if (myChoice == "rock" && compChoice == "scissors") {
        result = "You win this round!";
        myScore++;
    } else if (myChoice == "paper" && compChoice == "rock") {
        result = "You win this round!";
        myScore++;
    } else if (myChoice == "scissors" && compChoice == "paper") {
        result = "You win this round!";
        myScore++;
    } else {
        result = "Computer wins this round!";
        compScore++;
    }

    document.getElementById("status").textContent = result;
    document.getElementById("detail").textContent = "You: " + icons[myChoice] + "   Computer: " + icons[compChoice];
    document.getElementById("you").textContent = myScore;
    document.getElementById("cpu").textContent = compScore;
}

function resetScore() {
    myScore = 0;
    compScore = 0;
    document.getElementById("you").textContent = 0;
    document.getElementById("cpu").textContent = 0;
    document.getElementById("status").textContent = "Pick one to start!";
    document.getElementById("detail").textContent = "";
}