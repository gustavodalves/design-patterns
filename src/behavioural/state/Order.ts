import PendingState from "./States/Pending";
import { OrderState } from "./States/protocol";

export enum OrderStatus {
    Pending = "pending",
    Approved = "approved",
    Shipped = "shipped",
    Recused = "recused",
    Canceled = "canceled",
}

class StateFactory {
    static generate(status: string, order: Order) {
        if(status === OrderStatus.Pending) return new PendingState(order)
        return new PendingState(order)
    }
}

export default class Order {
    private state: OrderState

    private constructor(
        private value: number,
        status: OrderStatus
    ) {
        this.state = (StateFactory.generate(status, this))
    }

    static create(value: number) {
        return new Order(value, OrderStatus.Pending)
    }

    setState(
        orderState: OrderState
    ) {
        this.state = orderState
    }

    approvePayment() {
        this.state.approvePayment()
    }

    ship() {
        this.state.shipOrder()
    }

    refusePayment() {
        this.state.refusePayment()
    }

    cancel() {
        this.state.cancelOrder()
    }
}
