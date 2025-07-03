const rules = {
    paper: 'rock',
    rock: 'scissors',
    scissors: 'paper'
};

const imgChoices = ['rock', 'paper', 'scissors'];
const humanChoice = document.querySelector('.human-choice img');
let indexImg = 0;
const changeButton = document.querySelector('.change-button');
const playRoundButton= document.querySelector('.play-round');
let humanPoint = 0;
let computerPoint = 0;
const maxPoints = 3; 
const gameLog = document.querySelector('.game-log');


//Функция и кнопка обновления картинки
function updateImgChoice() {
    humanChoice.src = `${imgChoices[indexImg]}.png` ;
    humanChoice.alt = imgChoices[indexImg]; 
}

changeButton.addEventListener('click', () => {
    indexImg = (indexImg + 1 + imgChoices.length) % imgChoices.length;
    updateImgChoice();
})
//Запускает раунд
playRoundButton.addEventListener('click', function(){
    playRps();
})

//Генерирует результат компьютера
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
    }

function changeComputerImage(choice){
    const computerImage = document.querySelector('.computer-choice img');
    computerImage.src = `${choice}.png`;
    computerImage.alt = choice;
}

//Функция разыгрывающая партию на основе результата компьютера и alt картинки   
function playRound(computerChoice, humanChoice) {
    if (rules[humanChoice] === computerChoice) return "You Lose";
    if (rules[computerChoice] === humanChoice) return "You Win";
    return "Draw!";}

//обновляем счет   
function updateScore(result){
    const score = document.querySelector('.score-numbers');
    if(result === "You Win"){
        humanPoint++
    }else if (result === "You Lose"){
        computerPoint++
    }

    score.textContent = `${humanPoint} - ${computerPoint}`
}

//написать проверку счета, если какойто счет то просто обнуляет счетчик и выводт результат
function updateGame(){
    const playButton = document.querySelector('.play-round');
    if(humanPoint === maxPoints || computerPoint === maxPoints){
        if(humanPoint === maxPoints){gameLog.textContent = "You Win"
        }else if(computerPoint === maxPoints){gameLog.textContent = "Computer Wins"}
        playButton.textContent = "Play Again";
        playButton.id = "play-again";
        playButton.replaceWith(playButton.cloneNode(true));
        document.querySelector("#play-again").addEventListener('click', function(){resetScore()})
    }

}
function resetScore(){
    const score = document.querySelector('.score-numbers');
    const resultText = document.querySelector('.result');
    const playButton = document.querySelector('#play-again');
    playButton.textContent = "Play";
    playButton.id = "play";
    playButton.replaceWith(playButton.cloneNode(true));
    document.querySelector('#play').addEventListener('click', function(){playRps()})
    humanPoint = 0;
    computerPoint = 0;
    score.textContent = `${humanPoint} - ${computerPoint}`;
    resultText.textContent = "...";
    gameLog.textContent = "🎮 First to 3 wins";
        
    }

function playRps(){
    const humanChoice = document.querySelector('.human-choice img').alt;
    const computerChoice = getComputerChoice();
    changeComputerImage(computerChoice);
    const result = playRound(humanChoice, computerChoice);
    const resultText = document.querySelector('.result');
    resultText.textContent = result;
    updateScore(result);
    updateGame();
}
