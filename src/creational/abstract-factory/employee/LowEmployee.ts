import Employee from "./Employee";

export default class LowEmployee extends Employee {
    constructor(
        name: string,
    ) {
        super(name, "low")
    }
}
