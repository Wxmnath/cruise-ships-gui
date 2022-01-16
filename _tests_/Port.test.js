const Port = require("../src/Port.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("Port", () => {
    const port = new Port("Dover");
    expect(port.portName).toBe("Dover");
  });

  it("can add a ship", () => {
    const port = new Port("Dover");
    const ship = {};

    port.addShip(ship);
    /* You'll notice here that we've not used the Ship constructor for 
    creating a Ship instance, but rather an object literal. The reason is 
    because we've already tested Ship in the ship test suite. Here we're 
    just checking that a port can store a collection of entities - 
    at the moment we don't even need to be concerned with the interface 
    of the object we add to a port. When we do need to be concerned with 
    the interface then we can use mocks. */

    expect(port.ships).toContain(ship);
  });

  it("can remove a ship", () => {
    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
