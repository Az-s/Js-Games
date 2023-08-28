const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = " " + userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    const computerChoice = generateComputerChoice(); // Capture the computerChoice value
    getResults(userChoice, computerChoice);

}));

const generateComputerChoice = () => {
    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1; 

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'scissor';
            break;
        case 3:
            computerChoice = 'paper';
            break;  
    };

    computerChoiceDisplay.innerHTML = " " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    return computerChoice;
};

const getResults = (userChoice, computerChoice) => {
    let result;

    const lowercaseUserChoice = userChoice.toLowerCase();
    const lowercaseComputerChoice = computerChoice.toLowerCase();

    if (lowercaseComputerChoice === lowercaseUserChoice) {
        result = 'Draw';
    } else {
        switch (lowercaseComputerChoice) {
            case 'rock':
                result = lowercaseUserChoice === 'scissor' ? 'Computer Win' : 'You Win';
                break;
            case 'scissor':
                result = lowercaseUserChoice === 'paper' ? 'Computer Win' : 'You Win';
                break;
            case 'paper':
                result = lowercaseUserChoice === 'rock' ? 'Computer Win' : 'You Win';
                break;
            default:
                result = 'Invalid choice';
        }
    }

    resultDisplay.innerHTML = " " + result.charAt(0).toUpperCase() + result.slice(1);
};
