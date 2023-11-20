import { GameStatus } from "../GameStatus";

export class GameStatusPrototype {
    constructor(
        private readonly gameStatus: GameStatus
    ) {}

    getGameStatus() {
        return new GameStatus(
            this.gameStatus.level,
            this.gameStatus.score
        )
    }
}
