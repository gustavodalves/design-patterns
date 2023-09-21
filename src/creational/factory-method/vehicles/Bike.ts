import Vechile from "./Protocol";

export default class Bike implements Vechile {
    constructor(
        readonly name: string
    ) {}
}