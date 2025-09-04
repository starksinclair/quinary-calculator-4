// Quinary Calculator - Advanced Arithmetic Logic
export {
    quinaryToDecimal,
    decimalToQuinary,
    isValidQuinaryNumber,
    addQuinary,
    subtractQuinary,
    multiplyQuinary,
    divideQuinary,
    squareQuinary,
    sqrtQuinary,
    hasOperator
};
function quinaryToDecimal(quinaryString) {
    // quinaryString = quinaryString.s;
    if (!isValidQuinaryNumber(quinaryString)) {
        throw new Error('Invalid quinary number');
    }
    return parseInt(quinaryString, 5);
}

function hasOperator(input) {
    if (!input || typeof input !== 'string') return false;
    return ["+", "-", "*", "/"].some(op => input.includes(op));
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

function addQuinary(a, b) {
    if (!isValidQuinaryNumber(a) || !isValidQuinaryNumber(b)) {
        throw new Error('Invalid quinary input for addition');
    }

    const decimalA  = quinaryToDecimal(a);
    const decimalB  = quinaryToDecimal(b);
    const result = decimalA + decimalB;

    return decimalToQuinary(result);
}

function subtractQuinary(a, b) {
    if (!isValidQuinaryNumber(a) || !isValidQuinaryNumber(b)) {
        throw new Error('Invalid quinary input for subtraction');
    }

    const decimalA  = quinaryToDecimal(a);
    const decimalB  = quinaryToDecimal(b);
    const result = decimalA - decimalB;

    return decimalToQuinary(result);
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
