import { IConcretPhoneBuilder } from "../interfaces/builder/concret-phone";
import { Phone } from "../models/phone";
import { PhoneBuilder } from "./phone";

export class GalaxyBuilder extends PhoneBuilder implements IConcretPhoneBuilder {
    setModel() {
        return super.setModel('s23 ultra')
    }

    setBattery() {
        return super.setBattery(2000)
    }

    setBody() {
       return super.setBody('plastic')
    }

    build(): Phone {
        return new Phone(
            this.model,
            this.battery,
            this.body
        )
    }
}
