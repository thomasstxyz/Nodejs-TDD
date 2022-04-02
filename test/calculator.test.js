const assert = require('assert');
const calculator = require('../src/calculator');

    describe('calculator.calculate() Test', () => {
        it('should equal 2', () => {
            const result = calculator.calculate(1, 1, '+');
            assert.equal(result, 2)
        });

        it('subtract 1', () => {
            const result = calculator.calculate(3, 1, '-');
            assert.equal(result, 2)
        });

        it('multiply by 3', () => {
            const result = calculator.calculate(3, 3, '*');
            assert.equal(result, 9)
        });
    });
