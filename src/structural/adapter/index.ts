import CryptoAdapter from './adapters/Crypto';
import Id from './id';

const id = new Id(
    new CryptoAdapter
);

console.log(id);
