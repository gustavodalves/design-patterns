import Employee from '../employee/Employee';

export default abstract class Vehicle {
    constructor(
        readonly level: string,
        readonly employee: Employee
    ) {}

    getLevel () {
        return this.level;
    }
}
