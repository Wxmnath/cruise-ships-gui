/* function Port(portName) {
  this.portName = portName;
  this.ships = [];
  this.addShip = function (ship) {
    this.ships.push(ship);
  };
  this.removeShip = function (ship) {
    this.ships.pop(ship);
  };
}

module.exports = Port; */

(function exportPort() {
  function Port(portname) {
    this.portName = portname;
    this.ships = [];
  }

  Port.prototype = {
    addShip(ship) {
      this.ships.push(ship);
    },
    removeShip(ship) {
      this.ships = this.ships.filter((dockedShip) => dockedShip !== ship);
    },
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();
