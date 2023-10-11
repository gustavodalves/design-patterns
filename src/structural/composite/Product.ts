export abstract class Product {
    abstract getPrice(): number

    abstract add(product: Product): void
    abstract remove(product: Product): void
}
