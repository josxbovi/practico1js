//6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

var numero1 = prompt("Ingrese un numero");
var numero2 = prompt("Ingrese otro numero");
if (numero1 > numero2) {
    document.write("<br>El numero mayor es: " + numero1);
} else {
    document.write("<br>El numero mayor es: " + numero2);
}
