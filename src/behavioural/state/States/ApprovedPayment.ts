import Order from "../Order";
import ShippedState from "./Shipped";
import { OrderState } from "./protocol";

export default class ApprovedPaymentState implements OrderState {
    constructor(
        private order: Order
    ) {}

    approvePayment(): void {
        throw new Error("Order has already been approved. Cannot approve payment again.");
    }

    cancelOrder(): void {
        throw new Error("Cannot cancel order once payment is approved.");
    }

    refusePayment(): void {
        throw new Error("Cannot refuse payment for an order with an approved payment status.");
    }

    shipOrder(): void {
        this.order.setState(new ShippedState(this.order))
        console.log("Order is shipping...");
    }
}
