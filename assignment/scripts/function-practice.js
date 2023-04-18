console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name){
return `Hello, ${name}!`;
}
console.log(helloName('Justin'));
// Remember to call the function to test

function hello(name){
return "Hello, " + name + "!";
}
console.log(helloName('John Wick'));

// 3. Function to add two numbers together & return the result
 
console.log('Add first number and second number');
let firstNumber = 4;
let secondNumber = 3;
function addNumbers(firstNumber, secondNumber){
return firstNumber + secondNumber;
}
  // return firstNumber + secondNumber;
console.log(addNumbers(4 , 3));
console.log(addNumbers(3 ,5));
//Interesting that I can place any vale in after the function and it still passes through. Shortcut in the future perhaps.



// 4. Function to multiply three numbers & return the result

function multiplyThreeNumbers(num1, num2, num3){
return num1 * num2 * num3;
}

console.log(multiplyThreeNumbers(3,4,5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
//function isPositive(number) 
function isPositive(number){ 
if( number > 0 )
return true; 
else {return false;}}
  
  console.log('isPositive', isPositive(3), 'isPositive(3)');
  console.log('isPositive', isPositive(0), 'isPositive(0)');
  console.log('isPositive', isPositive(-3), 'isPositive(-3)');

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
//console.log( 'isPositive - should say true', isPositive(3) );
//console.log( 'isPositive - should say false', isPositive(0) );
//console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('Function to return last item in array');

let array = [1,2,3,4,5];

function getLast(array) {
return array[array.length-1];}
console.log(getLast(array));

let emptyArray = [];
function getLast(emptyArray){
if(emptyArray.length === 0){
return undefined;
}
return emptyArray[emptyArray.length-1];
}
console.log(getLast(emptyArray));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('Find a value in an array');

let newArray = [1,2,3,4,5];
function find(newArray, value){
for (let i = 0; i < newArray.length; i++){
if (newArray[i] === value){
return true;
}
}
return false;
}

console.log(find(newArray, 5));
console.log(find(newArray, 0));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('------Stretch Goals------')

console.log('Validating position of letters');
const string = "astrology";
const letter1 = "a";
const isFirst1 = isFirstLetter(letter1, string);

function isFirstLetter(letter, string) {
return string.charAt(0) === letter;
}
console.log('isFirstLetter', isFirst1, 'a');

const letter2 = "s";
const isFirst2 = isFirstLetter(letter2, string);
console.log('isFirstLetter', isFirst2, 's');

//This one was a little confusing for me to get the syntax correct
// without it constantly wanting to log true for the first letter each time

//console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
//console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
// TODO: loop to add items

console.log('Function to return sum of all numbers');

const nextArray = [2, 4, 6, 8, 10];
const totalSum = sumAll(nextArray);

function sumAll(nextArray) {
  let sum = 0;
  for(let i = 0; i < nextArray.length; i++){
  sum += nextArray[i];}
  return sum;
}
console.log(sumAll(nextArray));
//Discovered that if I didn't have the } at end of line 147/147, JS still tries
// to do something, gave a return of '2', which was corrected when placing closing bracket. 
// What is a better way to isolate a potential problem like this in the future? It didn't throw a red error at me which makes me worry if something else is technically broken elsewhere in the entire code.

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('Function to return new array of all positive numbers');

let posNumbers = [-7, -3, 0, 4, 8, 10];
console.log('current list of numbers is:', posNumbers);

const positiveNumbers = getPositiveNumbers(posNumbers);


function getPositiveNumbers(posNumbers){
const posArray = [];
for (let i = 0; i < posNumbers.length; i++){
if(posNumbers[i] > 0){
posArray.push(posNumbers[i]);
}
}
return posArray;
}
console.log(positiveNumbers);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Chose a function problem in Code Wars: Create a function that can multiply all the elements in an original array
//by a specific integer that will return a new array without changing the orginal. 

console.log('Choose a problem in Code Wars');
const numbers = [1,2,3];
const multipliedArray = multiplyByInteger(numbers, 4);
function multiplyByInteger(numbers, num){
const newProduct = [];
for (let i = 0; i < numbers.length; i++){
newProduct.push(numbers[i] * num);
}
return newProduct;
}
console.log(numbers);
console.log('Multiplied array is', multipliedArray);
  // I got lost here after several attempts and became more confused the longer I researched this.
//Aiming to utilize 'map function' to extract all the info in an array based on the given function to create a new array.





