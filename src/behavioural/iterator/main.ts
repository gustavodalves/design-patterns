import Values from './values';

const arr = [1, 7, 21, 657, 3, 2, 765, 13, 65];
const values = new Values(arr);
const it = values.createIterator();

while (it.hasNext()) {
    console.log(it.next());
}
