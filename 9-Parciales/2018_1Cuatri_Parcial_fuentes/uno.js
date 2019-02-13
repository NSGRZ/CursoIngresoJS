
function mostrar()
{
alert("Veamos quienes son");
var NombreUno;
var NombreDos;
var EdadUno;
var EdadDos;
var resultado;

 NombreUno = prompt("Ingrese el nombre");
 NombreDos = prompt("Ingrese el nombre");
 EdadUno = prompt("Ingrese la edad");
 EdadDos = prompt("Ingrese la edad");
 EdadUno = parseInt(EdadUno);
 EdadDos = parseInt(EdadDos);
 resultado = EdadDos+EdadUno
 alert("ustedes son "+NombreUno+" y "+NombreDos+" sus edades son "+EdadUno+" y "+EdadDos+" y la suma de sus edades es "+resultado);

}



//alert("ustedes son X y X sus edades son xx y xx y la suma de sus edades es")