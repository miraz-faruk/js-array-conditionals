// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output 

const statement = 'I am a hard working person';

const reverseStatement = statement.split(' ').reverse().join(' ');

console.log(reverseStatement); // Output: 'person working hard a am I'