const Gameboard = require('./main.js').Gameboard;

test('getCells works on empty Gameboard', () => {
    expect(Gameboard().getCells()).toEqual([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
    ]);
});

test('getCells object is not a reference to the real board', () => {
    let myBoard = Gameboard();
    let myBoardCells = myBoard.getCells();
    myBoardCells[3][2] = true;
    expect(myBoard.getCells()[3][2]).not.toEqual(myBoardCells[3][2]);
});
