import { LetterCrypt } from './libs/letter-crypt';
import { NumberCrypt } from './libs/number-crypt';

const payload = 'gustavo';

const numberCrypt = new NumberCrypt();

const numberEncrypted = numberCrypt.encrypt(payload);
const numberDecypted = numberCrypt.decrypt(numberEncrypted);

console.log(numberEncrypted, numberDecypted);

const letterCrypt = new LetterCrypt();

const letterEncrypted = letterCrypt.encrypt(payload);
const letterDecypted = letterCrypt.decrypt(letterEncrypted);

console.log(letterEncrypted, letterDecypted);
