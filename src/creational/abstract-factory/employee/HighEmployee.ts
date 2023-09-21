import Employee from './Employee';

export default class HighEmployee extends Employee {
    constructor(
        name: string,
    ) {
        super(name, 'high');
    }
}
