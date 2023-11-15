import { ConcreteElement } from "./Element";
import { ConcreteVisitor } from "./Visitor";

const element = new ConcreteElement();
const visitor = new ConcreteVisitor();

element.accept(visitor);