var randomNumber1 = Math.round(Math.random() * 5 + 1);
var randomNumber2 = Math.round(Math.random() * 5 + 1);
var player1DiceImg = document.getElementsByClassName("img1")[0];
var player2DiceImg = document.getElementsByClassName("img2")[0];
var winText = document.querySelector("h1");

function playGame(player1, player2) {
    if (player1 > player2) {
        winText.style.fontSize = "7rem";
        winText.textContent = "🚩Player 1 Wins!";

    } else if (player1 < player2) {
        winText.style.fontSize = "7rem";
        winText.textContent = "Player 2 Wins!🚩";
    } else {
        winText.textContent = "Draw";
    }
    player1DiceImg.src = "images/dice" + player1 + ".png";
    player2DiceImg.src = "images/dice" + player2 + ".png";
}

playGame(randomNumber1, randomNumber2);