import Aggregator from './aggregate';
import ConcreteIterator from './array';
import Iterator from './contract';

export default class Values<T> implements Aggregator<T> {
    private collection: T[] = [];

    constructor(collection: T[]) {
        this.collection = collection;
    }

    public createIterator(): Iterator<T> {
        return new ConcreteIterator<T>(this.collection);
    }
}
