function Ship(itinerary) {
  /* passes an instance of Itinerary into the Ship constructor */
  this.itinerary = itinerary; // now assigned it to an itinerary property to keep access to it */
  this.currentPort = itinerary.ports[0]; //itinerary object has more than one port and its being passed into Ship. Square bracket notation to access the first array element */
  this.previousPort = null;

  this.setSail = function () {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === itinerary.ports.length - 1) {
      throw new Error("End of itinerary reached");
    }

    this.previousPort = this.currentPort;
    this.currentPort = "";
  };

  this.dock = function (port) {
    //expect dock method to pick the next ort on an Itinerary.
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
    /*We get the index of the current port inside of the Itinerary 
    and set the new current port to that index plus 1. */
  };
}

module.exports = Ship;
