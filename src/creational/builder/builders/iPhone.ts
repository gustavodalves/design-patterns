import { IConcretPhoneBuilder } from "../interfaces/builder/concret-phone";
import { Phone } from "../models/phone";
import { PhoneBuilder } from "./phone";

export class IPhonAppleBuilder extends PhoneBuilder implements IConcretPhoneBuilder {
    setModel() {
        return super.setModel('14 pro max')
    }

    setBattery() {
        return super.setBattery(9000)
    }

    setBody() {
       return super.setBody('aluminium')
    }

    build(): Phone {
        return new Phone(
            this.model,
            this.battery,
            this.body
        )
    }
}