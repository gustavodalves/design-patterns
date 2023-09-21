import Address from './Address';
import Prototype from './Protocol';

export default class Person implements Prototype {
    public address: Address[] = [];
    constructor(
        public name: string,
        public password: string
    ) {}

    addAddress(address: Address) {
        this.address.push(address);
    }

    clone(): this {
        const me = Object.create(this);
        me.address = this.address.map(item => item.clone());

        return me;
    }
}
