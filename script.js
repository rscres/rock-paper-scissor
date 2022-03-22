const choices = ['rock', 'paper', 'scissor'];
const regex = /(rock|paper|scissor)/gi;


function cpuPlay() {
    let index = Math.floor(Math.random() * 3);
    let cpuChoice = choices[index];
    console.log(cpuChoice);
    return cpuChoice;
}


function userPlay() {
    let choice = prompt("Choose rock, paper or scissor: ");
    while (regex.test(choice) == false) {
        if (choice === null) break;
        choice = prompt("Not valid, try again: ");   
    } 
    console.log(choice);
    return choice;   
}

let userSelection = userPlay();
let cpuSelection = cpuPlay();

function playRound(userSelection, cpuSelection) {
    let result = '';
    switch(true) {
        case userSelection == 'paper' && cpuSelection == 'rock':
            result = "You win!! Paper beats rock";
            break;
        case userSelection == 'rock' && cpuSelection == 'scissor':
            result = "You win!! Rock beats scissor";
            break;
        case userSelection == 'scissor' && cpuSelection == 'paper':
            result = "You win!! Scissor beats paper";
            break;
        case cpuSelection == 'paper' && userSelection == 'rock':
            result = "You lose... paper beats rock";
            break;
        case cpuSelection == 'rock' && userSelection == 'scissor':
            result = "You lose... rock beats scissor";
            break;
        case cpuSelection == 'scissor' && userSelection == 'paper':
            result = "You lose... scissor beats paper";
            break;
        default:
            result = "That's a draw"
    }
    return result; 
}

console.log(playRound(userSelection, cpuSelection))





