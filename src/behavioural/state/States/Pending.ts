import Order from "../Order";
import ApprovedPaymentState from "./ApprovedPayment";
import CanceledState from "./Canceled";
import RefusedState from "./RefusePayment";
import { OrderState } from "./protocol";

export default class PendingState implements OrderState {
    constructor(
        private order: Order
    ) {}

    approvePayment(): void {
        console.log("Payment approved. Moving to the approved state.");
        this.order.setState(new ApprovedPaymentState(this.order));
    }

    cancelOrder(): void {
        console.log("Order canceled.");
        this.order.setState(new CanceledState(this.order));
    }

    refusePayment(): void {
        console.log("Order Refused")
        this.order.setState(new RefusedState(this.order))
    }

    shipOrder(): void {
        throw new Error(`Cannot ship order in the pending state.`);
    }
}