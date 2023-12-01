var numbers = [20, 30, 50, 90, 10];
console.log(numbers);

// Add an element in an array

numbers.push(100);
console.log(numbers);

// Remove an element from an array

numbers.pop();
console.log(numbers);

// Add an element from beginning in an array
numbers.unshift(1000);
console.log(numbers);

// Add an element in a specific position
numbers.splice(1, 0, "miraz");
console.log(numbers);

// Pop an element in a specific position
numbers.splice(1, 1);
console.log(numbers);


