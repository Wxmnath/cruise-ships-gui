const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a starting Port", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
    /* this.startingPort property now renamed with this.currentPort
    to allow ship to be at different ports */
    expect(ship.currentPort).toBe(port);
  });

  it("Can set Sail", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);

    ship.setSail();
    /* this.startingPort property now renamed with this.currentPort
    to allow ship to be at different ports */
    expect(ship.currentPort).toBeFalsy();
  });

  it("Can dock at a different port", () => {
    const dover = new Port("Dover"); // create a port: dover,
    const ship = new Ship(dover); //and pass it to a new Ship.

    const calais = new Port("Calais"); //also created a new port: calais
    ship.dock(calais); //and call ship.dock passing in calais.

    expect(ship.currentPort).toBe(calais); //expect the ship's currentPort to be calais.
  });
});
