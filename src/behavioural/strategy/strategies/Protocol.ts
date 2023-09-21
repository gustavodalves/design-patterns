import Cart from "../Cart"

export default interface CartCalculatorStrategy {
    calculate(cart: Cart): number
}
