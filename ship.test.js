const Ship = require('./main.js');

test('Properly calculated length', () => {
    expect(Ship(2, 3, 6, 3).length).toBe(4);
});

test('Calculated length with flipped coordinates', () => {
    expect(Ship(6, 3, 2, 3).length).toBe(4);
});
