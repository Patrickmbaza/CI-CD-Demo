// Simple math functions for testing
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

// Export for Node.js testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, multiply, divide };
}
