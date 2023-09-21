import Employee from '../employee/Employee';
import Vehicle from './Vechile';

export default class Mini extends Vehicle {
    constructor(employee: Employee) {
        super('mini', employee);
    }
}
