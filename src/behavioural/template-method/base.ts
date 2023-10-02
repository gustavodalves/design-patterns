export abstract class BaseClass {
    abstract method1(): void

    abstract method2(): void

    private method3(): void {
        console.log('method 3 in base class');
    }

    public templateMethod(): void {
        this.method1();
        this.method3();
        this.method2();
    }
}
