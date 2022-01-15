const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    /* The below test modified to instantiate Itinerary instance in Ship*/
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting Port", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]); /* itinerary object added
    and will have 2 port objects stored in an array on its ports property */
    const ship = new Ship(itinerary); /*Ship now takes an itinerary object
    instead of port object */

    /* this.startingPort property now renamed with this.currentPort
    to allow ship to be at different ports */
    expect(ship.currentPort).toBe(port);
  });

  it("Can set Sail", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]); /* itinerary object added
    and will have 2 port objects stored in an array on its ports property */
    const ship = new Ship(itinerary); /*setSail now takes an itinerary object
    instead of port object */

    ship.setSail();

    /* this.startingPort property now renamed with this.currentPort
    to allow ship to be at different ports */
    expect(ship.currentPort).toBeFalsy();
  });

  it("Can dock at a different port", () => {
    const dover = new Port("Dover"); // create a port: dover,
    const calais = new Port("Calais"); //also created a new port: calais
    const itinerary = new Itinerary([dover, calais]); // dover and calais passed in instead of port to allow decision to which port to dock to */
    const ship = new Ship(itinerary);

    /*We do also have to call setSail now as dock no longer has a Port object
     passed in and therefore we need to ensure the previousPort is set so it 
     knows where to dock next. */
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais); //expect the ship's currentPort to be calais.
  });

  it("cannot sail further than its itinerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached"); //Then ship.setSail gets invoked and throws an error before the test has chance to assert it. Therefore, with the toThrowError matcher you always pass in a callback function so that Jest can decide when to call it.
  });
});
