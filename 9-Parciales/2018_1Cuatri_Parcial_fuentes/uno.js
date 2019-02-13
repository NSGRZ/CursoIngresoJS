function mostrar()
{
var procentaje;
var monto;
var resultado;
var resultadoA
procentaje = 1.1
monto = prompt("ingrese el descuento");


monto = parseInt(monto);

resultadoA = monto*procentaje/100;

resultado = monto-resultadA;

elPrecioFinal.value = resultado; 
alert("El precio del producto en efectivo es$ "+monto+" con tarjeta tiene un recargo del 10% que seria "+resultadoA+)
}
//alert("el precio del producto en efectivo es $XXXXXX con 
//tarjeta tiene un recargo del 10% que seria $XX de recargo ,costandole final $XXX)