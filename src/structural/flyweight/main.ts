import { Customer } from "./Customer";
import { FlyweightBreadFactory } from "./factories/Bread";

const flyweightFactory = new FlyweightBreadFactory();
const customer = new Customer(flyweightFactory);

console.log("Customer: I'll order some common breads:");
customer.placeOrder("Common bread", 3);

console.log("\nCustomer: I'll order more common breads:");
customer.placeOrder("Common bread", 2);