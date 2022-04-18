console.log ('Exercises: For');
/*a: Create an array containing 5 words and loop through that array
using a JavaScript for loop to display an alert
using each word.*/
console.log ('-exercise 05.a:');
var clubs = ['river', 'boca', 'central', 'nob', 'independiente'];
for (var i=0; i<clubs.length; i++) {
    alert (clubs[i]);
}

/*b: To the previous array convert the first letter of each
capitalized word and display an alert for each modified word.*/
console.log ('-exercise 05.b:');
for (var i=0; i<clubs.length; i++) {
    clubs[i] = clubs[i].substring(0, 1).toUpperCase() + clubs[i].substring(1);
    alert (clubs[i])    
}

/*c: Create a variable called "sentence" that has an empty string,
then to the array at point a) iterate through it with a for loop to go
saving each word inside the sentence variable. At the end
display a single alert with the full string.*/
console.log ('-exercise 05.c:');
var sentence = '';
for (var i=0; i<clubs.length; i++){
    sentence = sentence + clubs[i];
}
alert (sentence);

/*d: Create an empty array and with a for loop of 10 repetitions.
Fill the array with the number of the repetition, that is to say that at
end of the execution of the for loop there should be 10 elements
within the array, from number 0 to number 9. Show
by the browser console the final array (use console.log).*/
console.log ('-exercise 05.c:');
var sport = [];
for (var i=0; i<10; i++){
    sport.push(i);
}
console.log (sport);
