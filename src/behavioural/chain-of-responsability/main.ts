import CoffeeHandler from './handlers/Coffe';
import MilkHandler from './handlers/Milk';
import TeaHandler from './handlers/Tea';

const coffeeHandler = new CoffeeHandler();
const teaHandler = new TeaHandler();
const milkHandler = new MilkHandler();

coffeeHandler.setNext(teaHandler);
teaHandler.setNext(milkHandler);

coffeeHandler.handleRequest('coffee');
coffeeHandler.handleRequest('tea');
coffeeHandler.handleRequest('milk');
coffeeHandler.handleRequest('sugar');
