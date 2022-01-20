const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  describe("with ports and an itinerary", () => {
    //let ship;
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Dover",
        ships: [],
      };

      calais = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Calais",
        ships: [],
      };

      itinerary = {
        ports: [dover, calais],
      };
      //dover = new Port("Dover");
      //calais = new Port("Calais");
      //itinerary = new Itinerary([dover, calais]);

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
      expect(dover.removeShip).toHaveBeenCalledWith(ship); //Instead of asserting on port.ships, we'll assert that our Ship instance's setSail method calls the removeShip method on our Port-like stub. Because we've tested removeShip separately inside Port.test.js, we can have complete confidence that despite test isolation, our application will have full test coverage.
    });

    it("Can dock at a different port", () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(calais); //expect the ship's currentPort to be calais.
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });

    it("cannot sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached"); //Then ship.setSail gets invoked and throws an error before the test has chance to assert it. Therefore, with the toThrowError matcher you always pass in a callback function so that Jest can decide when to call it.
    });

    it("gets added to port on instantiation", () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship); //Our Ship constructor calls a port's addShip method in its constructor, so our Port-like stub's addShip method gets called in the beforeEach callback prior to each test running. Therefore, we just have to assert in this test that addShip was called.
    });
  });
});
