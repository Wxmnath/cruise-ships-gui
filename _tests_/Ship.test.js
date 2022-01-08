const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("Starting Port", () => {
    const ship = new Ship("Southampton");
    expect(ship.startingPort).toBe("Southampton");
  });

  it("Can set Sail", () => {
    const ship = new Ship("Southampton");

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
  });
});
