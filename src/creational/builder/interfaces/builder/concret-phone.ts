import { IPhoneBuilder } from "./phone";

export interface IConcretPhoneBuilder extends IPhoneBuilder {
    setModel(): this
    setBattery(): this
    setBody(): this
}
