import Vechile from "./Protocol";

export default class Car implements Vechile {
    constructor(
        readonly name: string
    ) {}
}