// Mocha Tests for Quinary Calculator Logic

const assert = require('assert');
const quinaryLogic = require('../js/logic.js');

describe('Quinary Calculator Logic Tests', function() {
  
  describe('Conversion Functions', function() {
    
    describe('quinaryToDecimal', function() {
      it('should convert quinary 0 to decimal 0', function() {
        assert.strictEqual(quinaryLogic.quinaryToDecimal('0'), 0);
      });
      
      it('should convert quinary 1 to decimal 1', function() {
        assert.strictEqual(quinaryLogic.quinaryToDecimal('1'), 1);
      });
      
      it('should convert quinary 12 to decimal 7', function() {
        assert.strictEqual(quinaryLogic.quinaryToDecimal('12'), 7);
      });
      
      it('should convert quinary 123 to decimal 38', function() {
        assert.strictEqual(quinaryLogic.quinaryToDecimal('123'), 38);
      });
      
      it('should convert quinary 444 to decimal 124', function() {
        assert.strictEqual(quinaryLogic.quinaryToDecimal('444'), 124);
      });
      
      it('should throw error for invalid quinary digit 5', function() {
        assert.throws(() => {
          quinaryLogic.quinaryToDecimal('5');
        }, /Invalid quinary number/);
      });
      
      it('should throw error for invalid quinary digit 12345', function() {
        assert.throws(() => {
          quinaryLogic.quinaryToDecimal('12345');
        }, /Invalid quinary number/);
      });
      
      it('should throw error for non-numeric input', function() {
        assert.throws(() => {
          quinaryLogic.quinaryToDecimal('abc');
        }, /Invalid quinary number/);
      });
    });
    
    describe('decimalToQuinary', function() {
      it('should convert decimal 0 to quinary 0', function() {
        assert.strictEqual(quinaryLogic.decimalToQuinary(0), '0');
      });
      
      it('should convert decimal 1 to quinary 1', function() {
        assert.strictEqual(quinaryLogic.decimalToQuinary(1), '1');
      });
      
      it('should convert decimal 7 to quinary 12', function() {
        assert.strictEqual(quinaryLogic.decimalToQuinary(7), '12');
      });
      
      it('should convert decimal 38 to quinary 123', function() {
        assert.strictEqual(quinaryLogic.decimalToQuinary(38), '123');
      });
      
      it('should convert decimal 124 to quinary 444', function() {
        assert.strictEqual(quinaryLogic.decimalToQuinary(124), '444');
      });
      
      it('should throw error for negative numbers', function() {
        assert.throws(() => {
          quinaryLogic.decimalToQuinary(-1);
        }, /Negative numbers not supported/);
      });
    });
    
    describe('isValidQuinaryNumber', function() {
      it('should return true for valid quinary 0', function() {
        assert.strictEqual(quinaryLogic.isValidQuinaryNumber('0'), true);
      });
      
      it('should return true for valid quinary 1234', function() {
        assert.strictEqual(quinaryLogic.isValidQuinaryNumber('1234'), true);
      });
      
      it('should return false for invalid quinary digit 5', function() {
        assert.strictEqual(quinaryLogic.isValidQuinaryNumber('5'), false);
      });
      
      it('should return false for invalid quinary 12345', function() {
        assert.strictEqual(quinaryLogic.isValidQuinaryNumber('12345'), false);
      });
      
      it('should return false for empty string', function() {
        assert.strictEqual(quinaryLogic.isValidQuinaryNumber(''), false);
      });
      
      it('should return false for non-numeric input', function() {
        assert.strictEqual(quinaryLogic.isValidQuinaryNumber('abc'), false);
      });
    });
  });
  
  describe('Advanced Arithmetic Functions', function() {
    
    describe('multiplyQuinary', function() {
      it('should multiply quinary 1 and 2 to get 2', function() {
        assert.strictEqual(quinaryLogic.multiplyQuinary('1', '2'), '2');
      });
      
      it('should multiply quinary 12 and 3 to get 41', function() {
        assert.strictEqual(quinaryLogic.multiplyQuinary('12', '3'), '41');
      });
      
      it('should multiply quinary 3 and 4 to get 22', function() {
        assert.strictEqual(quinaryLogic.multiplyQuinary('3', '4'), '22');
      });
      
      it('should multiply quinary 0 and 123 to get 0', function() {
        assert.strictEqual(quinaryLogic.multiplyQuinary('0', '123'), '0');
      });
      
      it('should throw error for invalid quinary input', function() {
        assert.throws(() => {
          quinaryLogic.multiplyQuinary('5', '3');
        }, /Invalid quinary input/);
      });
    });
    
    describe('divideQuinary', function() {
      it('should divide quinary 10 by 2 to get 2', function() {
        assert.strictEqual(quinaryLogic.divideQuinary('10', '2'), '2');
      });
      
      it('should divide quinary 41 by 3 to get 12', function() {
        assert.strictEqual(quinaryLogic.divideQuinary('41', '3'), '12');
      });
      
      it('should divide quinary 22 by 4 to get 3', function() {
        assert.strictEqual(quinaryLogic.divideQuinary('22', '4'), '3');
      });
      
      it('should divide quinary 0 by 123 to get 0', function() {
        assert.strictEqual(quinaryLogic.divideQuinary('0', '123'), '0');
      });
      
      it('should throw error for division by zero', function() {
        assert.throws(() => {
          quinaryLogic.divideQuinary('10', '0');
        }, /Division by zero/);
      });
      
      it('should throw error for invalid quinary input', function() {
        assert.throws(() => {
          quinaryLogic.divideQuinary('5', '3');
        }, /Invalid quinary input/);
      });
    });
    
    describe('squareQuinary', function() {
      it('should square quinary 0 to get 0', function() {
        assert.strictEqual(quinaryLogic.squareQuinary('0'), '0');
      });
      
      it('should square quinary 1 to get 1', function() {
        assert.strictEqual(quinaryLogic.squareQuinary('1'), '1');
      });
      
      it('should square quinary 2 to get 4', function() {
        assert.strictEqual(quinaryLogic.squareQuinary('2'), '4');
      });
      
      it('should square quinary 3 to get 14', function() {
        assert.strictEqual(quinaryLogic.squareQuinary('3'), '14');
      });
      
      it('should square quinary 12 to get 144', function() {
        assert.strictEqual(quinaryLogic.squareQuinary('12'), '144');
      });
      
      it('should throw error for invalid quinary input', function() {
        assert.throws(() => {
          quinaryLogic.squareQuinary('abc');
        }, /Invalid quinary input/);
      });
    });
    
    describe('sqrtQuinary', function() {
      it('should get square root of quinary 0 to get 0', function() {
        assert.strictEqual(quinaryLogic.sqrtQuinary('0'), '0');
      });
      
      it('should get square root of quinary 1 to get 1', function() {
        assert.strictEqual(quinaryLogic.sqrtQuinary('1'), '1');
      });
      
      it('should get square root of quinary 4 to get 2', function() {
        assert.strictEqual(quinaryLogic.sqrtQuinary('4'), '2');
      });
      
      it('should get square root of quinary 14 to get 3', function() {
        assert.strictEqual(quinaryLogic.sqrtQuinary('14'), '3');
      });
      
      it('should get square root of quinary 144 to get 12', function() {
        assert.strictEqual(quinaryLogic.sqrtQuinary('144'), '12');
      });
      
      it('should get integer square root of quinary 2 to get 1', function() {
        assert.strictEqual(quinaryLogic.sqrtQuinary('2'), '1');
      });
      
      it('should throw error for invalid quinary input', function() {
        assert.throws(() => {
          quinaryLogic.sqrtQuinary('abc');
        }, /Invalid quinary input/);
      });
    });
  });
});
