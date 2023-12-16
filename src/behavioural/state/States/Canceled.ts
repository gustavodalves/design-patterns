import Order from "../Order";
import { OrderState } from "./protocol";

export default class CanceledState implements OrderState {
    constructor(
        private order: Order
    ) {}

    approvePayment(): void {
        throw new Error(`Cannot approve payment for a canceled order.`);
    }

    cancelOrder(): void {
        throw new Error(`Order is already canceled.`);
    }

    refusePayment(): void {
        throw new Error(`Cannot refuse payment for a canceled order.`);
    }

    shipOrder(): void {
        throw new Error(`Cannot ship a canceled order.`);
    }
}