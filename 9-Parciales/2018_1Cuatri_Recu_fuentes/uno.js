
function mostrar()
{
alert("Busquemos el perimetro de un rectangulo");
var ancho;
var largo;
var resultado;

 ancho = prompt("Ingrese el ancho en metros");
 largo = prompt("Ingrese el largo en metros");
 ancho = parseInt(ancho);
 largo = parseInt(largo);
 resultado = ancho*largo;
 alert("el perimetro es :"+resultado);
}
