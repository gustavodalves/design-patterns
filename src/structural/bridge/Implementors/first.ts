import Implementor from './contract';

export default class ConcreteImplementorA implements Implementor {
    implementedOperation(): void {
        console.log('Concrete Implementor A is being executed');
    }
}
