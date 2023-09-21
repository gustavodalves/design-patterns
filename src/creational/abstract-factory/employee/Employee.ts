export default abstract class Employee {
    constructor(
        readonly name: string,
        readonly level: string
    ) {}

    getLevel () {
        return this.level
    }
}
