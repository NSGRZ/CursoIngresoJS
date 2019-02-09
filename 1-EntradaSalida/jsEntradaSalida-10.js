/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var primernumero;
var segundonumero;
var resto;

   
	primernumero = importe.value;
	primernumero = parseInt(primernumero);
	segundonumero = parseInt(segundonumero);

	segundonumero = primernumero*0.75;
	resto = primernumero*25/100;

	resultado.value = segundonumero; //el resultado que sea visible en el Readonly,va debajo de la accion
	
	alert("El descuento fue de: "+resto);
}
