console.log ('Exercises: Strings');
/*a: Create a variable of type string with at least 10 characters and convert
all text in uppercase (use toUpperCase). */
console.log ('-exercise 02.a:');
var stringA = 'My name is Shirley and my pet is a dog';
console.log (stringA.toUpperCase(stringA));

/*b: Create a variable of type string with at least 10 characters and generate
a new string with the first 5 characters saving the result in a
new variable (use substring).*/
console.log('-exercise 02.b:');
var stringB = 'JavaScript it is a new language for me';
var first5c = (stringB.substring(0, 5));
console.log (first5c);

/*c: Create a variable of type string with at least 10 characters and generate
a new string with the last 3 characters saving the result in a
new variable (use substring).*/
console.log ('-exercise 02.c:');
var stringC = 'I am learning JavaScript';
var last3c = (stringC.substring(21, 24));
console.log (last3c);

/*d: Create a variable of type string with at least 10 characters and generate 
a new string with the first letter in uppercase and the rest in lowercase.
Save the result in a new variable (use substring, toUpperCase,
toLowerCase and the + operator).*/
console.log ('-exercise 02.d:');
var stringD = 'i like flexbox.';
var capitalLetter = (stringD.substring(0, 1).toUpperCase());
var lowerLetter = (stringD.substring(1).toLocaleLowerCase());
var orationResult = capitalLetter + lowerLetter;
console.log (orationResult);

/*e: Create a variable of type string with at least 10 characters and some
blank space. Find the position of the first white space and
store it in a variable (use indexOf).*/
console.log ('-exercise 02.e:');
var stringE = 'Radium Rocket';
var firstSpace = stringE.indexOf(' ');
console.log (firstSpace);

/*f: Create a variable of type string with at least 2 words long
(10 characters and some space in between). Use the methods of
previous exercises to generate a new string that has the first
letter of both words capitalized and the other letters lowercase
(use indexOf, substring, toUpperCase, toLowerCase and the + operator)*/
console.log ('-exercise 02.f:');
var stringF = 'congratulations developers'
var firstWord = (stringF.substring(0, 1).toUpperCase()) + (stringF.substring(1, 16).toLocaleLowerCase());
var spaceStringF = stringF.indexOf(' ');
var secondWord = (stringF.substring(16, 17).toUpperCase()) + (stringF.substring(17).toLocaleLowerCase());
var resultF = firstWord + secondWord;
console.log (resultF);