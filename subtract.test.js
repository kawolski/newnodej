const subtract = require('./subtract')

test('Properly Subtracts 2 Numbers', () => {
    expect(subtract(3,2)).toBe(1)
})