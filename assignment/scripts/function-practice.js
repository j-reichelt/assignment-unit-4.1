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


// 3. Function to add two numbers together & return the result
 
console.log('Add first number and second number');
let firstNumber = 4;
let secondNumber = 3;
function addNumbers(firstNumber, secondNumber){
return firstNumber + secondNumber;
}
  // return firstNumber + secondNumber;
console.log(addNumbers(firstNumber ,secondNumber));
console.log(addNumbers(3 ,5));



// 4. Function to multiply three numbers & return the result
console.log('multiply three numbers');

function multiplyThreenumbers(num1, num2, num3){
return num1 * num2 * num3;
}
let product = multiplyThreenumbers(3, 4, 5);
console.log(product);

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
if(array.length === 0){
return undefined;}
else { return array[array.length-1];}}

lastItem = getLast(array);
console.log(lastItem);

let emptyArray = [];

function getLast(emptyArray){
if(emptyArray.length ===0){
return undefined;}
else { return [emptyArray.length -1];}}

lastItememptyArray = getLast(emptyArray);
console.log(lastItememptyArray);



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('Find a value in an array');

const thisArray = [1,2,3,4,5];
const thisValue = 2;

function find( thisArray, thisValue ){
for (let i = 0; i < thisArray.length; i++){
if (thisArray[i] === thisValue){
return true; }
return false; }}

const found = find(thisArray, thisValue);
console.log(found);
//still getting a false return for calling 'found', when thisValue = 2
const notFound = find(thisArray, 7);
console.log(notFound);


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

const string = "astrology";
const letter1= "a";
const isFirst1 = isFirstLetter(letter1, string);

function isFirstLetter(letter, string) {

}
console.log('isFirstLetter', isFirstLetter, 'a');


console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
