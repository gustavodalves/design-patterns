import { BreadDecorator } from './Decorator';

export class BreadWithCreamCheeseDecorator extends BreadDecorator {
    getPrice(): number {
        return super.getPrice() + 1
    }
}
