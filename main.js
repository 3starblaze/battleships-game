const Ship = function(length) {
    if (length <= 0) throw 'Length has to be positive!'
    let hitShipCells = Object.seal(new Array(length).fill(false));
    let hitCells = 0;

    const hit = function(i) {
        if (i >= length || i < 0) throw "'i' is out of bounds!";
        hitShipCells[i] = true;
    }

    const isSunk = function() {
        return hitShipCells.reduce((a, b) => a + b) == length;
    }

    return { length, hit, isSunk };
}

const Gameboard = function() {
    let cells = new Array(10);
    for (let i = 0; i < 10; i++) {
        cells[i] = new Array(10).fill(null);
    }

    const getCells = function() {
        let newCells = new Array(10);
        for (let i = 0; i < 10; i++) {
            newCells[i] = cells[i].slice();
        }
        return newCells;
    }

    return { getCells }
}

exports.Ship = Ship;
exports.Gameboard = Gameboard;
