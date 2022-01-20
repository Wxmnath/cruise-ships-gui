const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Itinerary", () => {
  describe("with ports and ships", () => {});
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    const dover = jest.fn();
    const calais = jest.fn();

    itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
