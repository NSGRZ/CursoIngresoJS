function mostrar()
{

var NumeroIngresado = prompt("ingrese el número de repeticiones");
NumeroIngresado=parseInt(NumeroIngresado)
var acumulador
for(Recorrido=NumeroIngresado-1;Recorrido>1;Recorrido--)//aca se hace el recorrido de los 
															//numero que hare
	{
		for(NumeroAnterior=Recorrido-1;NumeroAnterior>0;NumeroAnterior)
		{
 		console.log(Recorrido)
		if(NumeroIngresado%NumeroAnterior==0)//si el resto de una division es 0 es porque es divisible
			{
				acumulador=acumulador+NumeroAnterior
			}


		
		}//for dentro del for

if(acumulador==NumeroAnterior) //si sale del for es porque no era divisible por 1
		{console.log("es perfecto");}
	



	}//primerFOR



}//FIN DE LA FUNCIÓN