import Cart from "../Cart";
import CartCalculatorStrategy from "./Protocol";

export default class CartCalculatorInDebit implements CartCalculatorStrategy {
    calculate(cart: Cart): number {
        return cart.getTotal() - 1
    }
}