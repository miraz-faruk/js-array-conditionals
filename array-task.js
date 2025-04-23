// Question 1
const fruits = ['apple', 'banana', 'cherry', 'date', 'orange'];

console.log(fruits[3]);

fruits[2] = 'jambura';

console.log(fruits);

// Question 2
const destinations = ['Paris', 'London', 'New York'];

destinations.push('Tokyo');

destinations.push('Berlin', 'Moscow');

destinations.pop('Moscow');

console.log(destinations);

// Question 3
const books = ['The Great Gatsby', '1984', 'To Kill a Mockingbird', 'Javascript: The Good Parts'];

if (books.includes('Javascript: The Good parts')) {
    console.log('Found');
}
else {
    console.log('Not Found');
}

// Question 4
const numbers = [1, 2, 3, 4, 5];
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const book = [];
const age = 28;
const friends = 'Mac';

console.log(Array.isArray(numbers) ? "Yes, it is an array" : "No, it is not an array");
console.log(Array.isArray(names) ? "Yes, it is an array" : "No, it is not an array");
console.log(Array.isArray(book) ? "Yes, it is an array" : "No, it is not an array");
console.log(Array.isArray(age) ? "Yes, it is an array" : "No, it is not an array");
console.log(Array.isArray(friends) ? "Yes, it is an array" : "No, it is not an array");

// Question 5
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = evenNumbers.concat(oddNumbers);

console.log(evenNumbers);
console.log(oddNumbers);
console.log(allNumbers);