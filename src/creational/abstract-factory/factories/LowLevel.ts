import LowEmployee from '../employee/LowEmployee';
import Mini from '../vehicle/Mini';
import CreateVehicleEmployeeFactory from './Protocol';

export default class LowLevelCreateVehicleEmployeeFactory implements CreateVehicleEmployeeFactory {
    createVehicle(employeeName: string) {
        return new Mini(this.createEmployee(employeeName));
    }

    createEmployee(name: string) {
        return new LowEmployee(name);
    }
}
