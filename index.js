let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const messageEl = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    if (player1Turn) {
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active")
        messageEl.textContent = "Player 2 turn"
    } else {
       player2Dice.textContent = randomNumber;
       player1Dice.classList.add("active");
       player2Dice.classList.remove("active")
       messageEl.textContent = "Player 1 turn"
    }

    player1Turn = !player1Turn;
    
})