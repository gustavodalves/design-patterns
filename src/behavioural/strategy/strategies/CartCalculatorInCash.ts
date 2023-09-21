import Cart from "../Cart";
import CartCalculatorStrategy from "./Protocol";

export default class CartCalculatorInCash implements CartCalculatorStrategy {
    calculate(cart: Cart): number {
        return cart.getTotal() - 2
    }
}