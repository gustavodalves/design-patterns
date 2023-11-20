export class GameStatus {
    constructor(public level: number, public score: number) {}

    displayState(): void {
        console.log(`Level: ${this.level}, Score: ${this.score}`);
    }
}
