function Ship(itinerary) {
  /* passes an instance of Itinerary into the Ship constructor */
  this.itinerary = itinerary; // now assigned it to an itinerary property to keep access to it */
  this.currentPort = itinerary.ports[0]; //itinerary object has more than one port and its being passed into Ship. Square bracket notation to access the first array element */
  this.previousPort = null;
  this.currentPort.addShip(this); //We have access to our currentPort (which we have already pulled out of our itinerary), so we just call addShip on it and pass in this (which refers to our current Ship instance). A constructor just defines what happens when an object is instantiated, so we can perform these operations in constructors in cases like this one.

  this.setSail = function () {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === itinerary.ports.length - 1) {
      throw new Error("End of itinerary reached");
    }

    this.previousPort = this.currentPort;
    this.currentPort.removeShip(this);
    this.currentPort = null;
  };

  this.dock = function (port) {
    //expect dock method to pick the next port on an Itinerary.
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
    /*We get the index of the current port inside of the Itinerary 
    and set the new current port to that index plus 1. */
    this.currentPort.addShip(this); //calling a method on an object that has been passed into our Ship instance through dependency inversion.
  };
}

module.exports = Ship;
