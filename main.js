const Ship = function(length) {
    if (length <= 0) throw 'Length has to be positive!'
    return { length };
}

module.exports = Ship;
