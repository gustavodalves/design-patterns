import { Colleague } from '../Mediate';

export default interface Mediator {
    send(message: string, colleague: Colleague): void
};
