import { FlyweightBreadFactory } from "./factories/Bread";

export class Customer {
    private flyweightFactory: FlyweightBreadFactory;

    constructor(flyweightFactory: FlyweightBreadFactory) {
        this.flyweightFactory = flyweightFactory;
    }

    placeOrder(breadTypeName: string, quantity: number): void {
        const breadType = this.flyweightFactory.getBreadType(breadTypeName);

        for (let i = 0; i < quantity; i++) {
            console.log(`Bread: ${breadType.make()}`);
        }
    }
}