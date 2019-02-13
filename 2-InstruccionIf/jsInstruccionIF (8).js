function mostrar()
{
	var EdadDe 
	EdadDe=edad.value 
	EdadDe=parseInt(EdadDe) 
	if(EdadDe <18 && estadoCivil.value == "Soltero") //si es menor de 18 y el estado civil es igual a soltero
		{
		console.log("nada")  //no hago nada
		}
		else //pero 
			{if(EdadDe > 17 && estadoCivil.value == "Soltero") //si es mayor de 18 y el estado civil es igual a solter
						{
							alert("Es "+estadoCivil.value+ " y no es menor.") //digo el estado civil y que no es menor
						}
			}
	


}



/*si es < 18 - "soltero"
"nada"
si es != a < 18
"estadoCivil.value" y no es menor */