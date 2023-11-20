import { BreadDecorator } from "./Decorator";

export default class BreadWithSalami extends BreadDecorator {
    getPrice(): number {
        return super.getPrice() + 3
    }
}