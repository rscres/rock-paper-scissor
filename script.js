const choices = ['rock', 'paper', 'scissor'];
const regex = /(rock|paper|scissor)/i;
let userSelection = '';
let cpuSelection = '';
let winner;
let choice = '';

//This function will randomly generate a number betwenn 0 and 2, and use it as the index to choose 
//from the options in the choices array
let cpuPlay = () => choices[Math.floor(Math.random() * 3)];

//Button choice event listener
const userPlay = window.addEventListener('click', function(e){
    if (e.target.tagName == 'BUTTON'){
        return choice = e.target.id;
    }
});

//This will prompt the user for his choice and check if the value matches the options.
/*function userPlay(e) {
    if (regex.test(choice) != true) { //This checks if the prompt value is valid and prompts the user again if it isn't  
        if (choice === null) return;
        choice = prompt("Not valid, try again: ");   
    }
    
    return choice.toLowerCase();   
}*/


/*This function will compare the values given by the user and cpu choices, determine the result 
and return the corresponding phrase and numerical value to be used in the game() function to keep score.*/
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


function gameResult(userScore, cpuScore) { //This checks the score to return the overall result.
    let overallWinner = '';
    if (userScore == 5) { 
        return overallWinner = "Congratulations!! You won";
    } else {
        return overallWinner = "Better luck next time...";
    } 
    return overallWinner;
}


//The game() function will call the other function 5 times to make the game 5 rounds, 
//keeping score after each round is played.
function game() { 
    let cpuScore = 0;
    let userScore = 0;
    while (cpuScore < 5 && userScore < 5){
        userSelection = userPlay;
        console.log(userSelection);
        if (userSelection == null) break;
        cpuSelection = cpuPlay();
        playRound(userSelection, cpuSelection);
        if (winner == 1) {
            userScore++;
        } else if (winner == 2) {
            cpuScore++;
        }
        console.log(`User: ${userScore} v CPU: ${cpuScore}`);
    }
    console.log(gameResult(userScore, cpuScore));
}

game();







