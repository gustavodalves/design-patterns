import { ConcreteElement } from "./Element";

export interface Visitor {
    visitConcreteElement(element: ConcreteElement): void;
}

export class ConcreteVisitor implements Visitor {
    visitConcreteElement(element: ConcreteElement): void {
        console.log(`Visiting ConcreteElement. Result: ${element.operation()}`);
    }
}
