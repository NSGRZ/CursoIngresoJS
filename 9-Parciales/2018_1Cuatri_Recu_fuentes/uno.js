
function mostrar()
{
alert("Busquemos el area de un trigangulo");
var Base;
var Altura;
var resultado;

 Altura = prompt("Ingrese Altura en metros");
 Base = prompt("Ingrese el Base en metros");
 Altura = parseInt(Altura);
 Base = parseInt(Base);
 resultado = (Altura*Base)/2;
 alert("el area de el triangulo es :"+resultado);
}
