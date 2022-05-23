const CHOICES = ['rock', 'paper', 'scissor'];
const userScoreboard = document.querySelector('#userScore');
const cpuScoreboard = document.querySelector('#cpuScore');
const playButtons = document.querySelectorAll('.btn');
const overallWinner = document.querySelector('#gameResult');
const roundDiv = document.querySelector('#roundResult');
let userSelection = '';
let cpuSelection = '';
let choice;
let result;
let userScore = 0;
let cpuScore = 0;

//Start button
const start = window.addEventListener('click', function(e){
    if (e.target.className == 'play'){
        userScoreboard.textContent = userScore;
        cpuScoreboard.textContent = cpuScore;
        userPlay();
        const start = this.document.querySelector('#start');
        start.classList.add('hidden');
        const score = document.querySelector('#scoreboard');
        score.classList.remove('hidden');
        const btns = document.querySelector('#btns');
        btns.classList.remove('hidden'); 
    } else if (e.target.className == 'replay') {
        userScoreboard.textContent = userScore;
        cpuScoreboard.textContent = cpuScore;
        userPlay();
        const restart = document.querySelector('#gameResult');
        restart.classList.add('hidden');
        roundDiv.classList.remove('hidden');
        roundDiv.firstElementChild.textContent = '';
    }
});


//Button choice event listener
function choose(e) {
    choice = e.target.id; 
    game(choice); 
    choice = '';
}

let userPlay = function() {
    playButtons.forEach(function(button) {
        button.addEventListener('click', choose)
    })   
};


//The game() function will call the other function 5 times to make the game 5 rounds, 
//keeping score after each round is played.
function game() { 
    userSelection = choice;
    console.log(userSelection);
    cpuSelection = cpuPlay();
    roundResult(userSelection, cpuSelection);
    if (winner == 1) {
        userScore++;
        userScoreboard.textContent = userScore;
    } else if (winner == 2) {
        cpuScore++
        cpuScoreboard.textContent = cpuScore;
    }
    if (userScore >= 5 || cpuScore >= 5) {
        gameResult(userScore, cpuScore);
        userScore = 0;
        cpuScore = 0;
    }
}


//This function will randomly generate a number betwenn 0 and 2, and use it as the index to choose 
//from the options in the choices array
let cpuPlay = () => CHOICES[Math.floor(Math.random() * 3)];



/*This function will compare the values given by the user and cpu choices, determine the result 
and return the corresponding phrase and numerical value to be used in the game() function to keep score.*/
function roundResult(user, cpu) {
    console.log(user, cpu);
    result = '';
    switch(true) {
        case user === 'paper' && cpu === 'rock':
        case user === 'rock' && cpu === 'scissor':
        case user === 'scissor' && cpu === 'paper':
            result = `You win!! ${user} beats ${cpu}`;
            winner = 1;
            break;
        case cpu === 'paper' && user === 'rock':
        case cpu === 'rock' && user === 'scissor':
        case cpu === 'scissor' && user === 'paper':
            result = `You lose... ${cpu} beats ${user}`;
            winner = 2;
            break;
        case cpu === user:
            result = "That's a draw";
            winner = 0;
            break;
    }
    const resultOutput = document.querySelector('#roundOutput');
    resultOutput.textContent = result;
    return (result, winner);
};


function gameResult(userScore, cpuScore) { //This checks the score to return the overall result.
    playButtons.forEach(function(button) {
        button.removeEventListener('click', choose)
    });
    if (userScore == 5) { 
        overallWinner.firstElementChild.textContent = "Congratulations!! You won";
    } else if (cpuScore == 5) {
        overallWinner.firstElementChild.textContent = "Better luck next time...";
    }
    roundDiv.classList.add('hidden');
    overallWinner.classList.remove('hidden');
};







