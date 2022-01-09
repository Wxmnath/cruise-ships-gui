const Port = require("../src/Port.js");

describe("New Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("New Port", () => {
    const port = new Port("Bridgetown");
    expect(port.newPort).toBe("Bridgetown");
  });
});
