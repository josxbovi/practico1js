//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

var numero1 = prompt("Ingrese el primer numero");
var numero2 = prompt("Ingrese el segundo numero");
var numero3 = prompt("Ingrese el tercer numero");

if (numero1 > numero2 && numero1 > numero3) {
    document.write("<br>El numero mayor es: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write("<br>El numero mayor es: " + numero2);
} else {
    document.write("<br>El numero mayor es: " + numero3);
}