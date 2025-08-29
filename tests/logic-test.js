// Manual Unit Tests for Quinary Calculator Logic

// Import the logic functions
const quinaryLogic = require('../js/logic.js');

// Test counters
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

// Test helper functions
function runTest(testName, testFunction) {
    totalTests++;
    try {
        const result = testFunction();
        if (result === true) {
            passedTests++;
            console.log(`✅ ${testName} ✓`);
        } else {
            failedTests++;
            console.log(`❌ ${testName} ✗`);
            console.log(`   Expected: true, Got: ${result}`);
        }
    } catch (error) {
        failedTests++;
        console.log(`❌ ${testName} ✗`);
        console.log(`   Error: ${error.message}`);
    }
}

function testConversionFunctions() {
    console.log("\n=== TESTING CONVERSION FUNCTIONS ===");
    
    // Test quinaryToDecimal
    runTest("quinaryToDecimal('0') = 0", () => {
        const result = quinaryLogic.quinaryToDecimal('0');
        console.log(`   Input: '0', Output: ${result}, Expected: 0`);
        return result === 0;
    });
    
    runTest("quinaryToDecimal('1') = 1", () => {
        const result = quinaryLogic.quinaryToDecimal('1');
        console.log(`   Input: '1', Output: ${result}, Expected: 1`);
        return result === 1;
    });
    
    runTest("quinaryToDecimal('12') = 7", () => {
        const result = quinaryLogic.quinaryToDecimal('12');
        console.log(`   Input: '12', Output: ${result}, Expected: 7`);
        return result === 7;
    });
    
    runTest("quinaryToDecimal('123') = 38", () => {
        const result = quinaryLogic.quinaryToDecimal('123');
        console.log(`   Input: '123', Output: ${result}, Expected: 38`);
        return result === 38;
    });
    
    runTest("quinaryToDecimal('444') = 124", () => {
        const result = quinaryLogic.quinaryToDecimal('444');
        console.log(`   Input: '444', Output: ${result}, Expected: 124`);
        return result === 124;
    });
    
    // Test decimalToQuinary
    runTest("decimalToQuinary(0) = '0'", () => {
        const result = quinaryLogic.decimalToQuinary(0);
        console.log(`   Input: 0, Output: '${result}', Expected: '0'`);
        return result === '0';
    });
    
    runTest("decimalToQuinary(1) = '1'", () => {
        const result = quinaryLogic.decimalToQuinary(1);
        console.log(`   Input: 1, Output: '${result}', Expected: '1'`);
        return result === '1';
    });
    
    runTest("decimalToQuinary(7) = '12'", () => {
        const result = quinaryLogic.decimalToQuinary(7);
        console.log(`   Input: 7, Output: '${result}', Expected: '12'`);
        return result === '12';
    });
    
    runTest("decimalToQuinary(38) = '123'", () => {
        const result = quinaryLogic.decimalToQuinary(38);
        console.log(`   Input: 38, Output: '${result}', Expected: '123'`);
        return result === '123';
    });
    
    runTest("decimalToQuinary(124) = '444'", () => {
        const result = quinaryLogic.decimalToQuinary(124);
        console.log(`   Input: 124, Output: '${result}', Expected: '444'`);
        return result === '444';
    });
    
    // Test isValidQuinaryNumber
    runTest("isValidQuinaryNumber('0') = true", () => {
        const result = quinaryLogic.isValidQuinaryNumber('0');
        console.log(`   Input: '0', Output: ${result}, Expected: true`);
        return result === true;
    });
    
    runTest("isValidQuinaryNumber('1234') = true", () => {
        const result = quinaryLogic.isValidQuinaryNumber('1234');
        console.log(`   Input: '1234', Output: ${result}, Expected: true`);
        return result === true;
    });
    
    runTest("isValidQuinaryNumber('5') = false", () => {
        const result = quinaryLogic.isValidQuinaryNumber('5');
        console.log(`   Input: '5', Output: ${result}, Expected: false`);
        return result === false;
    });
    
    runTest("isValidQuinaryNumber('12345') = false", () => {
        const result = quinaryLogic.isValidQuinaryNumber('12345');
        console.log(`   Input: '12345', Output: ${result}, Expected: false`);
        return result === false;
    });
    
    runTest("isValidQuinaryNumber('') = false", () => {
        const result = quinaryLogic.isValidQuinaryNumber('');
        console.log(`   Input: '', Output: ${result}, Expected: false`);
        return result === false;
    });
    
    runTest("isValidQuinaryNumber('abc') = false", () => {
        const result = quinaryLogic.isValidQuinaryNumber('abc');
        console.log(`   Input: 'abc', Output: ${result}, Expected: false`);
        return result === false;
    });
}

function testArithmeticFunctions() {
    console.log("\n=== TESTING ARITHMETIC FUNCTIONS ===");
    
    // Test multiplyQuinary
    runTest("multiplyQuinary('1', '2') = '2'", () => {
        const result = quinaryLogic.multiplyQuinary('1', '2');
        console.log(`   Input: ('1', '2'), Output: '${result}', Expected: '2'`);
        return result === '2';
    });
    
    runTest("multiplyQuinary('12', '3') = '41'", () => {
        const result = quinaryLogic.multiplyQuinary('12', '3');
        console.log(`   Input: ('12', '3'), Output: '${result}', Expected: '41'`);
        return result === '41';
    });
    
    runTest("multiplyQuinary('3', '4') = '22'", () => {
        const result = quinaryLogic.multiplyQuinary('3', '4');
        console.log(`   Input: ('3', '4'), Output: '${result}', Expected: '22'`);
        return result === '22';
    });
    
    runTest("multiplyQuinary('0', '123') = '0'", () => {
        const result = quinaryLogic.multiplyQuinary('0', '123');
        console.log(`   Input: ('0', '123'), Output: '${result}', Expected: '0'`);
        return result === '0';
    });
    
    // Test divideQuinary
    runTest("divideQuinary('10', '2') = '2'", () => {
        const result = quinaryLogic.divideQuinary('10', '2');
        console.log(`   Input: ('10', '2'), Output: '${result}', Expected: '2'`);
        return result === '2';
    });
    
    runTest("divideQuinary('41', '3') = '12'", () => {
        const result = quinaryLogic.divideQuinary('41', '3');
        console.log(`   Input: ('41', '3'), Output: '${result}', Expected: '12'`);
        return result === '12';
    });
    
    runTest("divideQuinary('22', '4') = '3'", () => {
        const result = quinaryLogic.divideQuinary('22', '4');
        console.log(`   Input: ('22', '4'), Output: '${result}', Expected: '3'`);
        return result === '3';
    });
    
    runTest("divideQuinary('0', '123') = '0'", () => {
        const result = quinaryLogic.divideQuinary('0', '123');
        console.log(`   Input: ('0', '123'), Output: '${result}', Expected: '0'`);
        return result === '0';
    });
    
    // Test squareQuinary
    runTest("squareQuinary('0') = '0'", () => {
        const result = quinaryLogic.squareQuinary('0');
        console.log(`   Input: '0', Output: '${result}', Expected: '0'`);
        return result === '0';
    });
    
    runTest("squareQuinary('1') = '1'", () => {
        const result = quinaryLogic.squareQuinary('1');
        console.log(`   Input: '1', Output: '${result}', Expected: '1'`);
        return result === '1';
    });
    
    runTest("squareQuinary('2') = '4'", () => {
        const result = quinaryLogic.squareQuinary('2');
        console.log(`   Input: '2', Output: '${result}', Expected: '4'`);
        return result === '4';
    });
    
    runTest("squareQuinary('3') = '14'", () => {
        const result = quinaryLogic.squareQuinary('3');
        console.log(`   Input: '3', Output: '${result}', Expected: '14'`);
        return result === '14';
    });
    
    runTest("squareQuinary('12') = '144'", () => {
        const result = quinaryLogic.squareQuinary('12');
        console.log(`   Input: '12', Output: '${result}', Expected: '144'`);
        return result === '144';
    });
    
    // Test sqrtQuinary
    runTest("sqrtQuinary('0') = '0'", () => {
        const result = quinaryLogic.sqrtQuinary('0');
        console.log(`   Input: '0', Output: '${result}', Expected: '0'`);
        return result === '0';
    });
    
    runTest("sqrtQuinary('1') = '1'", () => {
        const result = quinaryLogic.sqrtQuinary('1');
        console.log(`   Input: '1', Output: '${result}', Expected: '1'`);
        return result === '1';
    });
    
    runTest("sqrtQuinary('4') = '2'", () => {
        const result = quinaryLogic.sqrtQuinary('4');
        console.log(`   Input: '4', Output: '${result}', Expected: '2'`);
        return result === '2';
    });
    
    runTest("sqrtQuinary('14') = '3'", () => {
        const result = quinaryLogic.sqrtQuinary('14');
        console.log(`   Input: '14', Output: '${result}', Expected: '3'`);
        return result === '3';
    });
    
    runTest("sqrtQuinary('144') = '12'", () => {
        const result = quinaryLogic.sqrtQuinary('144');
        console.log(`   Input: '144', Output: '${result}', Expected: '12'`);
        return result === '12';
    });
    
    runTest("sqrtQuinary('2') = '1' (integer sqrt)", () => {
        const result = quinaryLogic.sqrtQuinary('2');
        console.log(`   Input: '2', Output: '${result}', Expected: '1' (integer sqrt)`);
        return result === '1';
    });
}

function testErrorHandling() {
    console.log("\n=== TESTING ERROR HANDLING ===");
    
    // Test invalid quinary inputs
    runTest("quinaryToDecimal('5') should throw error", () => {
        try {
            quinaryLogic.quinaryToDecimal('5');
            return false;
        } catch (error) {
            console.log(`   Input: '5', Error: ${error.message}`);
            return error.message.includes('Invalid quinary number');
        }
    });
    
    runTest("quinaryToDecimal('12345') should throw error", () => {
        try {
            quinaryLogic.quinaryToDecimal('12345');
            return false;
        } catch (error) {
            console.log(`   Input: '12345', Error: ${error.message}`);
            return error.message.includes('Invalid quinary number');
        }
    });
    
    runTest("quinaryToDecimal('abc') should throw error", () => {
        try {
            quinaryLogic.quinaryToDecimal('abc');
            return false;
        } catch (error) {
            console.log(`   Input: 'abc', Error: ${error.message}`);
            return error.message.includes('Invalid quinary number');
        }
    });
    
    // Test negative numbers
    runTest("decimalToQuinary(-1) should throw error", () => {
        try {
            quinaryLogic.decimalToQuinary(-1);
            return false;
        } catch (error) {
            console.log(`   Input: -1, Error: ${error.message}`);
            return error.message.includes('Negative numbers not supported');
        }
    });
    
    // Test division by zero
    runTest("divideQuinary('10', '0') should throw error", () => {
        try {
            quinaryLogic.divideQuinary('10', '0');
            return false;
        } catch (error) {
            console.log(`   Input: ('10', '0'), Error: ${error.message}`);
            return error.message.includes('Division by zero');
        }
    });
    
    // Test invalid arithmetic inputs
    runTest("multiplyQuinary('5', '3') should throw error", () => {
        try {
            quinaryLogic.multiplyQuinary('5', '3');
            return false;
        } catch (error) {
            console.log(`   Input: ('5', '3'), Error: ${error.message}`);
            return error.message.includes('Invalid quinary input');
        }
    });
    
    runTest("squareQuinary('abc') should throw error", () => {
        try {
            quinaryLogic.squareQuinary('abc');
            return false;
        } catch (error) {
            console.log(`   Input: 'abc', Error: ${error.message}`);
            return error.message.includes('Invalid quinary input');
        }
    });
}

function runAllTests() {
    console.log("QUINARY CALCULATOR LOGIC TESTS");
    console.log("Feature: feature/advanced-arithmetic-logic");
    console.log("=" .repeat(50));
    
    testConversionFunctions();
    testArithmeticFunctions();
    testErrorHandling();
    
    console.log("\n" + "=" .repeat(50));
    console.log("TEST SUMMARY");
    console.log(`Total Tests: ${totalTests}`);
    console.log(`Passed: ${passedTests} ✅`);
    console.log(`Failed: ${failedTests} ❌`);
    console.log(`Success Rate: ${Math.round((passedTests/totalTests)*100)}%`);
    
    if (failedTests === 0) {
        console.log("\n🎉 ALL TESTS PASSED! Logic is working correctly.");
    } else {
        console.log(`\n⚠️  ${failedTests} test(s) failed. Please check the logic functions.`);
    }
}

// Run all tests
runAllTests();
