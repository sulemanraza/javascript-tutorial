// JavaScript Boolean object is an object wrapper for a boolean value.
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// 1. Boolean object
let bool = new Boolean(true);
console.log(bool); // [Boolean: true]
console.log(typeof bool); // object

// 2. Boolean primitive
let isTrue = true;
console.log(isTrue); // true
console.log(typeof isTrue); // boolean


// 3. Boolean object vs Boolean primitive
let boolObj = new Boolean(false);
let boolPrim = false;
console.log(boolObj); // [Boolean: false]
console.log(boolPrim); // false


// what is constructor property of an object?
// The constructor property returns a reference to the Object constructor function that created the instance object.
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
console.log(boolObj.constructor); // [Function: Boolean]
console.log(boolPrim.constructor); // [Function: Boolean]