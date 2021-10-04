const { suma } = require('./suma');

describe('sumar', () => {
    test('1 + 2 es igual a 3', () => {
        const result = suma(1,2)
        expect(result).toBe(3);
    })
    
    test('0 + 2 es igual a 2', () => {
        const result = suma(0,2)
        expect(result).toBe(2);
    })
})