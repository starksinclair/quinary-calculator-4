// Quinary Calculator - Advanced Arithmetic Logic

function quinaryToDecimal(quinaryString) {
    if (!isValidQuinaryNumber(quinaryString)) {
        throw new Error('Invalid quinary number: only digits 0-4 allowed');
    }
    return parseInt(quinaryString, 5);
}

function decimalToQuinary(decimalNumber) {
    if (decimalNumber === 0) return '0';
    if (decimalNumber < 0) {
        throw new Error('Negative numbers not supported in quinary');
    }
    return decimalNumber.toString(5);
}

function isValidQuinaryNumber(input) {
    if (typeof input !== 'string' || input === '') {
        return false;
    }
    return /^[0-4]+$/.test(input);
}

function multiplyQuinary(a, b) {
    if (!isValidQuinaryNumber(a) || !isValidQuinaryNumber(b)) {
        throw new Error('Invalid quinary input for multiplication');
    }
    
    const decimalA = quinaryToDecimal(a);
    const decimalB = quinaryToDecimal(b);
    const result = decimalA * decimalB;
    
    return decimalToQuinary(result);
}

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

function squareQuinary(a) {
    if (!isValidQuinaryNumber(a)) {
        throw new Error('Invalid quinary input for square operation');
    }
    
    const decimalA = quinaryToDecimal(a);
    const result = decimalA * decimalA;
    
    return decimalToQuinary(result);
}

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

if (typeof window !== 'undefined') {
    window.quinaryLogic = {
        quinaryToDecimal,
        decimalToQuinary,
        isValidQuinaryNumber,
        multiplyQuinary,
        divideQuinary,
        squareQuinary,
        sqrtQuinary
    };
}

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
