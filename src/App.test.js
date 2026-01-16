const { add, multiply, divide } = require('./app.js');

describe('Math functions', () => {
    test('adds 2 + 3 to equal 5', () => {
        expect(add(2, 3)).toBe(5);
    });
    
    test('multiplies 4 * 5 to equal 20', () => {
        expect(multiply(4, 5)).toBe(20);
    });
    
    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });
    
    test('throws error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero');
    });
});
