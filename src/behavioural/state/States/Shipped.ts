import Order from "../Order";
import { OrderState } from "./protocol";

export default class ShippedState implements OrderState {
    constructor(
        private order: Order
    ) {}

    approvePayment(): void {
        throw new Error(`Cannot approve payment for an already shipped order.`);
    }

    cancelOrder(): void {
        throw new Error(`Cannot cancel a shipped order.`);
    }

    refusePayment(): void {
        throw new Error(`Cannot refuse payment for an already shipped order.`);
    }

    shipOrder(): void {
        throw new Error(`Order has already been shipped.`);
    }
}
