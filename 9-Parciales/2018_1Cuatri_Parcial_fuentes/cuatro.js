function mostrar()
{
var productoUno;
var productoDos;
var SumaProductos;
var Descuento;
var Pago;
var Resultado
var Recargo;
var Resultadocondiez;
alert("ingrese tu tipo de pago")
alert("si es con TARJETA ingrese 1")
alert("si es EFECTIVO ingrese 2")
pago = prompt("ingrese su tu tipo de pago")
pago = parseInt(pago)
productoUno = prompt("ingrese el valor del producto uno");
productoDos = prompt("ingrese el valor del producto dos"); // ingreso valores
descuento = 10
productoUno = parseInt(productoUno);
productoDos = parseInt(productoDos);

SumaProductos = productoDos+productoUno;


if(SumaProductos >=2000 && pago == 1)

	{
	
	Resultado = Resultado-SumaProductos
	Resultado = SumaProductos*15/100
	Resultado = SumaProductos-Resultado
	

  alert("Por comprar dos productos tenes un descuento del 10%, ademas tenes un descuento adicional por superar el monto de $2000 del 15% ,pero al pagar con tarjeta tenes un recargo del 10%, Tu Nuevo precio final es"+Resultado)}
  
 if(pago == 2 && SumaProductos>2000 )
     {
     	
    Resultado = SumaProductos*1.1
	Resultado = Resultado-SumaProductos
	Resultado = SumaProductos*15/100
	Resultado = SumaProductos-Resultado
	
  	alert("Tenes un descuento por comprar dos productos del 10%,ademas  por superar el monto de $2000 del 15% tu precio final es de :"+Resultado)
  }
   if (pago == 1 && SumaProductos<2000)  
     {
      alert("Tenes un descuento por comprar dos productos del 10%,pero al pagar con tarjeta tenes un recargo del 10%, Tu Nuevo precio final es"+SumaProductos)
      }
	if (pago == 2&&SumaProductos<2000) 
{
  	Resultado = SumaProductos*10/100
	Resultado = SumaProductos-Resultado
	alert("Tenes un descuento por comprar dos productos del 10% tu precio final es de :"+Resultado)
}


}


//al realizar una compra si compra de mas de dos productos se realiza un descuento de 10% y si supera los 2000 
//se agrega un descuento adicional del 15% 

//si el pago es con tarjeta y no efectivo al pprecio final se le agrega unm 10 % de recargo