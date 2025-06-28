let firstNumber = '';
let operation = '';
let secondNumber = '';

const screen = document.getElementById('screen');

// Calculate the result of the current expression, if valid, and display it on the screen
function calcResult() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  if (isNaN(num1) || isNaN(num2)) return;

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Err';
      break;
    default:
      return;
  }

  // Show result and prepare for next input
  firstNumber = result.toString();
  operation = '';
  secondNumber = '';
  updateScreen();
}

// Handle operations when operation buttons (+, -, /, *) are pressed
function operationPressed(op) {
  if (!firstNumber) return;

  // Chain calculation if previous operation exists
  if (operation && secondNumber) {
    calcResult();
  }

  operation = op;
  updateScreen();
}

// Handle numeric input
function numberPressed(number) {
  if (!operation) {
    firstNumber += number;
  } else {
    secondNumber += number;
  }
  updateScreen();
}

// Clear the calculator screen
function clearScreen() {
  firstNumber = '';
  operation = '';
  secondNumber = '';
  updateScreen();
}

// Update the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  screen.textContent = `${firstNumber} ${operation} ${secondNumber}`;
}

// === Event Listeners ===
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

// Number button clicks
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    numberPressed(button.textContent);
  });
});

// Operator button clicks
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    operationPressed(button.textContent);
  });
});

// Equals button click
equalButton.addEventListener('click', () => {
  if (firstNumber && operation && secondNumber) {
    calcResult();
  }
});

// Clear button click
clearButton.addEventListener('click', () => {
  clearScreen();
});
