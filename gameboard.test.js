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

test('insert a horizontal ship', () => {
    let myBoard = Gameboard();
    myBoard.placeShip(4, 2, 3, true);
    const myCells = myBoard.getCells();
    const expectedShipCells = [myCells[4][2], myCells[5][2], myCells[6][2]];
    expect(expectedShipCells.reduce((a, b) => a && b)).toBeTruthy();
});

test('insert a horizontal ship just at ending edge', () => {
    let myBoard = Gameboard();
    myBoard.placeShip(7, 5, 3, true);
    const myCells = myBoard.getCells();
    const expectedShipCells = [myCells[7][5], myCells[8][5], myCells[9][5]];
    expect(expectedShipCells.reduce((a, b) => a && b)).toBeTruthy();
});

test('insert a horizontal ship just at starting edge', () => {
    let myBoard = Gameboard();
    myBoard.placeShip(0, 8, 4, true);
    const myCells = myBoard.getCells();
    const expectedShipCells = [myCells[0][8], myCells[1][8], myCells[2][8], myCells[3][8]];
    expect(expectedShipCells.reduce((a, b) => a && b)).toBeTruthy();
});

test('insert a vertical ship', () => {
    let myBoard = Gameboard();
    myBoard.placeShip(1, 8, 2, false);
    const myCells = myBoard.getCells();
    const expectedShipCells = [myCells[1][8], myCells[1][9]];
    expect(expectedShipCells.reduce((a, b) => a && b)).toBeTruthy();
});

test('insert a vertical ship just at edge', () => {
    let myBoard = Gameboard();
    myBoard.placeShip(0, 9, 1, false);
    const myCells = myBoard.getCells();
    const expectedShipCells = [myCells[0][9]];
    expect(expectedShipCells.reduce((a, b) => a && b)).toBeTruthy();
});

test('insert a vertical ship just at starting edge', () => {
    let myBoard = Gameboard();
    myBoard.placeShip(6, 0, 2, false);
    const myCells = myBoard.getCells();
    const expectedShipCells = [myCells[6][0], myCells[6][1]];
    expect(expectedShipCells.reduce((a, b) => a && b)).toBeTruthy();
});
