const choices = ['rock', 'paper', 'scissor'];
const regex = /(rock|paper|scissor)/;
let userSelection = '';
let cpuSelection = '';
let winner;

//function cpuPlay() {
//    let index = Math.floor(Math.random() * 3);
//    let cpuChoice = choices[index];
//    console.log(cpuChoice);
//    return cpuChoice;
//}

let cpuPlay = () => choices[Math.floor(Math.random() * 3)];


function userPlay() {
    let choice = prompt("Choose rock, paper or scissor: ").toLowerCase();
    //while (regex.test(choice) !== true) {
    //    if (choice === null) break;
    //    choice = prompt("Not valid, try again: ");   
    //} 
    if (regex.test(choice) != true) {
        choice = prompt("Not valid, try again: ");   
    } 
    return choice;   
}



function playRound(user, cpu) {
    let result = '';
    switch(true) {
        case user === 'paper' && cpu === 'rock':
            result = "You win!! Paper beats rock";
            winner = 1;
            break;
        case user === 'rock' && cpu === 'scissor':
            result = "You win!! Rock beats scissor";
            winner = 1;
            break;
        case user === 'scissor' && cpu === 'paper':
            result = "You win!! Scissor beats paper";
            winner = 1;
            break;
        case cpu === 'paper' && user === 'rock':
            result = "You lose... paper beats rock";
            winner = 2;
            break;
        case cpu === 'rock' && user === 'scissor':
            result = "You lose... rock beats scissor";
            winner = 2;
            break;
        case cpu === 'scissor' && user === 'paper':
            result = "You lose... scissor beats paper";
            winner = 2;
            break;
        case cpu === user:
            result = "That's a draw";
            winner = 0;
            break;
    }
    console.log(result);
    return (result, winner);
}

function game() {
    let overall = '';
    let cpuScore = 0;
    let userScore = 0;
    for (i = 0; i < 5; i++) {
        userSelection = userPlay();
        if (userSelection === null) break;
        cpuSelection = cpuPlay();
        playRound(userSelection, cpuSelection);
        if (winner == 1) {
            userScore++;
        } else if (winner == 2) {
            cpuScore++;
        }
        console.log(cpuScore, userScore);
    }
    if (userScore > cpuScore) {
        return overall = "Congratulations!! You won";
    } else if (cpuScore > userScore) {
        return overall = "Better luck next time...";
    } else  if (cpuScore == userScore) {
        return overall = "That's a tie";
    }
    console.log(overall);
}

console.log(game())





