import {Vehicle} from '../vehicle'

export interface VehicleFactory {
    getVehicle(vechile: string): Vehicle
}
