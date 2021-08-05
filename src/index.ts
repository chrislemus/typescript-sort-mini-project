import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const charactersCollection = new CharactersCollection('Xaayb')
const numbersCollection = new NumbersCollection([10,3,-5,0])

const sorter = new Sorter(charactersCollection)
sorter.sort();
console.log(charactersCollection.data)