import HighEmployee from "../employee/HighEmployee";
import Limousine from "../vehicle/Limousine";
import CreateVehicleEmployeeFactory from "./Protocol";

export default class HighLevelCreateVehicleEmployeeFactory implements CreateVehicleEmployeeFactory {
    createVehicle(employeeName: string) {
        return new Limousine(this.createEmployee(employeeName))
    }

    createEmployee(name: string) {
        return new HighEmployee(name)
    }
}