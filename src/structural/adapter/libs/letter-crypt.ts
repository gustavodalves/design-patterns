import { Crypt } from "../interfaces/crypto";
import { Decrypt } from "../interfaces/decrypto";

type T = string

export class LetterCrypt implements Crypt<T>, Decrypt<T> {
    encrypt(payload: T): string {
        return `${payload[0]}${payload}${payload[payload.length - 1]}`
    }

    decrypt(encrypted: string): T {
        const wordDecrypted =  encrypted.split('').filter((_, index) => index !== encrypted.length - 1 && index !== 0).join('')
        return wordDecrypted
    }
}
