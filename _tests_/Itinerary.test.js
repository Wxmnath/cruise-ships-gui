const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Itinerary", () => {
  describe("with ports and ships", () => {
    let dover;
    let calais;
    let itinerary;
  });
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    // Input ports called upon in Ship (Create instances of Port)
    dover = new Port("Dover");
    calais = new Port("Calais");

    /* // Pass in an array of Port instances(Dover & Calais) 
    into a new instance of Itinerary */
    itinerary = new Itinerary([dover, calais]);

    /* check that our itinerary instances does now possess
    Port instances */
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
