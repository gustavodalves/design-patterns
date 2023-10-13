import { Colleague } from '../Mediate';
import { ConcreteColleagueA } from '../MediateA';
import { ConcreteColleagueB } from '../MediateB';

export default class ConcreteMediator {
    public colleagueA = new ConcreteColleagueA(this);
    public colleagueB = new ConcreteColleagueB(this);

    public send(message: string, colleague: Colleague): void {
        if (colleague === this.colleagueA) {
            this.colleagueB.receive(message);
        } else {
            this.colleagueA.receive(message);
        }
    }
}
