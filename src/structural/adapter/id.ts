import { UUIDGenerator } from './interfaces/UUID';

export default class Id {
    public readonly value: string;
    constructor(
        private readonly uuidGenerator: UUIDGenerator,
    ) {
        this.value = uuidGenerator.generate();
    }
}
