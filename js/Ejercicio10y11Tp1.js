/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) y 
que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible).*/


const number = prompt("Ingrese un numero:");

const num = parseInt(number);

let message = "";
if (num % 2 === 0) {
    message += "Divisible por 2<br>";
}
if (num % 3 === 0) {
    message += "Divisible por 3<br>";
}
if (num % 5 === 0) {
    message += "Divisible por 5<br>";
}
if (num % 7 === 0) {
    message += "Divisible por 7<br>";
}

if (message === "") {
    document.write("El numero no es divisible por 2, 3, 5 o 7.");
} else {
    document.write("El numero es: "+message);
}
