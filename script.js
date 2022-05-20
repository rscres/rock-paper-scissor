const choices = ['rock', 'paper', 'scissor'];
const userScoreboard = document.querySelector('#userScore');
const cpuScoreboard = document.querySelector('#cpuScore');
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
        const restart = document.querySelector('#gameResult');
        restart.classList.add('hidden'); 
    }   
});


//Button choice event listener
let userPlay = function() {
    const playButtons = document.querySelectorAll('.btn');
    playButtons.forEach(function(button) {
        button.addEventListener('click', function(e){
            choice = e.target.id; 
            game(choice); 
        })
    })   
};


//The game() function will call the other function 5 times to make the game 5 rounds, 
//keeping score after each round is played.
function game() { 
    userSelection = choice;
    console.log(userSelection);
    cpuSelection = cpuPlay();
    roundResult(userSelection, cpuSelection);
    if (userScore >= 5 || cpuScore >= 5) {
        gameResult(userScore, cpuScore);
        userScore = 0;
        cpuScore = 0;
    }
    if (winner == 1) {
        userScore++;
        userScoreboard.textContent = userScore;
    } else if (winner == 2) {
        cpuScore++
        cpuScoreboard.textContent = cpuScore;
    }
}


//This function will randomly generate a number betwenn 0 and 2, and use it as the index to choose 
//from the options in the choices array
let cpuPlay = () => choices[Math.floor(Math.random() * 3)];



/*This function will compare the values given by the user and cpu choices, determine the result 
and return the corresponding phrase and numerical value to be used in the game() function to keep score.*/
function roundResult(user, cpu) {
    console.log(user, cpu);
    result = '';
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
    const roundResult = document.querySelector('#roundOutput');
    roundResult.textContent = result;
    return (result, winner);
};


function gameResult(userScore, cpuScore) { //This checks the score to return the overall result.
    const overallWinner = document.querySelector('#gameResult');
    const roundResult = document.querySelector('#roundResult');
    if (userScore == 5) { 
        overallWinner.firstElementChild.textContent = "Congratulations!! You won";
    } else if (cpuScore == 5) {
        overallWinner.firstElementChild.textContent = "Better luck next time...";
    }
    roundResult.classList.add('hidden');
    overallWinner.classList.remove('hidden');
};

/*function replay() {
    const restart = document.querySelector('#gameResult');
    restart.addEventListener('click', function(e){
        if (e.target.tagName == 'BUTTON'){
            userScoreboard.textContent = userScore;
            cpuScoreboard.textContent = cpuScore;
            console.log()
            userPlay();
            restart.classList.add('hidden');  
        }
    })
};*/





