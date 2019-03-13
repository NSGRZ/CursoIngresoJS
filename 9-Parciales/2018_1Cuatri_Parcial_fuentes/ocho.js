function mostrar()
{	var respuesta;
	var NumeroUno;
	var LetraUno;
	var Sumador=0;
	var ceros=0;
	var par=0;
	var inpar=0;
	var Sumar=0;
	var acumulador=0;
	var MaximoNumero=0;
	var Maximoletra;
	var MinimoLetra;
	var MinimoNumero=0;
	var NegativoSuma=0;
	
	while(respuesta!="no")
		{
			NumeroUno=prompt('de -100 a 100');
			NumeroUno=parseInt(NumeroUno);
			LetraUno=prompt('letra');

			

			while(isNaN(NumeroUno)||NumeroUno<-100||NumeroUno>100)	
				{
					NumeroUno=prompt('de -100 a 100');
					NumeroUno=parseInt(NumeroUno);
				}
			
			
			Sumador=NumeroUno+Sumador;

			if(NumeroUno%2==0||NumeroUno%-2==0||NumeroUno!=0)
				{par=par+1;}
			else
				{if(NumeroUno%2>0||NumeroUno%-2>0||NumeroUno==-1||NumeroUno==1)
					{inpar=inpar+1;}
				}
					if(NumeroUno==0)//bien
						{ceros=ceros+1;}
					
				

				if(NumeroUno>0)//bien
					{Sumar=NumeroUno+Sumar
						acumulador=acumulador+1
					}
				else
					{if(NumeroUno<0)//bien
						{NegativoSuma=NumeroUno+NegativoSuma;
							
						}

					}


				if(NumeroUno>MaximoNumero)//bien
					{
						MaximoNumero=NumeroUno;
						Maximoletra=LetraUno;
					}
				else
					{if(NumeroUno<MinimoNumero)//bien
						MinimoNumero=NumeroUno;
						MinimoLetra=LetraUno;
					}
					
		respuesta=prompt("no,para no");

		}
		Sumar=Sumar/acumulador;
		
		document.write('el promedio '+Sumar+'			');

	 	document.write('Cantidad de Ceros '+ceros+'			');

	  	document.write('cantidad de impares '+inpar+'			');

	  	document.write('cantidad par '+par+'			');

	    document.write('Suma de los negativos '+NegativoSuma+'			');

	    document.write('El Minimo de los ingresados es '+MinimoNumero+' y la letra '+MinimoLetra+'			');

	    document.write('El maximo de los ingresados es '+MaximoNumero+' y la letra '+Maximoletra+'			');
}		
/* Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:

				La cantidad de números pares.

				La cantidad de números impares.

				La cantidad de ceros.

				El promedio de todos los números positivos ingresados.

				La suma de todos los números negativos.

				El número y la letra del máximo y el mínimo.

				<br> Testeo con los siguientes datos
				<br>( d , -150(mal) , -50(bien))
				<br>( z , 0)
				<br>( g , 20)
				<br>( a , 150(mal) , 0(bien))
				<br>( b , 3)
				<br>( k , 7)*/