const Ship = require('./main.js');

test('Can pass length', () => {
    expect(Ship(3).length).toBe(3);
});

test('Can\'t pass negative length', () => {
    expect(() => Ship(-2)).toThrow()
});

test('Can\'t pass 0 length', () => {
    expect(() => Ship(0)).toThrow()
});
