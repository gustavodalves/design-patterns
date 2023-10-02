import Implementor from './contract';

export default class ConcreteImplementorB implements Implementor {
    implementedOperation(): void {
        console.log('Concrete Implementor B is being executed');
    }
}
