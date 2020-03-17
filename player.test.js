const Player = require('./main.js').Player;
const Gameboard = require('./main.js').Gameboard;

test('Player should be able to attack', () => {
    let board = Gameboard();
    let player = Player();
    expect(player.attack(board, 4, 7)).toEqual(board.receiveAttack(4, 7));
    board.placeShip(7, 8, 3, true);
    expect(player.attack(board, 8, 8)).toEqual(board.receiveAttack(8, 8));
});
