import { Visitor } from "./Visitor";

interface Element {
    accept(visitor: Visitor): void;
}

export class ConcreteElement implements Element {
    accept(visitor: Visitor): void {
        visitor.visitConcreteElement(this);
    }

    operation(): string {
        return "ConcreteElement operation";
    }
}