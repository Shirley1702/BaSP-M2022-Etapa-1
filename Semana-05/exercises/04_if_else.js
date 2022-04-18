console.log ('Exercises: If And Else');
/*a: Create a random number between 0 and 1 using the Math.random() function,
if the value is greater than or equal to 0.5 show an alert with the message
“Greater than 0.5” and else an alert with the message “Less than 0.5”.*/
console.log ('-exercise 04.a:');
var number = Math.random();
console.log (number);
if (number >= 0.5){
    window.alert ('Greater than 0,5');
}
else {
    window.alert ('Lower than 0,5');
}
/*b: Create a variable “Age” that contains an integer
between 0 and 100 and display the following alert messages:*/
//I: “Baby” if the age is less than 2 years;
//II: “Kid” if the age is between 2 and 12 years;
//III: “Teenager” between 13 and 19 years old;
//IV: “Young” between 20 and 30 years;
//V: “Adoult” between 31 and 60 years old;
//VI: “Old adoult” entre 61 y 75 años;
//VII: “old man” if you are older than 75 years*/
console.log ('-exercise 04.b:');
var age = Math.floor (Math.random()*100);
console.log (age);
if (age <2){
    alert ('Baby');
}
else if (age >=2, age <=12){
    alert ('Kid');
}
else if (age >=13, age <=19){
    alert ('Teenager');
}
else if (age >=20, age <=30){
    alert ('Young');
}
else if (age >=31, age <=60){
    alert ('Adoult');
}
else if (age >=61, age <=75){
    alert ('Older adoult');
}
else if (age >75){
    alert ('Old man');
}