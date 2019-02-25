function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var Numero
	var contador=0
	var Respuesta = "si"
	while(Respuesta == "si")
	{

		Numero = Math.random()*10+1
		Numero= parseInt(Numero)
		if(Numero>8)
			{alert("EXCELENTE")}
		else
			{if(Numero<4)
			{alert("Vamos,la proxima se puede")}
			else
				{alert("APROBÓ")}
		}

Respuesta=prompt("desea continuar?")
	}

	
}//FIN DE LA FUNCIÓN

