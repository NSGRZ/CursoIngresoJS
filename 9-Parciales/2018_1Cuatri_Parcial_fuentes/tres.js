function mostrar()
{
var procentaje;
var monto;
var resultado;
//ungreso variables
monto = prompt("ingrese el monto a descontar");
procentaje = prompt("ingrese el descuento");
//el usuario le da un valor
procentaje = parseInt(procentaje);
monto = parseInt(monto);
//el valor ingresado lo transformo en entero
resultado = monto*procentaje/100;
//alert("el monto descontado fue de :"+resultado);
resultado = monto-resultado;
//realizo una ecuacion con los valores 
elPrecioFinal.value = resultado; 
//lo muestro por ID
}
