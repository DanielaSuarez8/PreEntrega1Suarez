const computerChoiceDisplay = document.getElementById('eleccionComputadora');
const userChoiceDisplay = document.getElementById('eleccionUsuario');
const resultDisplay = document.getElementById('resultado');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['piedra', 'papel', 'tijera'];
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
}

const outcomes = [
    { choice1: 'piedra', choice2: 'papel', result: 'Victoria!' },
    { choice1: 'piedra', choice2: 'tijera', result: 'Derrota!' },
    { choice1: 'papel', choice2: 'tijera', result: 'Victoria!' },
    { choice1: 'papel', choice2: 'piedra', result: 'Derrota!' },
    { choice1: 'tijera', choice2: 'piedra', result: 'Victoria!' },
    { choice1: 'tijera', choice2: 'papel', result: 'Derrota!' }
];

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Es un empate!';
    } else {
        for (let outcome of outcomes) {
            if (outcome.choice1 === userChoice && outcome.choice2 === computerChoice) {
                result = outcome.result;
                break;
            }
        }
    }
    resultDisplay.innerHTML = result;
}