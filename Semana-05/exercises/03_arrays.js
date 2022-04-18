console.log ('Exercises: Arrays');
/*a: Given the following array: ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"] to show
by console for months 5 and 11 (use console.log).*/
console.log ('-exercise 03.a:');
var months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
console.log (months[5]);
console.log (months[11]);

/*b: Sort the month array alphabetically and display it on the console (use sort).*/
console.log ('-exercise 03.b:');
console.log (months.sort());

/*c: Add an element to the beginning and end of the array (use unshift and push).*/
console.log ('-exercise 03.c:');
months.unshift ('New year');
months.push ('Christmas')
console.log (months);

/*d: Remove an element from the beginning and the end of the array (use shift and pop).*/
console.log ('-exercise 03.d:');
months.shift();
months.pop();
console.log (months);

/*e: Reverse the order of the array (use reverse).*/
console.log ('-exercise 03.e:');
months.reverse();
console.log (months);

/*f: Join all the elements of the array into a single string where each month is
separated by a hyphen - (use join).*/
console.log ('-exercise 03.f:');
var listMonth = (months.join('-'));
console.log (listMonth);

/*g: Create a copy of the month array containing May through November
(useful slice).*/
console.log ('-exercise 03.g:');
var monthsNew = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var copyArray = [months.slice(4, 11)]
console.log (copyArray)