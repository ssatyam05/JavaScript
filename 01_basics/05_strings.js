const name = "satyam";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('satyam-05');

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherstring = gameName.slice(-8, 4);
console.log(anotherstring);

const string1 = ' satyam ';

console.log(string1);
console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

const url = "ssatyam05";
console.log(url.replace('05', '07'));
console.log(url.includes('05'));

console.log(gameName.split('-'));

console.log(gameName.small('s'));