console.log ('Exercises: Functions');
/*a: Create a sum function that receives two numeric values ​​and returns
the result. Execute the function and save the result in a
variable, displaying the value of that variable in the browser console.*/
console.log ('-exercise 06.a:');
function sum(a, b) {
    return a + b;
};
var resultSum = sum(80, 150);
console.log(resultSum);

/*b: To the sum function above, add a validation to control
if any of the parameters is not a number, display an alert
clarifying that one of the parameters has an error and returning the
NaN value as result.*/
console.log ('-exercise 06.b:');
function validateAndSum(a, b) {
    if (typeof a !== number) {
        alert('the first variable is not a number');
        return;
    } else if (typeof b !== number) {
        alert('the second variable is not a number');
        return;
    }
    else {
        return a + b;
    }
};
var resultAlteredSum = sum(5, 4);
console.log('The result of exercise 6-b is:', resultAlteredSum);

/*c: Create a validate integer function that receives a number like
parameter and return true if it is an integer.*/
console.log ('-exercise 06.c:');
function validateInteger(number) {
    if (typeof number !== 'number') {
        console.log('The result of exercise 6-c is: the parameter is not a number');
        return;
    } else if (number % 1 == 0) {
        return true;
    } else {
        return false;
    }
};
console.log('The result of exercise 6-c is:', validateInteger(8.6));

/*d: To the sum function of exercise 6b) add a call that validates
that the numbers are integers. In case there are decimals show a
alerts with the error and returns the number converted to an integer (rounded).*/
console.log ('-exercise 06.d:');
function completeValidateAndSum(param1, param2) {
    if (typeof param1 !== 'number') {
        alert('The result of exercise 6-d is: the first variable is not a number');
        return;
    } else if (typeof param2 !== 'number') {
        alert('The result of exercise 6-d is: the second variable is not a number');
        return;
    }
    else if (param1 % 1 != 0 || param2 % 1 != 0) {
        alert('The result of exercise 6-d is: one of the parameters is not integer. The result is going to be rounded.');
        return Math.round(param1 + param2);
    } else {
        return param1 + param2;
    }
};
console.log('The result of exercise 6-d is:', completeValidateAndSum(15, 4.98));

/*e: Convert the validation from exercise 6d) into a separate function and call it
inside the sum function testing that everything still works the same.*/
console.log ('-exercise 06.e:');

function validateParameter(param) {
    if (typeof param !== 'number') {
        alert("The result of exercise 6-e is: the parameter is not a number");
        return;
    }
    return param;
};
function sumWithoutValidate(a, b) {
    return (validateParameter(a) + validateParameter(b));
};
console.log('The result of exercise 6-e is:', sumWithoutValidate(5, 'hello'));