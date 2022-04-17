console.log ('Exercises: Variables and operators');
/*a: Create two numeric variables and use the addition operator
to store the value of the sum of both numbers in a 3rd variable.*/
console.log ('-exercise 01.a:');
var firstNumber = 3;
var secondNumber = 7;
var result = firstNumber + secondNumber;
console.log (result);
/*b: Create two variables of type String and concatenate 
them saving the result in a 3rd variable.*/
console.log ('-exercise 01.b:');
var firstString = 'Whoopi is ';
var secondString = 'my pet.';
var thirdString = firstString + secondString;
console.log (thirdString);
/*c:Create two variables of type String and add the length of each variable
(number of letters of the string) saving the result of the sum in a
3rd variable (use length).*/
console.log ('-exercise 01.c:');
var myPet = 'Whoopi ';
var description = 'is very beautiful.';
var myDog = myPet.length + description.length;
console.log (myDog);
