export class Phone {
    constructor(
        public readonly model: string,
        public readonly battery: number,
        public readonly body: string,
    ) {}

    getDescription() {
        return `MODEL: ${this.model} BATTERY: ${this.battery} BODY: ${this.body}`
    }
}