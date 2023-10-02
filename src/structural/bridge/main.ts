import Abstraction from './Implementations/Abstraction';
import ConcreteAbstractionA from './Implementations/first';
import ConcreteAbstractionB from './Implementations/second';
import ConcreteImplementorA from './Implementors/first';
import ConcreteImplementorB from './Implementors/second';

const implementorA = new ConcreteImplementorA();
const abstractionA: Abstraction = new ConcreteAbstractionA(implementorA);
abstractionA.operation();

const implementorB = new ConcreteImplementorB();
const abstractionB: Abstraction = new ConcreteAbstractionB(implementorB);
abstractionB.operation();
