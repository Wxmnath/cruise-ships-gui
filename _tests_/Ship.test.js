const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  describe("with ports and an itinerary", () => {
    let ship;
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
      dover = new Port("Dover");
      calais = new Port("Calais");
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    });
    it("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it("has a starting Port", () => {
      expect(ship.currentPort).toBe(dover);
    });

    it("Can set Sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship); //Here we expect the Ship's setSail method to call it's currentPort's remove Ship method, and we can assert on this by checking dover.ships no longer has our Ship inside.
    });

    it("Can dock at a different port", () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(calais); //expect the ship's currentPort to be calais.
      expect(calais.ships).toContain(ship);
    });

    it("cannot sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached"); //Then ship.setSail gets invoked and throws an error before the test has chance to assert it. Therefore, with the toThrowError matcher you always pass in a callback function so that Jest can decide when to call it.
    });

    it("gets added to port on instantiation", () => {
      expect(dover.ships).toContain(ship);
    });
  });
});
