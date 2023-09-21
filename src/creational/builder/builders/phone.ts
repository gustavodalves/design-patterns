import { Phone } from '../models/phone';

export class PhoneBuilder {
    protected model: string = '';
    protected battery: number = 0;
    protected body: string = '';

    setModel(model: string) {
        this.model = model;
        return this;
    }

    setBattery(battery: number) {
        this.battery = battery;
        return this;
    }

    setBody(body: string) {
        this.body = body;
        return this;
    }

    build(): Phone {
        return new Phone(
            this.model,
            this.battery,
            this.body
        );
    }
}
