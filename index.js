// function janken() {
//     const jankenpon = [
//         "images/rock.png",
//         "images/paper.png",
//         "images/scissors.png",
//     ];

//     // Randomly choose player's and computer's choices
//     const playerRoll = Math.floor(Math.random() * 3);
//     const player2Roll = Math.floor(Math.random() * 3);
    
//     const playerChoice = jankenpon[playerRoll];
//     const player2Choice = jankenpon[player2Roll];

//     // Update the images in the HTML
//     document.querySelector(".imgRock").src = playerChoice;
//     document.querySelector(".imgPaper").src = player2Choice;

//     // Determine the result
//     let result = "";
//     if (playerChoice === player2Choice) {
//         result = "It's a tie!";
//     } else if (
//         (playerChoice === "images/rock.png" && player2Choice === "images/scissors.png") ||
//         (playerChoice === "images/paper.png" && player2Choice === "images/rock.png") ||
//         (playerChoice === "images/scissors.png" && player2Choice === "images/paper.png")
//     ) {
//         result = "Player 1 wins!";
//     } else {
//         result = "Player 2 wins!";
//     }

//     // Update the result text in the HTML
//     document.getElementById("result").innerText = result;
// }

// if(localStorage.getItem("loadedBefore")){
//     janken();
// } else {
//     document.getElementById("result").innerText = "Let's Play!";
//     localStorage.setItem("loadedBefore", true);
// }

//THE SECOND
// let playerChoice = "";
// let choices = {
//     rock: "./images/rock.png",
//     paper: "./images/paper.png",
//     scissors: "./images/scissors.png"
// };

// function playerChoose(choice) {
//     playerChoice = choices[choice];
//     const choice = computerChoose();
//     displayChoices(playerChoice, computerChoice);
//     determineWinner(playerChoice, computerChoice);
// }

// function computerChoose() {
//     const jankenpon = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * 3);
//     return choices[jankenpon[randomIndex]];
// }

// function displayChoices(player, computer) {
//     document.querySelector(".imgRock").src = player;
//     document.querySelector(".imgPaper").src = computer;
// }

// function determineWinner(player, computer) {
//     let result = "";
//     if (player === computer) {
//         result = "It's a tie!";
//     } else if (
//         (player === choices.rock && computer === choices.scissors) ||
//         (player === choices.paper && computer === choices.rock) ||
//         (player === choices.scissors && computer === choices.paper)
//     ) {
//         result = "Player 1 wins!";
//     } else {
//         result = "Computer wins!";
//     }
//     document.getElementById("result").innerText = result;
// }

// function resetGame() {
//     playerChoice = "";
//     document.getElementById("result").innerText = "Let's Play!";
//     document.querySelector(".imgRock").src = "./images/rock.png";
//     document.querySelector(".imgPaper").src = "./images/paper.png";
//     document.querySelector(".imgScissors").src = "./images/scissors.png";
// }

// if (localStorage.getItem("loadedBefore")) {
//     playerChoose('rock'); // This will simulate a game when the page reloads
// } else {
//     localStorage.setItem("loadedBefore", true);
// }

let player1Choice = "";
let player2Choice = "";
let currentPlayer = 1;

function startGame() {
    document.getElementById("result").innerText = "Player 1, make your choice!";
}

function playerChoose(choice) {
    if (currentPlayer === 1) {
        player1Choice = choice;
        currentPlayer = 2;
        document.getElementById("result").innerText = "Player 2, make your choice!";
    } else if (currentPlayer === 2) {
        player2Choice = choice;
        determineWinner(player1Choice, player2Choice);
    }
}

function determineWinner(choice1, choice2) {
    let result = "";
    if (choice1 === choice2) {
        result = "It's a tie!";
    } else if (
        (choice1 === 'rock' && choice2 === 'scissors') ||
        (choice1 === 'paper' && choice2 === 'rock') ||
        (choice1 === 'scissors' && choice2 === 'paper')
    ) {
        result = "Player 1 wins!";
    } else {
        result = "Player 2 wins!";
    }
    document.getElementById("result").innerText = result;
}

function resetGame() {
    player1Choice = "";
    player2Choice = "";
    currentPlayer = 1;
    document.getElementById("result").innerText = "Let's Play!";
}

