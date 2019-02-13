function mostrar()
{
var productoUno;
var productoDos;
var SumaProductos;
var Descuento;
var Pago;
var Resultado
var Recargo;
alert("ingrese tu tipo de pago")
alert("si es con TARJETA ingrese 1")
alert("si es EFECTIVO ingrese 2")
pago = prompt("ingrese su tu tipo de pago")
productoUno = prompt("ingrese el valor del producto uno");
productoDos = prompt("ingrese el valor del producto dos"); // ingreso valores
descuento = 10
productoUno = parseInt(productoUno);
productoDos = parseInt(productoDos);

SumaProductos = productoDos+productoUno;
Resultado = (SumaProductos *descuento)/100
Resultado =    SumaProductos - Resultado




if(SumaProductos >2000)
	{Resultado = SumaProductos*15/100
	Resultado =  SumaProductos-Resultado 
  alert("Tenes un descuento adicional por superar el monto de $2000 del 15%, Tu Nuevo precio final es"+Resultado)}
  else
  	if(pago == 1)
     { 
     	Resultado = (SumaProductos *descuento)/100
  		Resultado =  Resultado + SumaProductos
  	  }
     else 

      {alert("la suma del producto es "+SumaProductos)
       alert("la suma de los productos con el descuento del 10% es: " +Resultado);}



}


//al realizar una compra si compra de mas de dos productos se realiza un descuento de 10% y si supera los 2000 
//se agrega un descuento adicional del 15% 

//si el pago es con tarjeta y no efectivo al pprecio final se le agrega unm 10 % de recargo