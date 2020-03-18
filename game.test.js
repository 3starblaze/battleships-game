const Game = require('./main.js').Game;

test('Game with ais should end eventually', () => {
    Game();
    expect(true).toEqual(true);
});
