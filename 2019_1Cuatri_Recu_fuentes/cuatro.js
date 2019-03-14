function mostrar()
{
	var NumeroUno;
	var NumeroDos;
	var Respuesta;
	var cuadrado;
	var mensaje;
	NumeroUno=prompt("Valor1");
	NumeroDos=prompt("Valor2");
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	Respuesta=parseInt(Respuesta);
	if(NumeroUno==NumeroDos)
		{
			cuadrado=NumeroUno*NumeroDos;
			mensaje="el cuadrado "+cuadrado;
		}
	else	
	{if(NumeroUno%NumeroDos==0)
			{
				Respuesta=NumeroUno-NumeroDos;
				mensaje="la resta "+Respuesta;
			}
		else {if(NumeroUno%NumeroDos>3)
				{	Respuesta=NumeroUno%NumeroDos;
					mensaje="el resto da mas a 3 = "+Respuesta;
				}
			else 
				{Respuesta=NumeroUno%NumeroDos;
					mensaje="el resto "+Respuesta;
				}
		}
	}
alert(mensaje);
}
/*Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro el cuadrado del numero. 
Si el primero divisible por el segundo, los resto, 
de lo contrario muestro solo el resto. 
si el resto es mayor a 3(tres ) informarlo por alert.*/