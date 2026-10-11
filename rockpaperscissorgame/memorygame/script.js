// memory match

const emojis = ["🚀", "🎮", "🏍️", "🏏", "🛸", "💻", "⚡", "🎯"];

const grid = document.getElementById("grid");
const info = document.getElementById("status");

let firstPick = null;   // first card clicked
let busy = false;       // stops clicking while wrong cards are showing
let tries = 0;
let matched = 0;

function startGame() {
    grid.innerHTML = "";
    firstPick = null;
    busy = false;
    tries = 0;
    matched = 0;
    info.textContent = "Find all the pairs. Moves: 0";

    // two of each emoji, then mix them up
    let deck = emojis.concat(emojis);
    deck.sort(function () {
        return Math.random() - 0.5;
    });

    for (let i = 0; i < deck.length; i++) {
        let card = document.createElement("button");
        card.className = "card";
        card.textContent = deck[i];
        card.onclick = function () {
            pickCard(card);
        };
        grid.appendChild(card);
    }
}

function pickCard(card) {
    // don't allow clicks on matched cards, the same card twice, or while busy
    if (busy || card == firstPick || card.classList.contains("matched")) {
        return;
    }

    card.classList.add("open");

    if (firstPick == null) {
        firstPick = card;
        return;
    }

    // this was the second card
    tries++;
    info.textContent = "Find all the pairs. Moves: " + tries;

    if (firstPick.textContent == card.textContent) {
        firstPick.classList.add("matched");
        card.classList.add("matched");
        matched++;
        firstPick = null;

        if (matched == emojis.length) {
            info.textContent = "You won in " + tries + " moves!";
        }
    } else {
        busy = true;
        let secondPick = card;

        // wait a bit so the player can see both cards
        setTimeout(function () {
            firstPick.classList.remove("open");
            secondPick.classList.remove("open");
            firstPick = null;
            busy = false;
        }, 800);
    }
}

startGame();