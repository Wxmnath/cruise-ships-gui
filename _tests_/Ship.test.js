const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("Starting Port", () => {
    const ship = new Ship("Southampton");
    expect(ship.startingport).toBe("Southampton");
  });
});
