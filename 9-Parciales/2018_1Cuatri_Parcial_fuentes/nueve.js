function mostrar()
{
	var peso;
	var marca;
	var temperatura;
	var respuesta;
	var temperaturaPar=0;
	var pesoMAx=0;
	var marcaMax;
	var TemperaturasCero=0;
	var promedio=0
	var ResultadoPromedio=0;
	var pesoMinimo=101;
	var MarcaMinima;


	while(respuesta!='no')
{		
		marca=prompt('la marca del producto');
		peso=prompt('peso entre 1 a 100');
		
		

		peso=parseInt(peso);
	

		while(peso<1||peso>100||isNaN(peso))
			{
				peso=prompt('de 1 a 100 el peso');
				peso=parseInt(peso);
			}
		temperatura=prompt('temperatura de -30 a 30');
		temperatura=parseInt(temperatura);
		while(temperatura<-30||temperatura>30||isNaN(temperatura))
			{
				temperatura=prompt('de -30 a 30');
				temperatura=parseInt(temperatura);
			}	
			if(temperatura!=0)
			{
				if(temperatura%2==0||temperatura%-2==0)
					{temperaturaPar=temperaturaPar+1;}
			}
			
				if(temperatura<0)
							{TemperaturasCero=TemperaturasCero+1;}
			


promedio=promedio+1;





			if(peso>pesoMAx)
				{
					pesoMAx=peso;
					marcaMax=marca;
				}
			else 
				{if(peso<pesoMinimo)
					{
						pesoMinimo=peso;
						MarcaMinima=marca;
					}

				}	



ResultadoPromedio=peso+ResultadoPromedio;
			respuesta=prompt('no para no');
}

ResultadoPromedio=ResultadoPromedio/promedio;

document.write('la cantidad de Temperaturas Pares es '+temperaturaPar);
document.write(' la marca del producto mas pesado es '+marcaMax);
document.write(' la cantidad de productos que se conservan a menos de 0 Grados '+TemperaturasCero);
document.write(' el promedio de peso de los productos '+ResultadoPromedio);
document.write(' el peso maximo '+pesoMAx+' el peso minimo '+pesoMinimo);



}
/*	ingresar  marca , el peso entre 1 y 100 (validar), 
	la temperatura de almacenamiento(entre -30 y 30)
 	hasta que el usuario quiera 

  informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.*/