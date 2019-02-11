/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var ProductoUno;
	var ProductoDos;
	var ProductoTres;
	var Resultado;
	//ingreso variables
	ProductoUno = PrecioUno.value;
	ProductoDos = PrecioDos.value;
	ProductoTres = PrecioTres.value;
	//le doy al el valor ID
	ProductoUno = parseInt(ProductoUno);
	ProductoDos = parseInt(ProductoDos);
	ProductoTres = parseInt(ProductoTres);
	//le doy valor numerico con parseInt()
	Resultado = ProductoUno+ProductoDos+ProductoTres;
	//hago una ecuacion
	alert("la suma de los mismos es :"+Resultado);
	//lo muestro en sumar
}
function Promedio () 
{
    var ProductoUno;
	var ProductoDos;
	var ProductoTres;
	var Resultado;

	//ingreso variables
	//ingreso variables
	ProductoUno = PrecioUno.value;
	ProductoDos = PrecioDos.value;
	ProductoTres = PrecioTres.value;
	//le doy al el valor ID
	ProductoUno = parseInt(ProductoUno);
	ProductoDos = parseInt(ProductoDos);
	ProductoTres = parseInt(ProductoTres);
	
	//le doy valor numerico con parseInt()
	Resultado = (ProductoUno+ProductoDos+ProductoTres)/3;
	//hago una ecuacion
	alert("el promedio los mismos es : "+Resultado);
	//lo muestro en sumar	
}
function PrecioFinal () 
{
	var ProductoDos;
	var ProductoTres;
	var Resultado;

	//ingreso variables
	ProductoUno = PrecioUno.value;
	ProductoDos = PrecioDos.value;
	ProductoTres = PrecioTres.value;
	//le doy al el valor ID
	ProductoUno = parseInt(ProductoUno);
	ProductoDos = parseInt(ProductoDos);
	ProductoTres = parseInt(ProductoTres);
	
	//le doy valor numerico con parseInt()
	Resultado = (ProductoUno+ProductoDos+ProductoTres);
	Resultado = Resultado*21/100;
	Resultado = Resultado+(ProductoUno+ProductoDos+ProductoTres);
	//hago una ecuacion
	alert("el precio final con IVA incluido es de : "+Resultado);
	//lo muestro en sumar	
}