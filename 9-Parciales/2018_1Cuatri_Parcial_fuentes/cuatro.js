function mostrar()
{
var productoUno;
var productoDos;
var SumaProductos;
var DescuentoUno;
var DescuentoDos;
var Resultado
var Recargo;
productoUno = prompt("ingrese el valor del producto uno");
productoDos = prompt("ingrese el valor del producto dos"); // ingreso valores
descuento = 1.1
productoUno = parseInt(productoUno);
productoDos = parseInt(productoDos);

SumaProductos = productoDos+productoUno;
Resultado = SumaProductos * descuento

alert("la suma del producto es "+SumaProductos)
alert("la suma de los productos con el descuento del 10% es: " +Resultado);


//if()
}


//al realizar una compra si compra de mas de dos productos se realiza un descuento de 10% y si supera los 2000 
//se agrega un descuento adicional del 15% 

//si el pago es con tarjeta y no efectivo al pprecio final se le agrega unm 10 % de recargo