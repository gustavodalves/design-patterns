import Employee from '../employee/Employee';
import Vehicle from '../vehicle/Vechile';

export default interface CreateVehicleEmployeeFactory {
    createVehicle(employeeName: string): Vehicle
    createEmployee(employeeName: string): Employee
};
