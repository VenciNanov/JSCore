const assert = require('chai').assert;
const lookupChar = require('./03.CharLookUp');

describe('lookupChar', function () {
    it('with a non-string first parameter, should return undefined', () => {
        let str = 1;
        let index = 1;
        let result = lookupChar(str, index);
        assert.isUndefined(result);
    });
    it('should return undefined when a non-number is the second paramerter', () => {
        let str = 'text';
        let index = 'text';
        let result = lookupChar(str, index);
        assert.isUndefined(result);
    });
    it('should return undefined when a param with floating point is given', () => {
        let str = 'text';
        let index = 2.5;
        let result = lookupChar(str, index);
        assert.isUndefined(result);
    });
    it('should return incorect index value, when index is out of range', () => {
        let str = 'text';
        let index = 12;
        let result = lookupChar(str, index);
        assert.equal(result,"Incorrect index")
    })
    it('should return incorect index value, when index is negative', () => {
        let str = 'text';
        let index = -2;
        let result = lookupChar(str, index);
        assert.equal(result,"Incorrect index")
    })
    it('should return incorect index value, when index is same lenght as string', () => {
        let str = 'text';
        let index = 4;
        let result = lookupChar(str, index);
        assert.equal(result,"Incorrect index")
    })
    it('should return correct value with correct parameters', () => {
        let str = 'text';
        let index = 3;
        let result = lookupChar(str, index);
        assert.equal(result,"t")
    })    
    it('should return correct value with correct parameters', () => {
        let str = 'text';
        let index = 1;
        let result = lookupChar(str, index);
        assert.equal(result,"e")
    })
})
