// JavaScript arrays are used to store multiple values in a single variable.
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 1. Array declaration
// 1.1. Using array literal
const fruits = ["apple", "banana", "mango"];
// console.log(fruits); // [ 'apple', 'banana', 'mango' ]
// console.log(typeof fruits); // object

// 1.2. Using new keyword
const cars = new Array("Toyota", "Honda", "BMW");
// console.log(cars); // [ 'Toyota', 'Honda', 'BMW' ]
// console.log(typeof cars); // object

// 2. Accessing array elements
// console.log(fruits[0]); // apple
// console.log(fruits[1]); // banana
// console.log(fruits[2]); // mango


// 3. Array properties
// 3.1. length
// console.log(fruits.length); // 3 (number of elements in the array)

// 4. Array methods
// 4.1. push() - add element to the end of the array
// console.log(fruits.push("orange")); // 4 (new length of the array)
// console.log(fruits);  
 

// 4.2. pop() - remove element from the end of the array
// console.log(fruits.pop()); // orange (removed element)
// console.log(fruits.pop()); // [ 'apple', 'banana', 'mango' ]
// console.log(fruits);


// 4.3. shift() - remove element from the beginning of the array
// console.log(fruits.shift()); // apple (removed element)
// console.log(fruits); // [ 'banana', 'mango' ]


// 4.4. unshift() - add element to the beginning of the array 
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
// console.log(fruits.unshift("orange")); // 4 (new length of the array)
// console.log(fruits); // [ 'orange', 'apple', 'banana', 'mango' ]

// 4.5. splice() - add or remove elements from the array and return the removed elements
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// console.log(fruits.splice(1, 1)); // [ 'banana' ] (removed elements) 
// console.log(fruits); // [ 'apple', 'mango' ] (updated array)

// 4.6. slice() - get a part of the array
// console.log(fruits.slice(1, 2)); // [ 'banana' ] (part of the array)

// 4.7. concat() - merge two or more arrays
// const vegetables = ["potato", "tomato"];
// console.log(fruits.concat(vegetables)); // [ 'apple', 'banana', 'mango', 'potato', 'tomato' ]

// 4.8. join() - join all elements of the array into a string
// console.log(fruits.join(", ")); // apple, banana, mango

// 4.9. reverse() - reverse the order of the elements in the array
// console.log(fruits.reverse()); // [ 'mango', 'banana', 'apple' ]

// 4.10. sort() - sort the elements of the array
// console.log(fruits.sort()); // [ 'apple', 'banana', 'mango' ]

// 4.11. indexOf() - get the index of an element in the array
// console.log(fruits.indexOf("banana")); // 1

// 4.12. includes() - check if an element is present in the array
// console.log(fruits.includes("banana")); // true

 