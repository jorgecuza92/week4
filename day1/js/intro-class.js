// Car class
function Car(make, model) {
  this.make = make
  this.model = model
}

function drive() {
  console.log("Car is driving...")
}

function brake() {
  console.log("car is braking...")
}

// Car.prototype.drive = drive
// Car.prototype.brakeCar = brake

// ANONYMOUS FUNCTIONS //
Car.prototype.drive = function() {
  console.log("Car is driving....")
}

Car.prototype.brakeCar = function() {
  console.log("Car is braking....")
}

Car.prototype.changeGear = function(gearNo) {
  console.log("Gear changed to " + gearNo)
}

// drive()
// brake()

let car = new Car("Honda", "Accord")
car.isElectric = false // attach property to Car class
console.log(car)

car.performService = function() {
  console.log("Perform service of car...")
}

car.drive() //logs Car is driving...
car.brakeCar()
car.performService()
car.changeGear(3)


// let car2 = new Car("Toyota", "Camry")
// console.log(car2)


// MODERN WAY ES6 (EST. 2015-16) //
class ElectricCar {
  constructor(make, model, range) { // __init__ = constructor()
    this.make = make
    this.model = model
    this.range = range
    this.vin = ""
  }

  drive() {
    console.log("drive..")
    this.speed += 10
  }

  brake() {
    console.log("brake..")
    this.speed -= 10
  }
}

let electricCar = new ElectricCar("Tesla", "Model X", 200)
electricCar.drive()
electricCar.brake()