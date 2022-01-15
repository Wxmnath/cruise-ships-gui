const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    // Input ports called upon in Ship (Create instances of Port)
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    /* // Pass in an array of Port instances(Dover & Calais) 
    into a new instance of Itinerary */
    const itinerary = new Itinerary([dover, calais]);

    /* check that our itinerary instances does now possess
    Port instances */
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
