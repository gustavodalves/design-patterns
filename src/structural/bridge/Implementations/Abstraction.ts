import Implementor from '../Implementors/contract';

export default abstract class Abstraction {
    constructor(protected implementor: Implementor) {}

    abstract operation(): void;
}
