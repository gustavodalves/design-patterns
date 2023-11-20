import { BreadWithCreamCheeseDecorator } from "./decorators/BreadWithCreamCheese";
import BreadWithSalami from "./decorators/BreadWithSalami";
import { Bread } from "./protocols/Bread";

const bread: Bread = {
    getPrice: () => {
        return 8
    }
}

const breadWithCreamCheese = new BreadWithCreamCheeseDecorator(bread)
const breadWithSalami = new BreadWithSalami(bread)

const breadWithCreamCheeseAndSalami = new BreadWithSalami(breadWithCreamCheese)

console.log(
    `bread price: ${bread.getPrice()}`
)

console.log(
    `bread with salami price: ${breadWithSalami.getPrice()}`
)

console.log(
    `bread with cream cheese price: ${breadWithCreamCheese.getPrice()}`
)

console.log(
    `bread with cream cheese and salami price: ${breadWithCreamCheeseAndSalami.getPrice()}`
)