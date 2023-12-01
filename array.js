// Declare an array
var number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(number);

// Find length of an array
var size = number.length;
console.log("The length of the array is", size);

// Find specific index of element
var element = number[2];
console.log("The element of second index is", element);

// Get index number using element
var indexNumber = number.indexOf(50);
console.log("Index number of 50 is", indexNumber);

// Set another value of specific index
number[7] = 700;
console.log("The new array is", number);
