import Mediator from './mediator/Mediator';

export abstract class Colleague {
    public mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    abstract send(msg: string): void
    abstract receive(msg: string): void
}
