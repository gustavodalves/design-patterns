import { Bread } from "../protocols/Bread";

export class BreadDecorator implements Bread {
  constructor(protected product: Bread) {}

  getPrice(): number {
    return this.product.getPrice()
  }
}