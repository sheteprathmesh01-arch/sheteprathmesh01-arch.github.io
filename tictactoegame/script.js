
const boxes = document.querySelectorAll(".cell");
const info = document.getElementById("status");

let turn = "X";
let gameEnded = false;
let moves = 0;

// all the ways someone can win
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function play(i) {
    // box already used or game over
    if (boxes[i].textContent != "" || gameEnded) {
        return;
    }

    boxes[i].textContent = turn;
    moves++;

    if (checkWinner()) {
        info.textContent = "Player " + turn + " wins!";
        gameEnded = true;
    } else if (moves == 9) {
        info.textContent = "It's a draw!";
        gameEnded = true;
    } else {
        if (turn == "X") {
            turn = "O";
        } else {
            turn = "X";
        }
        info.textContent = "Player " + turn + "'s turn";
    }
}

function checkWinner() {
    for (let i = 0; i < winCombos.length; i++) {
        let a = winCombos[i][0];
        let b = winCombos[i][1];
        let c = winCombos[i][2];

        if (boxes[a].textContent != "" &&
            boxes[a].textContent == boxes[b].textContent &&
            boxes[a].textContent == boxes[c].textContent) {

            // make the winning boxes green
            boxes[a].classList.add("win");
            boxes[b].classList.add("win");
            boxes[c].classList.add("win");
            return true;
        }
    }
    return false;
}

function restart() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
        boxes[i].classList.remove("win");
    }
    turn = "X";
    gameEnded = false;
    moves = 0;
    info.textContent = "Player X's turn";
}