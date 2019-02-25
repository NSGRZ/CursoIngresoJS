function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	while(numero >9 || numero<0)
	{
		numero=prompt("ingrese un numero entre 0 y 9")
	}
document.getElementById("Numero").value = numero + " Numero Validado"
}//al presionar el botón pedir un número entre 0 y 9 inclusive.