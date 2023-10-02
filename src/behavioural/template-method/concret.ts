import { BaseClass } from './base';

export default class Concret extends BaseClass {
    method1(): void {
        console.log('method 1 in concret');
    }

    method2(): void {
        console.log('method 2 in concret');
    }
}
