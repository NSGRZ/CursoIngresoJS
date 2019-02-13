function mostrar()
{var EdadDe //ingrese variable
	EdadDe=edad.value //le di valor
	EdadDe=parseInt(EdadDe) //el valor lo parsie como entero
	//estadoCivil.value = Soltero.value //crei que haciendo esto podriamos ingresar al if los estados
	//estadoCivil.value = Casado.value //no hizo falta solo le di a estadoCivil valor y diferenciarlo con el "id"escrito
	//estadoCivil.value = Divorciado.value
	//EdadDe=estadoCivil.value
	if(EdadDe <18 && estadoCivil.value != "Soltero")//si es menor de 18
	{
		alert("'Es muy pequeño para NO ser soltero.'")  //no estoy muy seguro de como funciono esto
		//creo que el if dice " si es menor de 18 y estado civil distinto a "soltero"
		//mandar un mensaje de alerta "Es muy pequeño para NO ser soltero."
		//como no pueden escribir opciones y solo son 3,no hay problemas en esta logica
	}
	


}