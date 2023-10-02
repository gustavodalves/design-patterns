import Implementor from '../Implementors/contract';
import Abstraction from './Abstraction';

export default class ConcreteAbstractionA extends Abstraction {
    constructor(
        implementor: Implementor
    ) {
        super(implementor);
    }

    operation(): void {
        console.log('Concrete Abstraction A is being executed');
        this.implementor.implementedOperation();
    }
}
