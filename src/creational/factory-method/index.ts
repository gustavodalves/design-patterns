import BikeFactory from "./factories/Bike";
import CarFactory from "./factories/Car";

const bike = new BikeFactory().generate("bmx")
const car = new CarFactory().generate("bmw x1")

console.log(bike, car)
