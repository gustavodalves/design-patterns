import Order from "../Order";
import CanceledState from "./Canceled";
import { OrderState } from "./protocol";

export default class RefusedState implements OrderState {
    constructor(
        private order: Order
    ) {}

    approvePayment(): void {
        throw new Error(`Cannot approve payment for an order in the refused state.`);
    }

    cancelOrder(): void {
        console.log("Order canceled.");
        this.order.setState(new CanceledState(this.order))
    }

    refusePayment(): void {
        throw new Error(`Payment has already been refused for this order.`);
    }

    shipOrder(): void {
        throw new Error(`Cannot ship order in the refused state.`);
    }
}