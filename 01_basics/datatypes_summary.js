// Datatypes
// Javascript is dynamic type;

// 1. Premitive => (String, Number, Boolean, null, undefined, Symbol, BigInt)

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 123456789544666n;

// 2. Non-Premitive (Referense Type) => (Array, objects, Functions);

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "satyam",
    age: 25,
};

const myFunction = function(){
    console.log("Hello World");
};
console.log(typeof bigNumber);
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);

