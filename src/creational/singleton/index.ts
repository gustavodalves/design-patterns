import { Singleton } from './singleton';

const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton === singleton2);
