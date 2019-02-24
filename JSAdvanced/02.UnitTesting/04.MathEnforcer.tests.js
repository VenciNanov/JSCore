const assert = require('chai').assert;
const mathEnforcer = require('./04.MathEnforcer');

describe('mathEnforcer', function () {
    describe('addFive',()=>{
        it('should return undefined,when a non-number is given',()=>{
            let result = mathEnforcer.addFive('test');

            assert.isUndefined(result)
        });
        it('should return correct result, when a number is given',()=>{
            let result = mathEnforcer.addFive(5);
            assert.equal(result,10);
        });
        it('should return correct result, when a negative number is given',()=>{
            let result = mathEnforcer.addFive(-5);
            assert.equal(result,0);
        });
        it('should return correct result, when a floating point number is given',()=>{
            let result = mathEnforcer.addFive(5.51);
            assert.equal(result,10.51);
        });
    });
    describe("subtractTen",()=>{
        it('should return undefined,when a non-number is given',()=>{
            let result = mathEnforcer.subtractTen('test');

            assert.isUndefined(result)
        });
        it('should return correct result, when a number is given',()=>{
            let result = mathEnforcer.subtractTen(15);
            assert.equal(result,5);
        });
        it('should return correct result, when a negative number is given',()=>{
            let result = mathEnforcer.subtractTen(-5);
            assert.equal(result,-15);
        });
        it('should return correct result, when a floating point number is given',()=>{
            let result = mathEnforcer.subtractTen(15.51);
            assert.equal(result,5.51);
        });
    });
    describe("sum",()=>{
        it('should return undefined,when a non-number is given',()=>{
            let result = mathEnforcer.sum('test',5);

            assert.isUndefined(result)
        });
        it('should return correct result, when a number is given',()=>{
            let result = mathEnforcer.sum(5,10);
            assert.equal(result,15);
        });
        it('should return correct result, when a negative number is given',()=>{
            let result = mathEnforcer.sum(-5,10);
            assert.equal(result,5);
        });
        it('should return correct result, when a floating point number is given',()=>{
            let result = mathEnforcer.sum(5.26,5.24);
            assert.equal(result,10.5);
        });
    });
})