function Vehicle (engine, stereo, tirePressure, make, model) {
    this.engine = engine;
    this.stereo = stereo;
    this.tirePressure = tirePressure;
    this.make = make;
    this.model = model;

    this.makeAndModel = function () {
        return `${make} ${model}`;
    }

    this.fillTire = function (airIn) {
        this.tirePressure += airIn;
    }
}

function Car () {

}

function Truck () {

}