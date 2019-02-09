/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*var Valor;
    var Resultad;

Valor = sueldo.value;
Valor = parseInt(Valor);
Resultad = resultado.value;
Resultad = Valor*1.1;*/
var primernumero;
var segundonumero;
var resto;

   
	primernumero = sueldo.value;
	primernumero = parseInt(primernumero);
	segundonumero = parseInt(segundonumero);

	segundonumero = primernumero*1.1;
	resto = primernumero*10/100;

	resultado.value = segundonumero; //el resultado que sea visible en el Readonly,va debajo de la accion
	
	alert("El aumento fue de "+resto);

	
}
