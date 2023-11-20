import { GameStatus } from "./GameStatus";
import { GameStatusMemento } from "./mementos/GameStatus";
import { GameStatusPrototype } from "./prototypes/GameStatus";

export class Game {
    private status: GameStatus;
    private mementos: GameStatusMemento[] = []

    constructor() {
        this.status = new GameStatus(1, 0);
    }

    play(): void {
        this.status.score += 10;
        this.status.level += 1;
        console.log("Playing the game...");
        this.status.displayState();
    }

    save(): void {
        this.mementos.push(new GameStatusMemento(new GameStatusPrototype(this.status).getGameStatus()));
    }

    restore(): void {
        const lastMemento = this.mementos[this.mementos.length - 1]
        console.log(this.mementos)
        if(!lastMemento) throw new Error("dont have more memento")
        this.status = lastMemento.status;
        this.mementos.pop()
    }
}