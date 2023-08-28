export interface Crypt<T> {
    encrypt(payload: T): string
}
