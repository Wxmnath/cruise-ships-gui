(function exportController() {
  function Controller() {
    this.initialiseSea();
  }

  Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = ["./images/water0.png", "./images/water1.png"];

    let backgroundIndex = 0;
    window.setInterval(() => {
      document.querySelector("#viewport").style.backgroundImage = `url("${
        backgrounds[backgroundIndex % backgrounds.length]
      }")`;
      backgroundIndex += 1;
    }, 1000);
  };

  /*Add a new method to the Controller prototype called renderPorts. 
  It should have a parameter of ports which will receive an array as 
  an argument.  */
  Controller.prototype.renderPorts = function renderPorts(ports) {
    /* Inside renderPorts, use document.querySelector to find the ports 
    div and assign it to a variable named portsElement. 
    Set portElement's width to 0px. */
    const portsElement = document.querySelector("#ports");
    portsElement.style.width =
      "0px"; /* We set a width of 0 as we want JS to manipulate the width of this container every time we add a child element.*/

    /* You should then iterate over the array passed to the ports 
    parameter using forEach and for each one should render a new div 
    to the DOM with the class port*/
    ports.forEach((port, index) => {
      const newPortElement = document.createElement("div");
      newPortElement.className = "port";
      newPortElement.dataset.portName = port.name;
      newPortElement.dataset.portIndex = index;
      /* ^Each new port element should have data attributes of portName 
      and portIndex set to the name of the port and the port's index in 
      the ports array respectively.
      Data attributes allow us to store our own custom attributes on 
      HTML elements. This will be handy for differentiating each port 
      we add to the ports array. */
      portsElement.appendChild(newPortElement);
      /* ^Firstly we create a new DOM element with document.createElement.
      At this point it does not exist on the page, only in JavaScript. 
      We set it's className attribute to our .port selector. 
      Note that in JS we reference to className despite the fact the 
      HTML attribute is class. This is because class is a reserved word in 
      JavaScript. Lastly, we call appendChild on 
      portsElement (the #ports div). 
      This will insert our new element newPortElement into the DOM as 
      a child of the #ports div.*/
      const portsElementWidth = parseInt(portsElement.style.width, 10);
      portsElement.style.width = `${portsElementWidth + 256}px`;
      /* ^This should be placed inside the forEach (as we want it to 
        repeat for every port) and should take place after you've appended 
        newPortElement to the DOM. There are some new concepts here. 
        If you call parseInt with a string such as 256px then it will 
        automatically extract the number part of the string. The 10 is 
        a radix - you don't need to remember this (it's all very 
        mathematical) but a radix of 10 indicates that we want to convert 
        from a decimal number. We now have an integer (whole number) 
        of 256 assigned to portsElementWidth. We use the power of 
        template literals to do a JavaScript expression within a string, 
        which evaluates to our previous width plus 256, and then we add 
        px on the end (as we're setting a CSS property).*/
    });
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
