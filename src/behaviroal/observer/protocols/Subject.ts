import Observer from "./Observer";

export default interface Subject {
    observers: Observer[]

    subcribe(observer: Observer): void
    unsubscribe(observer: Observer): void
    notify(observer: Observer): void
    notifyAll(): void
}
