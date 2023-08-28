import { ConcreteVehicleFactory } from "./factories/vehicle";

const factory = new ConcreteVehicleFactory()

const bike = factory.getVehicle('bike')
bike.drive(20)

const truck = factory.getVehicle('truck')
truck.drive(100)
