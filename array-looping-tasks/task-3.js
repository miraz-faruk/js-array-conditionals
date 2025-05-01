// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let result = '';

for (let name of numbers){
    result += name;
}

console.log(result); // Output: TomTimTinTik