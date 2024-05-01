/*JavaScript Reduces the Need for Loops with Built-in Functions
JavaScript has built-in functions that can help you avoid writing loops. These functions are called higher-order functions. They take a function as an argument and return a value or a new array.
MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Syntax:
array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The reducer function takes four arguments: accumulator, currentValue, currentIndex, and array. The reduce() method can accept an optional initialValue parameter. If you provide an initialValue, it will be used as the initial value of the accumulator. If you don't provide an initialValue, the first element of the array will be used as the initial value of the accumulator. The reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

The reduce() method is useful when you want to perform an operation on each element of an array and accumulate the results into a single value. For example, you can use the reduce() method to sum all the elements of an array, find the maximum or minimum value in an array, or concatenate all the elements of an array into a single string.

The reduce() method is similar to the map() method, but it returns a single value instead of an array. The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/
 


const numbers = [1, 2, 3, 4, 5];

// 1. Example reduce operation: Sum all the elements of the array
const sum = numbers.reduce((accumulator, currentValue) => {
    // console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`)
    return accumulator + currentValue;
}, 0);

// console.log(sum); // Output: 15


// 2. Example reduce operation: Find the maximum value in the array
const max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator , currentValue);
}, 0);

// console.log(max); // Output:  5


// 3. Example reduce operation: Concatenate all the elements of the array into a single string
const words = ['JavaScript', 'is', 'awesome'];

const sentence = words.reduce((accumulator, currentValue) => {
    // console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`)
    return `${accumulator} ${currentValue}`;
}, '');

// console.log(sentence); // Output: JavaScript is awesome


const cartItems = [
    { id: 1, title: "To Kill a Mockingbird", quantity: 2, price: 8.99 },
    { id: 2, title: "1984", quantity: 1, price: 9.99 },
    { id: 3, title: "The Great Gatsby", quantity: 1, price: 7.49 },
    { id: 4, title: "Pride and Prejudice", quantity: 3, price: 6.99 },
    { id: 5, title: "Brave New World", quantity: 1, price: 10.99 }
];


// 4. Example reduce operation: Calculate the total price of all items in the cart
const totalPrice = cartItems.reduce((accumulator, currentValue) => {
    // console.log(`accumulator: ${accumulator}, currentValue: ${currentValue.price * currentValue.quantity}`)
    return accumulator + currentValue.quantity * currentValue.price;
}, 0);

// console.log(totalPrice); // Output: 67.42


// 5. Example reduce operation: Calculate the total quantity of all items in the cart
const totalQuantity = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
}, 0);

// console.log(totalQuantity); // Output: 8


// 6. Example reduce operation: Calculate the total price of all items in the cart and print the receipt with locale currency symbol

const shoppingCart = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
}, 0);

// console.log(shoppingCart.toLocaleString(
//     'es-ES',
//     { style: 'currency', currency: 'EUR' }
// )); // Output: 


// 7. Example reduce operation: Calculate the total price of all items in the cart and print the receipt with locale currency symbol and tax

const shoppingCartWithTax = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
}, 0);

const tax = 0.08;
const total = shoppingCartWithTax + shoppingCartWithTax * tax;

console.log(total.toLocaleString( 'en-IN', { style: 'currency', currency: 'INR' }));  
console.log(total.toLocaleString( 'en-PK', { style: 'currency', currency: 'PKR' }));  


