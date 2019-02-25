	function mostrar()
	{

		var contador=0;
		var numero; 
		var Resultado=0; 
		var min=0; 
		var max=0; 
		var respuesta='si';

		while(respuesta!='no') //mientras la respuesta no sea no
		{
			numero=prompt("ingrese un numero");  //ingresa un numero
			numero=parseInt(numero); 
			//Resultado=numero+Resultado //el numero es igual a el resultado 
			
		/*if(Resultado>numero) //si el resultado es mayor al numero
				{Resultado=Resultado-numero}	
			else
				{numero = Resultado-numero}*/
		//	else	{ numero-contador}
		if(min != 0 && max != 0) //si max y min son distintos a 0
			{if(numero>max)   //y si numero es mayor a maximo
				{max=numero; } //entonces maximo es numero

			else{if(numero<min) //pero si numero es menor a minimo
				{min=numero; } //entonces minimo es numero
			}
		}
		else //entonces minimo es numero y maximo es numero
			{	min=numero; 
				max=numero; 
			}



		respuesta=prompt("desea continuar?");  //queres continuar?
		 //el resultado es igual a el resultado menos el numero
		}
	

document.getElementById("maximo").value=max;  //muestro el resultado de el resultado
document.getElementById("minimo").value=min;   //muestro el numero
	}//FIN DE LA FUNCIÓNs


	/* ejemplos Testeados : 15,37,50,100,250 : dando como resultado en el "maximo" 15 y en el minimo "250"
	//la suma de a+b es 52   a+b+c 102   a+b+c+d 152  a+b+c+d+e 252  a+b+c+d+e+f 502*/