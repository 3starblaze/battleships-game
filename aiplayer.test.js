const AIPlayer = require('./main.js').AIPlayer;
const Gameboard = require('./main.js').Gameboard;

test('AIPlayer should successfully miss in empty Gameboard', () => {
    let board = Gameboard();
    let ai = AIPlayer();
    expect(ai.attack(board)).toEqual('miss');
});
