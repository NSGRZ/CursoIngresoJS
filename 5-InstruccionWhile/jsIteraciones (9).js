	function mostrar()
	{

		var contador=0;
		var numero 
		var Resultado=0
		
		var respuesta='si';

		while(respuesta!='no') //mientras la respuesta no sea no
		{
			numero=prompt("ingrese un numero") //ingresa un numero
			numero=parseInt(numero)
			Resultado=numero+Resultado //el numero es igual a el resultado 
			
			

		//	else	{ numero-contador}
		respuesta=prompt("desea continuar?") //queres continuar?
		if(Resultado>numero) //si el resultado es mayor al numero
				{Resultado=Resultado-numero} //el resultado es igual a el resultado menos el numero
		}
	

document.getElementById("maximo").value=Resultado //muestro el resultado de el resultado
document.getElementById("minimo").value=numero  //muestro el numero
	}//FIN DE LA FUNCIÓNs


	/* ejemplos Testeados : 15,37,50,100,250 : dando como resultado en el "maximo" 15 y en el minimo "250"
	//la suma de a+b es 52   a+b+c 102   a+b+c+d 152  a+b+c+d+e 252  a+b+c+d+e+f 502