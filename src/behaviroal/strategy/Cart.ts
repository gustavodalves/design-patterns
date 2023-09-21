import Product from "./Product"
import CartCalculatorStrategy from "./strategies/Protocol"

export default class Cart {
    private products: Product[] = []

    constructor(
        private readonly cartCalculator: CartCalculatorStrategy
    ) {}

    addProduct(product: Product) {
        this.products.push(product)
    }

    addProducts(products: Product[]) {
        for (const product of products) {
            this.addProduct(product)
        }
    }

    getTotal() {
        return this.products.reduce((acc, item) => acc + item.value, 0)
    }

    getTotalWithDiscount() {
        return this.cartCalculator.calculate(this)
    }
}