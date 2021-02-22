
// Car class OLD WAY
function Car(make, model) {
    this.make = make 
    this.model = model 
    this.vin = ""
}

/*
function drive() {
    console.log("Car is driving...")
} */

/*
function brake() {
    console.log("Car is braking...")
} */

//Car.prototype.drive = drive 
//Car.prototype.brake = brake 

// Anonymous functions 
Car.prototype.drive = function() {
    console.log("Car is driving...")
}

Car.prototype.brake = function() {
    console.log("Car is braking...")
}

Car.prototype.changeGear = function(gearNo) {
    console.log("Gear changed to " + gearNo)
}

//drive() 
//brake() 

let car = new Car("Honda", "Accord")
car.isElectric = false 
console.log(car)

car.performService = function() {
    console.log("Perform service of car...")
}

car.drive() 
car.brake() 
car.changeGear(4)
car.performService() 

let anotherCar = new Car("Tesla", "Model X")
console.log(anotherCar)


//let car2 =  new Car("Toyota", "Camry")
//console.log(car2)

// Template Literals similar to f String in Python 

let emptyObject = {}
emptyObject.firstName = "John"
emptyObject.lastName = "Doe"
console.log(emptyObject)

// MODERN WAY ES6 -> 2015 
class ElectricCar {
    constructor(make, model, range) { // __init__ 
        this.make = make 
        this.model = model 
        this.range = range 
        this.vin = ""
        this.speed = 0 
    }

    drive() {
        console.log("drive")
        this.speed += 10 
    }

    brake() {
        console.log("brake")
        this.speed -= 10 
    }
}

let electricCar = new ElectricCar("Tesla", "Model X", 200)
electricCar.drive() 
electricCar.brake() 