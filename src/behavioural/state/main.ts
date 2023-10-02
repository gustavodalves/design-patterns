import { ShoppingOrder } from './Order';

const order = new ShoppingOrder();
order.approvePayment();
order.waitPayment();
order.shipOrder();
order.rejectPayment();
order.approvePayment();
order.shipOrder();
