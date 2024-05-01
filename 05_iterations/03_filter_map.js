/* JavaScript filter() Method  and Map Method
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Syntax:
array.filter(function(currentValue, index, arr), thisValue)


The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Syntax:
array.map(function(currentValue, index, arr), thisValue)
*/

  const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Historical Fiction",
        type: "Novel",
        publish: 1960,
        edition: 1
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        type: "Novel",
        publish: 1949,
        edition: 1
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Novel",
        type: "Classic",
        publish: 1925,
        edition: 3
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        type: "Novel",
        publish: 1813,
        edition: 2
    },
    {
        id: 5,
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        type: "Novel",
        publish: 1932,
        edition: 1
    }
];

  
  // 1. Example filter operation: Find all books in the 'Fiction' genre
  const fictionBooks = books.filter(book => book.genre === "Fiction");
//   console.log(fictionBooks);

// 2. example find with book genre
const historicalBooks = books.filter((bk)=> {
    return bk.genre == "Historical"
})

// console.log(historicalBooks)

// 3. example more then one filter condition 
const myBooks = books.filter((bk)=>{
    return bk.publish < 2000 && bk.genre == "Novel"
})

// console.log(myBooks)

// 4. example filter with array of objects
const myBooks2 = books.filter((bk)=>{
    return bk.type == "Classic" || bk.genre == "Dystopian"
})

// console.log(myBooks2)


// 5. example map operation: Create a new array with only the book titles
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const bookTitles = books.map(book => book.title);
// console.log(bookTitles);
 
// 6. example map operation: Create a new array with only the book titles and authors
const bookTitlesAuthors = books.map(book => `${book.title} by ${book.author}`);
// console.log(bookTitlesAuthors);

// 7. example map operation and chaining: Create a new array with only the book titles and authors, and then join them into a single string

const bookTitlesAuthorsString = books.map(book => `${book.title} by ${book.author}`).join(", ");
// console.log(bookTitlesAuthorsString);


// 8. example map operation and chaining more complex more then one map operation
const bookTitlesAuthorsString2 = books
    .map(book => `${book.title} by ${book.author}`)
    .map(book => book.toUpperCase())
    .join(", ");

// console.log(bookTitlesAuthorsString2);


// 9. example map operation and filter and chaining  more complex more then one map operation
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numberArray.map((num)=> num * 10).map((num)=> num + 1).filter((num)=> num >= 30)
console.log(result);