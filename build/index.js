"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
