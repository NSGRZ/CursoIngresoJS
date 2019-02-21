function mostrar()
{

	
	var numero =prompt("ingrese un número entre 0 y 10.");
	//while(!(numero >0 && numero <10))
	
			while(numero <0 ||numero > 9)			
		{ 	numero = prompt("ingrese un número entre 0 y 9.");
			numero = parseInt(numero)
			/*if(numero <=9)
			{
				
				break;
			}*/

			}
		Numero.value=numero+" "+"numero validado"
}//FIN DE LA FUNCIÓN
//al presionar el botón pedir un número entre 0 y 9 inclusive.
