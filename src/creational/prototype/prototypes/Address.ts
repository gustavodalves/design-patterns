import Prototype from "./Protocol";

export default class Address implements Prototype {
    constructor(
        readonly city: string
    ) {}

    clone(): this {
        return Object.create(this)
    }
}