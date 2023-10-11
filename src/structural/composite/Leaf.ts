/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from './Product';

export default class ProductLeaf extends Product {
    constructor(
        public name: string,
        private price: number
    ) {super();}

    getPrice(): number {
        return this.price;
    }

    add(product: Product): void {}
    remove(product: Product): void {}
}
