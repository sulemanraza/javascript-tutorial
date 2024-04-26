// JavaScript data types and categories

// 1. Primitive data types in JavaScript are immutable values that have no properties or methods. There are 7 primitive data types in JavaScript. They are: Number, String, Boolean, Undefined, Null, Symbol, BigInt, NaN. 
// example reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values

// 1.1. Number
let num = 10;
console.log(num);
console.log(typeof num);

// 1.2. String
let name = "Suleman";
console.log(name);
console.log(typeof name);

// 1.3. Boolean
let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);

// 1.4. Undefined
let a;
console.log(a);
console.log(typeof a);

// 1.5. Null
let b = null;
console.log(b);

// 1.6. Symbol
const sym = Symbol();
console.log(sym);
console.log(typeof sym);

// 1.7. BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(typeof bigInt);

// 1.8. NaN
let notANumber = NaN;
console.log(notANumber);
console.log(typeof notANumber);
 


// 2. Non-primitive data types

// 2.1. Object
const person = {
  name: "Suleman",
  age: 25,
};

console.log(person);
console.log(typeof person);


// 2.2. Array
const fruits = ["apple", "banana", "mango"];
console.log(fruits);
console.log(typeof fruits);


// 2.3. Function
function greet() {
  console.log("Hello, World!");
}

console.log(greet);
console.log(typeof greet);

// 2.4. Date
const today = new Date();
console.log(today);
console.log(typeof today);



