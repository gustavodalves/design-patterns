import { Colleague } from './Mediate';
import Mediator from './mediator/Mediator';

export class ConcreteColleagueA extends Colleague {
    constructor(mediator: Mediator) {super(mediator);}

    public send(message: string): void {
        this.mediator.send(message, this);
    }

    public receive(message: string): void {
        console.log(`Colleague A received: ${message}`);
    }
}
