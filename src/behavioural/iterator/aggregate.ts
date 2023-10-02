import Iterator from './contract';

export default interface Aggregator<T> {
    createIterator(): Iterator<T>;
};
