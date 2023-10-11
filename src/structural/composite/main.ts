import ProductComposite from './Composite';
import ProductLeaf from './Leaf';

const videogame = new ProductLeaf('PS5', 100);
const smartphone = new ProductLeaf('smartphone', 2000);

const box = new ProductComposite();
box.add(videogame);
box.add(smartphone);

const boxInsertInBox = new ProductComposite();
boxInsertInBox.add(videogame);
box.add(boxInsertInBox);

console.log(box.getPrice());
