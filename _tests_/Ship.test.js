const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a starting Port", () => {
    const ship = new Ship("Dover");

    expect(ship.startingPort).toBe("Dover");
  });

  it("Can set Sail", () => {
    const ship = new Ship("Dover");

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
  });
});
