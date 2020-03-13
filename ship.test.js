const Ship = require('./main.js').Ship;

test('Can pass length', () => {
    expect(Ship(3).length).toBe(3);
});

test('Can\'t pass negative length', () => {
    expect(() => Ship(-2)).toThrow()
});

test('Can\'t pass 0 length', () => {
    expect(() => Ship(0)).toThrow()
});

test('Positive out-of-bound hit should throw', () => {
    expect(() => Ship(3).hit(3)).toThrow();
});

test('Negative out-of-bound hit should throw', () => {
    expect(() => Ship(4).hit(-3)).toThrow();
});

test('Ship can be sunk', () => {
    let myShip = Ship(3);
    myShip.hit(0);
    myShip.hit(1);
    myShip.hit(2);
    expect(myShip.isSunk()).toBe(true);
});

test('Ship is not sunk initially', () => {
    expect(Ship(2).isSunk()).toBe(false);
});

test('Ship can\'t be sunk by hitting 1 spot continuously', () => {
    let myShip = Ship(2);
    myShip.hit(0);
    myShip.hit(0);
    expect(myShip.isSunk()).toBe(false);
});

test('Throws on out of bound indices', () => {
    let myShip = Ship(3);
    expect(() => myShip.isHit(4)).toThrow();
    expect(() => myShip.isHit(-2)).toThrow();
    expect(() => myShip.isHit(3)).toThrow();
});

test('Ship is not hit initially', () => {
    let myShip = Ship(2);
    expect(myShip.isHit(0)).toEqual(false);
    expect(myShip.isHit(1)).toEqual(false);
});

test('Ship gets hit properly', () => {
    let myShip = Ship(4);
    myShip.hit(2);
    expect(myShip.isHit(2)).toEqual(true);
});
