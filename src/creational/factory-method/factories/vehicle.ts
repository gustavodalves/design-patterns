import { VehicleFactory } from "../interfaces/factories/vehicle";
import { Vehicle } from "../interfaces/vehicle";
import { Bike } from "../models/bike";
import { Truck } from "../models/truck";

export class ConcreteVehicleFactory implements VehicleFactory {
    getVehicle(vehicle: string): Vehicle {
        const vehicleInLowerCase = vehicle.toLocaleLowerCase()
        switch(vehicleInLowerCase) {
            case 'bike': return new Bike()
            case 'truck': return new Truck()
            default: throw new Error('Not exists this vehicle')
        }
    }
}