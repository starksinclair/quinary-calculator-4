function quinaryToDecimal(qNumber) {
    return parseInt(qNumber, 5); // with radix parameter
}

function decimalToQuinary(dNumber) {
    return dNumber.toString(5); // with radix parameter
}

function quinaryCalculation(operation, qNumber1, qNumber2) {
    let qNumber1Dec = quinaryToDecimal(qNumber1);
    let qNumber2Dec = quinaryToDecimal(qNumber2);
    if (operation === "add") {
        return decimalToQuinary(qNumber1Dec + qNumber2Dec);
    } else if (operation === "subtract") {
        return decimalToQuinary(qNumber1Dec - qNumber2Dec);
    } else if (operation === "multiply") {
        return decimalToQuinary(qNumber1Dec * qNumber2Dec);
    } else if (operation === "divide") {
        return decimalToQuinary(qNumber1Dec / qNumber2Dec);
    } else if (operation === "square") {
        return decimalToQuinary(qNumber1Dec ** 2);
    } else if (operation === "sqrt") {
        return decimalToQuinary(Math.sqrt(qNumber1Dec));
    } else {
        return ("Invalid Operation")
    }
}