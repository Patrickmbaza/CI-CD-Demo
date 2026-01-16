const fs = require('fs');
const path = require('path');

// More robust file detection for CI
function loadMathModule() {
  const possiblePaths = [
    './app.js',
    './App.js',
    path.join(__dirname, 'app.js'),
    path.join(__dirname, 'App.js'),
    path.resolve(__dirname, 'app.js'),
    path.resolve(__dirname, 'App.js')
  ];
  
  for (const modulePath of possiblePaths) {
    try {
      if (fs.existsSync(modulePath.replace(/^\.\//, path.join(__dirname, '/')))) {
        console.log(`Attempting to load: ${modulePath}`);
        const math = require(modulePath);
        console.log(`Successfully loaded from: ${modulePath}`);
        return math;
      }
    } catch (err) {
      console.log(`Failed to load from ${modulePath}:`, err.message);
    }
  }
  
  // Last resort: list all files
  console.log('All files in src/:', fs.readdirSync(__dirname));
  throw new Error('Could not find or load math module from any path');
}

const { add, multiply, divide } = loadMathModule();

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