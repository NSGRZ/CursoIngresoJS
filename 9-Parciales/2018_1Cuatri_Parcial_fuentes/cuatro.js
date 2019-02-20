	function mostrar()
	{
	var NumeroUno
	var NumeroDos
	var NumeroTres
	var NumeroCuatro
	var suma
	var resultado
	var descuento
	

	 NumeroUno = prompt("ingrese el primer valor")
	 NumeroDos = prompt("ingrese el segundo valor")
	 NumeroTres = prompt("ingrese el tercer valor")
	 NumeroCuatro = prompt("ingrese el cuarto valor")

	NumeroUno = parseInt(NumeroUno)
	NumeroDos = parseInt(NumeroDos)
	NumeroTres = parseInt(NumeroTres)
	NumeroCuatro = parseInt(NumeroCuatro)
	suma = parseInt(suma)
	descuento= parseInt(descuento)
	resultado= parseInt(resultado)

	suma = NumeroUno+NumeroDos+NumeroTres+NumeroCuatro
	
if(suma > 100)//si la suma es mayor a 100
	{descuento=0.9;}
else//si no
	{	if(suma >50) //y la suma es menor a 50
			{descuento=0.95;}
		if(suma < 50)
		  {descuento=1.15


		  }

		}
if(NumeroUno>=NumeroDos ||NumeroUno>=NumeroTres||NumeroUno>=NumeroCuatro||NumeroUno==NumeroUno)
	{alert(NumeroUno)}
else
	{if(NumeroDos>=NumeroTres ||NumeroDos>=NumeroCuatro)
		{alert(NumeroDos)}
else
	{if(NumeroTres>NumeroCuatro)
			{alert(NumeroTres)}
	else
		{if(NumeroCuatro==NumeroCuatro)
					{alert(NumeroCuatro)}
				}//else del tre
	}//else del dos

	}//else del uno


	resultado = suma*descuento
		alert(resultado)

	}
//una empresa siempre ingresa 4 importes el mayor numero se informa
//20 50 10 30
// 15 20 14 7 
//1 6 6 9
//10 10 10 10
//la suma supera 100$ --- descuento 10% el importe mostrar el resultado final 
//cuando las suma es menor a 50$ ----descuento del 5%
//cuando no llega 50 ,sumar 15%





































	//al realizar una compra si compra de mas de dos productos se realiza un descuento de 10% y si supera los 2000 
	//se agrega un descuento adicional del 15% 

	//si el pago es con tarjeta y no efectivo al pprecio final se le agrega unm 10 % de recargo





	/*var productoUno;
	var productoDos;
	var SumaProductos;
	var Pago;
	var Resultado

	alert("ingrese tu tipo de pago")
	alert("si es con TARJETA ingrese 1")
	alert("si es EFECTIVO ingrese 2")
	pago = prompt("ingrese su tu tipo de pago")
	pago = parseInt(pago)
	productoUno = prompt("ingrese el valor del producto uno");
	productoDos = prompt("ingrese el valor del producto dos"); // ingreso valores
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
		alert("Tenes un descuento por comprar dos productos del 10% tu precio final es de :"+Resultado)*/