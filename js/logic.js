// Quinary Calculator - Advanced Arithmetic Logic

// CONVERSION FUNCTIONS (needed for arithmetic)

/**
 * Convert quinary string to decimal number
 * @param {string} quinaryString - quinary number as string (digits 0-4)
 * @returns {number} decimal equivalent
 */
function quinaryToDecimal(quinaryString) {
    if (!isValidQuinaryNumber(quinaryString)) {
        throw new Error('Invalid quinary number: only digits 0-4 allowed');
    }
    
    let decimal = 0;
    for (let i = 0; i < quinaryString.length; i++) {
        const digit = parseInt(quinaryString[i]);
        const power = quinaryString.length - 1 - i;
        decimal += digit * Math.pow(5, power);
    }
    return decimal;
}

/**
 * Convert decimal number to quinary string
 * @param {number} decimalNumber - decimal number
 * @returns {string} quinary equivalent
 */
function decimalToQuinary(decimalNumber) {
    if (decimalNumber === 0) return '0';
    if (decimalNumber < 0) {
        throw new Error('Negative numbers not supported in quinary');
    }
    
    let quinary = '';
    let num = Math.floor(decimalNumber);
    
    while (num > 0) {
        quinary = (num % 5) + quinary;
        num = Math.floor(num / 5);
    }
    
    return quinary;
}

/**
 * Validate if input is a valid quinary number
 * @param {string} input - input to validate
 * @returns {boolean} true if valid quinary number
 */
function isValidQuinaryNumber(input) {
    if (typeof input !== 'string' || input === '') {
        return false;
    }
    
    // Check if all characters are valid quinary digits (0-4)
    return /^[0-4]+$/.test(input);
}

// ADVANCED ARITHMETIC OPERATIONS

/**
 * Multiply two quinary numbers
 * @param {string} a - first quinary number
 * @param {string} b - second quinary number
 * @returns {string} quinary result
 */
function multiplyQuinary(a, b) {
    if (!isValidQuinaryNumber(a) || !isValidQuinaryNumber(b)) {
        throw new Error('Invalid quinary input for multiplication');
    }
    
    const decimalA = quinaryToDecimal(a);
    const decimalB = quinaryToDecimal(b);
    const result = decimalA * decimalB;
    
    return decimalToQuinary(result);
}

/**
 * Divide two quinary numbers (integer division)
 * @param {string} a - dividend (quinary)
 * @param {string} b - divisor (quinary)
 * @returns {string} quinary result
 */
function divideQuinary(a, b) {
    if (!isValidQuinaryNumber(a) || !isValidQuinaryNumber(b)) {
        throw new Error('Invalid quinary input for division');
    }
    
    const decimalA = quinaryToDecimal(a);
    const decimalB = quinaryToDecimal(b);
    
    if (decimalB === 0) {
        throw new Error('Division by zero');
    }
    
    const result = Math.floor(decimalA / decimalB);
    return decimalToQuinary(result);
}

/**
 * Square a quinary number
 * @param {string} a - quinary number to square
 * @returns {string} quinary result
 */
function squareQuinary(a) {
    if (!isValidQuinaryNumber(a)) {
        throw new Error('Invalid quinary input for square operation');
    }
    
    const decimalA = quinaryToDecimal(a);
    const result = decimalA * decimalA;
    
    return decimalToQuinary(result);
}

/**
 * Square root of a quinary number (integer result)
 * @param {string} a - quinary number
 * @returns {string} quinary result
 */
function sqrtQuinary(a) {
    if (!isValidQuinaryNumber(a)) {
        throw new Error('Invalid quinary input for square root operation');
    }
    
    const decimalA = quinaryToDecimal(a);
    
    if (decimalA < 0) {
        throw new Error('Cannot calculate square root of negative number');
    }
    
    const result = Math.floor(Math.sqrt(decimalA));
    return decimalToQuinary(result);
}

// EXPORT FUNCTIONS FOR INTEGRATION
// Make functions available globally for integration with main app
if (typeof window !== 'undefined') {
    window.quinaryLogic = {
        // Conversion functions
        quinaryToDecimal,
        decimalToQuinary,
        isValidQuinaryNumber,
        
        // Advanced arithmetic functions
        multiplyQuinary,
        divideQuinary,
        squareQuinary,
        sqrtQuinary
    };
}

// For Node.js testing environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        quinaryToDecimal,
        decimalToQuinary,
        isValidQuinaryNumber,
        multiplyQuinary,
        divideQuinary,
        squareQuinary,
        sqrtQuinary
    };
}
