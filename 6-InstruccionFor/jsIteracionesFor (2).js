	function mostrar()
	{
	var NumeroIngresado=prompt("ingresar NRO")
	NumeroIngresado=parseInt(NumeroIngresado)
	var NumeroAnterior
	/*for(NumeroAnterior=NumeroIngresado-1;NumeroAnterior>1;NumeroAnterior-NumeroAnterior)//primero hacer el for //NumeroAnterior-(Numeroanterior/Numeroanterior)
	{														//que muestre todos los numeros anteriores
		console.log(NumeroAnterior);
		if(NumeroIngresado%NumeroAnterior==0)//si el resto de una division es 0 es porque es divisible
			{break;}


	}
	//console.log(NumeroAnterior+"conquetermina") sale con 1 porque no se puede ser menos que 1
	if(NumeroAnterior==1) //si sale del for es porque no era divisible por 1
		{console.log("Es primo");}
	else
		{console.log("no es primo");}
*/

	for(Recorrido=NumeroIngresado-1;Recorrido>1;Recorrido--)//aca se hace el recorrido de los 
																					//numero que hare
	{
		for(NumeroAnterior=Recorrido-1;NumeroAnterior>1;NumeroAnterior--)
		{
 		console.log(Recorrido)
		if(Recorrido%NumeroAnterior==0)//si el resto de una division es 0 es porque es divisible
			{break;
			}

		
		}//for dentro del for

if(NumeroAnterior==1) //si sale del for es porque no era divisible por 1
		{console.log("Es primo: "+Recorrido);}
	



	}//primerFOR






	}