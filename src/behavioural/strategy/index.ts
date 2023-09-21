import Cart from './Cart';
import CartCalculatorInCash from './strategies/CartCalculatorInCash';
import CartCalculatorInDebit from './strategies/CartCalculatorInDebit';

import Product from './Product';

const product1 = new Product(2);
const product2 = new Product(3);

const cartCalculatorInCash = new CartCalculatorInCash();
const cartCalculatorInDebit = new CartCalculatorInDebit();

const cart1 = new Cart(cartCalculatorInCash);
cart1.addProducts([product1, product2]);

const cart2 = new Cart(cartCalculatorInDebit);
cart2.addProducts([product1, product2]);

console.log('cart1: ', cart1.getTotalWithDiscount());
console.log('cart2: ', cart2.getTotalWithDiscount());
