import { ShoppingOrder } from '../Order';
import { OrderApproved } from './Approved';
import { ShoppingOrderState } from './Contract';
import { OrderRejected } from './Reject';

export class OrderPending implements ShoppingOrderState {
    private name = 'OrderPending';

    constructor(private order: ShoppingOrder) {}

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        this.order.setState(new OrderApproved(this.order));
    }

    rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order));
    }

    waitPayment(): void {
        console.log('O pedido já está no estado pagamento pendente.');
    }

    shipOrder(): void {
        console.log('Não posso enviar o pedido com pagamento pendente.');
    }
}
