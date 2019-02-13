function mostrar()
{
var procentaje;
var monto;
var resultado;
var resultadoA
var Nombre

Nombre = elNombre.value

procentaje = 1;
monto = laLocalidad.value;


monto = parseInt(monto);

resultadoA = (monto*procentaje)/100;

resultado = monto+resultadoA;

 
alert("hola "+Nombre+" El precio del producto en efectivo es$ "+monto+" con tarjeta tiene un recargo del 10% que seria "+resultadoA+" El precio final es de "+resultado)
}
//alert("el precio del producto en efectivo es $XXXXXX con 
//tarjeta tiene un recargo del 10% que seria $XX de recargo ,costandole final $XXX)