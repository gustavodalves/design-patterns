import { Phone } from "../../models/phone"

export interface IPhoneBuilder {
    setModel(model: string): this
    setBattery(battery: number): this
    setBody(body: string): this
    build(): Phone 
}
