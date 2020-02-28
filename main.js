const Ship = function(x1, y1, x2, y2) {
    const length = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));

    return { length };
}

module.exports = Ship;
