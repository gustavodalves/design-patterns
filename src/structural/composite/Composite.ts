import { Product } from './Product';

export default class ProductComposite extends Product {
    private children: Product[] = [];

    add(product: Product): void {
        this.children.push(product);
    }

    remove(product: Product): void {
        const productIndex = this.children.indexOf(product);
        if (productIndex !== -1) this.children.splice(productIndex, 1);
    }

    getPrice(): number {
        return this.children.reduce((acc, item) => acc + item.getPrice(), 0);
    }
}
