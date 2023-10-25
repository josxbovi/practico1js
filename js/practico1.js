/*Ejercicio 1
Crea dos variables, numero1 y numero2, y asígnales valores numéricos. Luego, realiza las siguientes operaciones y muestra los resultados en la consola:

Suma de numero1 y numero2.
Resta de numero1 y numero2.
Multiplicación de numero1 y numero2.
División de numero1 entre numero2. */

var numero1 = 10;
var numero2 = 5;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);

/*
Ejercicio 2: Concatenación de Cadenas

Crea dos variables, nombre y apellido, y asígnales valores de tu elección.Luego, crea una tercera variable llamada nombreCompleto que contenga la 
concatenación de nombre y apellido.Muestra nombreCompleto en la consola.*/

var nombre = "Juan";
var apellido = "Perez";
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

/*Ejercicio 3: Conversión de Grados Celsius a Fahrenheit

Crea una variable llamada gradosCelsius y asígnale un valor en grados Celsius. Luego, utiliza la fórmula de conversión para calcular los grados Fahrenheit 
y almacénalos en una variable llamada gradosFahrenheit. Muestra ambos valores en la consola.*/

var gradosCelsius = 10;
var gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;
console.log(gradosFahrenheit);

/*Dificultad:  🟢
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
*/
alert("un mensaje");

/*
Dificultad:  🟢
2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
*/

document.write("Hello World");

/*
Dificultad:  🟢
3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.*/

console.log(3 + 5);

/*
Dificultad:  🟢
4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 
input: Coder 
Output: Hola Coder
*/
var nombreUsuario = prompt("Ingrese su nombre");
console.log("Hola " + nombreUsuario);


/*
Dificultad:  🟢
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
*/
var numero1 = prompt("Ingrese un numero");
var numero2 = prompt("Ingrese otro numero");
console.log(parseInt(numero1) + parseInt(numero2));



