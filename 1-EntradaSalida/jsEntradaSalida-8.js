/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
		var primernumero;
	var segundonumero;
	var resultado;
	primernumero = numeroDividendo.value;
	segundonumero = numeroDivisor.value;
	primernumero = parseInt(primernumero);
	segundonumero = parseInt(segundonumero);
	resultado = primernumero % segundonumero
	alert("el resultado es: "+resultado)

}
