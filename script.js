const choices = ['Rock', 'Paper', 'Scissor'];
const regex = /(rock|paper|scissor)/gi;

function cpuPlay() {
    let index = Math.floor(Math.random() * 3);
    cpuSelection = choices[index];
    return cpuSelection;
}





