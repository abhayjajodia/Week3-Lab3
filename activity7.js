//Exercise 1
let sum = 0;
const numbers = [65, 44, 12, 4];

function addNumberToSum(item) {
  sum += item;
}

numbers.forEach(addNumberToSum);

console.log("Sum of numbers:", sum);

//----------------------------------------------
//Exercise 2
const fruits = ["apple", "orange", "cherry"];

function logFruit(fruit) {
  console.log(fruit);
}

fruits.forEach(logFruit);

//----------------------------------------------    
//Exercise 3
const array1 = ['a', 'b', 'c'];

array1.forEach(function (element) {
  console.log(element);
});

//----------------------------------------------
//Exercise 4
const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function (num, index, arr) {
  arr[index] = num + 10;
});

console.log(numbers1);

//----------------------------------------------
//Exercise 5
const strings = ["program", "world", "javascript"];

strings.forEach(function (str, index, arr) {
  arr[index] = str.split('').reverse().join('');
});

console.log(strings);

//----------------------------------------------
//Exercise 6
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = [];

numbers2.forEach(function (num) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});

console.log(evenNumbers);

//----------------------------------------------
//Exercise 7
const celsiusTemperatures = [0, 10, 20, 30, 40];

celsiusTemperatures.forEach(function (celsius, index, arr) {
  arr[index] = (celsius * 9/5) + 32;
});

console.log(celsiusTemperatures);

//----------------------------------------------
//Exercise 8
const words = ["apple", "banana", "cherry"];

words.forEach(function (word, index, arr) {
  arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(words);

//----------------------------------------------
//Exercise 9
const numbers3 = [10, 20, 5, 30, 15];

let maxNumber = numbers3[0];

numbers3.forEach(function (num) {
  if (num > maxNumber) {
    maxNumber = num;
  }
});

console.log("Maximum number:", maxNumber);

//----------------------------------------------    
//Exercise 10
const names = ["John", "Jane", "Bob", "Alice"];

const listItems = [];

names.forEach(function (name) {
  listItems.push("<li>" + name + "</li>");
});

console.log(listItems.join(""));

//----------------------------------------------
//Exercise 11
const sentence = "The quick brown fox jumps over the lazy dog";
const letterCounts = {};

const letters = sentence.split('');

letters.forEach(function (letter) {
  if (letter !== ' ') {
    letter = letter.toLowerCase();
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }
});

console.log(letterCounts);