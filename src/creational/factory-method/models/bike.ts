import { Vehicle } from "../interfaces/vehicle";

export class Bike implements Vehicle {
    drive(miles: number): void {
        console.log(`drive the bike: ${miles}`)
    }
}