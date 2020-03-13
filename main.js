const Ship = function(length) {
    if (length <= 0) throw 'Length has to be positive!'
    let hitShipCells = Object.seal(new Array(length).fill(false));
    let hitCells = 0;

    const hit = function(i) {
        if (i >= length || i < 0) throw "'i' is out of bounds!";
        hitShipCells[i] = true;
    }

    const isHit = function(i) {
        if (i >= length || i < 0) throw "'i' is out of bounds!";
        return hitShipCells[i];
    }

    const isSunk = function() {
        return hitShipCells.reduce((a, b) => a + b) == length;
    }

    return { length, hit, isSunk, isHit };
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

    const placeShip = function(x, y, length, isHorizontal) {
        if (Math.max(x, y) >= 10 || Math.min(x, y) < 0) {
            throw 'Coordinates are out of bounds!';
        }
        if (length <= 0) throw 'Non-positive length!';

        if (isHorizontal && x + length > 10 ||
            !isHorizontal && y + length > 10) {
            throw 'Ship goes out of bounds!';
        }

        newShip = Ship(length);
        if (isHorizontal) {
            for (let x0 = x; x0 < x + length; x0++) {
                let i = x0 - x;
                cells[x0][y] = {ship: newShip, pos: i};
            }
        } else {
            for (let y0 = y; y0 < y + length; y0++) {
                let i = y0 - y;
                cells[x][y0] = {ship: newShip, pos: i};
            }
        }
    }

    const receiveAttack = function(x, y) {
        if (Math.max(x, y) >= 10 || Math.min(x, y) < 0) {
            throw "Coordinates out of bounds!";
        }
        let resultString = 'miss';
        if (cells[x][y] != null) {
            const shipObject = cells[x][y];
            shipObject['ship'].hit(shipObject['pos']);
            resultString = shipObject['ship'].isSunk() ? 'sunk' : 'hit';
        }
        return resultString;
    }

    return { getCells, placeShip, receiveAttack };
}

exports.Ship = Ship;
exports.Gameboard = Gameboard;
