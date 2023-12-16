import Order from "./Order";

const order = Order.create(900)
order.approvePayment()
order.ship()
