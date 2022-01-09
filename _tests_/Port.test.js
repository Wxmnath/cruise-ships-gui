const Port = require("../src/Port.js");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("Port", () => {
    const port = new Port("Dover");
    expect(port.PortName).toBe("Dover");
  });
});
