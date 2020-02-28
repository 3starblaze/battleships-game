const Ship = require('./main.js');

test('Can pass length', () => {
    expect(Ship(3).length).toBe(3);
});
