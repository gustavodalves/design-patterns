import Observer from './protocols/Observer';
import Subject from './protocols/Subject';

export default class ExampleSubject implements Subject {
    public observers: Observer[] = [];

    subcribe(observer: Observer): void {
        this.observers.push(observer);
    }

    notify(observer: Observer): void {
        observer.update();
    }

    notifyAll(): void {
        for (const observer of this.observers) {
            this.notify(observer);
        }
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(item => item !== observer);
    }
}
