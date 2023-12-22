

function Vehical(model, brand, speed, fueltype) {
    this.model = model;
    this.brand = brand;
    this.speed = speed;
    this.fueltype = fueltype;
}

Vehical.prototype.accelator = function(inc) {
    this.speed += inc;
};

Vehical.prototype.break = function(dec) {
    this.speed -= dec;
};


Vehical.prototype.refuel = function() {
  console.log(" indicating the vehicle is refueling")
};


let manufacture = new Vehical("Toyota", "Swift", 45, "petrol");
console.log(manufacture); // Display initial state

manufacture.accelator(5);
manufacture.break(5);
manufacture.refuel();
console.log(manufacture); // Display state after acceleration


