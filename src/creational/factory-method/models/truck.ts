import { Vehicle } from "../interfaces/vehicle";

export class Truck implements Vehicle {
    drive(miles: number): void {
        console.log(`drive truck: ${miles}`)
    }
}
