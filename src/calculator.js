const calculator = {};

calculator.calculate = (num1, num2, operation) => {
    if (operation == '+')
        return num1 + num2;
    else if (operation == '-')
        return num1 - num2;
    else (operation == '*')
        return num1 * num2;
}

module.exports = calculator;