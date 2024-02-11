let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function operate(operator) {
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(displayValue.slice(-1))) return; // Avoid consecutive operators
    displayValue += operator;
    updateDisplay();
}

function equals() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        operate(key);
    } else if (key === 'Enter') {
        equals();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});
