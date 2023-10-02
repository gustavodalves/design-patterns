import Iterator from './contract';

export default class ConcreteIterator<T> implements Iterator<T> {
    private collection: T[] = [];
    private position: number = 0;

    constructor(collection: T[]) {
        this.collection = collection;
    }

    next(): T | null {
        const result = this.collection[this.position];
        this.position += 1;

        return result || null;
    }

    hasNext(): boolean {
        return this.position < this.collection.length;
    }
}
