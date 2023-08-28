import { IConcretPhoneBuilder } from "./interfaces/builder/concret-phone";

export class PhoneCreator {
    constructor(
        private readonly builder: IConcretPhoneBuilder
    ) {}

    create() {
       return this.builder
        .setBattery()
        .setBody()
        .setModel()
        .build()
    }
}
