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

test('positive out-of-bounds x and y', () => {
    expect(() => Gameboard().placeShip(10, 4, 2, true)).toThrow();
});

test('negative out-of-bounds x and y', () => {
    expect(() => Gameboard().placeShip(-2, 3, 2, true)).toThrow();
});

test('negative length should throw', () => {
    expect(() => Gameboard().placeShip(1, 3, -2, true)).toThrow();
});

test('0 length should throw', () => {
    expect(() => Gameboard().placeShip(1, 3, 0, true)).toThrow();
});

test('horizontal length positive overflow', () => {
    expect(() => Gameboard().placeShip(8, 3, 4, true)).toThrow();
});

test('horizontal length positive overflow but just at edge', () => {
    expect(() => Gameboard().placeShip(9, 3, 2, true)).toThrow();
});

test('vertical length positive overflow', () => {
    expect(() => Gameboard().placeShip(4, 8, 4, false)).toThrow();
});

test('vertical length positive overflow but just at edge', () => {
    expect(() => Gameboard().placeShip(6, 8, 3, false)).toThrow();
});
