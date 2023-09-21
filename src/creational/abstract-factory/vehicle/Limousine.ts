import Employee from '../employee/Employee';
import Vehicle from './Vechile';

export default class Limousine extends Vehicle {
    constructor(employee: Employee) {
        super('limousine', employee);
    }
}
