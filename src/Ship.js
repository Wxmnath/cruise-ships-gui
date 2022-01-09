function Ship(startingPort) {
  /* this.startingPort property now renamed with this.currentPort
    to allow ship to be at different ports */
  this.currentPort = startingPort;

  this.setSail = function () {
    /* this.startingPort property now renamed with this.currentPort
    to allow ship to be at different ports */
    this.currentPort = "";
  };
  this.dock = function (port) {
    this.currentPort = port;
  };
}

module.exports = Ship;
