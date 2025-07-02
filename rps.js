const rules = {
    paper: 'rock',
    rock: 'scissors',
    scissors: 'paper'
};

const imgChoices = ['rock', 'paper', 'scissors'];
const humanChoice = document.querySelector('.human-choice img');
let indexImg = 0;

function updateImgChoice() {
    humanChoice.src = `${imgChoices[indexImg]}.png` ;
    humanChoice.alt = imgChoices[indexImg]; 
}
const changeButton = document.querySelector('.change-button');

changeButton.addEventListener('click', () => {
    indexImg = (indexImg + 1 + imgChoices.length) % imgChoices.length;
    updateImgChoice();
})

const playRoundButton= document.querySelector('.play-round');

playRoundButton.addEventListener('click', function(){
    playGame();
})

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
    }
     
function getHumanChoice () {
    let choice;
    do {
        const input = prompt("Rock, Paper, Scissors?");
        if (input === null) {
            return null;
        }
        choice = input.toLowerCase();
    }while (!['rock','paper','scissors'].includes(choice));
    return choice;
}
function playRound(computerChoice, humanChoice) {
    if (rules[humanChoice] === computerChoice) return "You Win";
    if (rules[computerChoice] === humanChoice) return "You Lose";
    return "Draw!";}


function playGame() {
    let currentR = 1;
    let humanscore = 0;
    let computerscore = 0;
    while(humanscore < 3 && computerscore < 3){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let result = playRound(computerChoice,humanChoice);
        if (humanChoice === null) {
            console.log("Game cancelled")
            return;
        }
        if (result === "You Win") {
            humanscore++;
            console.log(`Round ${currentR}`)
            console.log(`You Win, your score ${humanscore}`)
            currentR++
        }else if (result === "You Lose"){
            computerscore++;
            console.log(`Round ${currentR}`)
            console.log(`You lose, computer score ${computerscore}`)
            currentR++
        }else {
            console.log("It's a tie")
        }
        }
        if(computerscore === 3){
            console.log(`Game is end, Computer Wins, Score: Computer ${computerscore}, Your score ${humanscore}`)
        }else {
            console.log(`Game is end, You Win, Score: Your score ${humanscore}, Computer ${computerscore}`)
        }
    }
