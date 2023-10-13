import Mediator from './mediator/Mediator';

const mediator = new Mediator();

mediator.colleagueA.send('Hello from Colleague A');
mediator.colleagueB.send('Hi from Colleague B');
