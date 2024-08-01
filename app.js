let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function capitalize(word) {
    if(word === 'rock') return 'Rock';
    if(word === 'paper') return 'Paper';
    if(word === 'scissors') return 'Scissors';
}

function win(userChoice, compChoice){
    console.log("Win");
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${capitalize(userChoice)} wins against ${capitalize(compChoice)}! You Win 👍`
    userChoice_div.classList.add('greenGlow');
    setTimeout(function() {userChoice_div.classList.remove('greenGlow')}, 300);
}

function lose(userChoice, compChoice){
    console.log("Lose");
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${capitalize(userChoice)} loses against ${capitalize(compChoice)}! You Lose 👎` 
    userChoice_div.classList.add('redGlow');
    setTimeout(function() {userChoice_div.classList.remove('redGlow')}, 300);
}

function draw(userChoice, compChoice){
    console.log("Draw");
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = "It's a draw ✌️" 
    userChoice_div.classList.add('greyGlow');
    setTimeout(function() {userChoice_div.classList.remove('greyGlow')}, 300);
}

function game(userChoice) {
    compChoice = getComputerChoice();
    console.log("user choice is " + userChoice);
    console.log("computer choice is " + compChoice);

    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("rock");
    });

    paper_div.addEventListener("click", function () {
        game("paper");
    });

    scissors_div.addEventListener("click", function () {
        game("scissors");
    });
}

main();
