console.log ('Exercises: For');
/*Crear un array que contenga 5 palabras y recorrer dicho array 
utilizando un bucle for de JavaScript para mostrar una alerta
utilizando cada una de las palabras.*/
console.log ('-exercise 05.a:');
var clubs = ['river', 'boca', 'central', 'nob', 'independiente'];
for (var i=0; i<clubs.length; i++) {
    alert (clubs[i]);
}

/*Al array anterior convertir la primera letra de cada 
palabra en mayúscula y mostrar una alerta por cada palabra modificada.*/
console.log ('-exercise 05.b:');
for (var i=0; i<clubs.length; i++) {
    clubs[i] = clubs[i].substring(0, 1).toUpperCase() + clubs[i].substring(1);
    alert (clubs[i])    
}

/*Crear una variable llamada “sentence” que tenga un string vacío, 
luego al array del punto a) recorrerlo con un bucle for para ir 
guardando cada palabra dentro de la variable sentence. Al final 
mostrar una única alerta con la cadena completa.*/
console.log ('-exercise 05.c:');
var sentence = '';
for (var i=0; i<clubs.length; i++){
    sentence = sentence + clubs[i];
}
alert (sentence);

/*Crear una array vacío y con un bucle for de 10 repeticiones. 
Llenar el array con el número de la repetición, es decir que al 
final de la ejecución del bucle for debería haber 10 elementos 
dentro del array, desde el número 0 hasta al número 9. Mostrar 
por la consola del navegador el array final (utilizar console.log).*/
console.log ('-exercise 05.c:');
var sport = [];
for (var i=0; i<10; i++){
    sport.push(i);
}
console.log (sport);
