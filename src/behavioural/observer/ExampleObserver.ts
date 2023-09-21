import Observer from './protocols/Observer';

export default class ExampleObserver implements Observer {
    constructor(readonly id: number) {}

    update(): void {
        console.log('called: ', this.id);
    }
}
