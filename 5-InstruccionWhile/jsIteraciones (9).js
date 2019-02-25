function mostrar()
{

	var contador=0;
	// declarar variables
	var NumeroAlto
	var NumeroBajo
	var NumeroNN
	var respuesta='si';
	var numero
	while(respuesta!='no')
	{
		numero =prompt("ingrese un numero") //entra un numero //segunda vuelta entra un numero
		numero =parseInt(numero)		
		contador=numero+contador //contador es el numero // el contador suma el numero anterior a este
		if(contador>0 && contador>=numero)
			{contador=NumeroAlto}


		respuesta=prompt("desea continuar?")
	

}

	

//Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.
document.getElementById('maximo').value=NumeroAlto
document.getElementById('minimo').value=NumeroBajo	

}//FIN DE LA FUNCIÓN