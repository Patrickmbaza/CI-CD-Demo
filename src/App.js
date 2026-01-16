// Math functions for testing
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

// Export for CommonJS (Node.js/require)
module.exports = { add, multiply, divide };
