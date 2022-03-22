const choices = ['Rock', 'Paper', 'Scissor'];
const regex = /(rock|paper|scissor)/gi;

function cpuPlay() {
    let index = Math.floor(Math.random() * 3);
    let cpuSelection = choices[index];
    return cpuSelection;
}

let userSelection = prompt("Choose rock, paper or scissor: ");

function userPlay() {
    while (regex.test(userSelection) == false) {
        userSelection = prompt("Not valid, try again: ");
        if (userSelection === null) break;
    } 
    return userSelection;    
}
 
console.log(userPlay());



