import { UUIDGenerator } from '../interfaces/UUID';

export default class CryptoAdapter implements UUIDGenerator {
    generate(): string {
        return crypto.randomUUID();
    }
}
