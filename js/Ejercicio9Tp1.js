/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/

var frase = prompt("Ingrese una frase");
var vocales = "aeiou";
var contador = 0;
var vocalesEncontradas = "";
for (var i = 0; i < frase.length; i++) {
    for (var j = 0; j < vocales.length; j++) {
        if (frase.charAt(i) == vocales.charAt(j)) {
            contador++;
            vocalesEncontradas += frase.charAt(i) + " ";
        }
    }
}

alert("La frase ingresada es: " + frase + "\n" + "La cantidad de vocales encontradas es: " + contador + "\n" + "Las vocales encontradas son: " + vocalesEncontradas);