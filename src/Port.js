function Port(portName) {
  this.portName = portName;
  this.ships = [];
  this.addShip = function (ship) {
    this.ships.push(ship);
  };
  this.removeShip = function (ship) {
    this.ships.pop(ship);
  };
}

module.exports = Port;
