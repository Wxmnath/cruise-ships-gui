function Ship(startingPort) {
  this.startingPort = startingPort;

  this.setSail = function () {
    this.startingPort = "";
  };
}

module.exports = Ship;
