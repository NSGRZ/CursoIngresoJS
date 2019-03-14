function mostrar()
{
var color;
var numero;
var respuesta;
var rojo=0;
var rojomayor=0;
var inferiores=0;
var contador=0;
var Mascaro=0;
var Mascarocolor;
var PromedioNumero=0;
while(respuesta!="no")
	{
		color=prompt("ingrese el color del auto");
		while(color!="rojo"&&color!="verde"&&color!="amarillo")
			{color=prompt("error,ingrese rojo,verde o amarillo");}
		numero=prompt("ingrese un valor");
		numero=parseInt(numero);
		while(numero<0||numero>10000||isNaN(numero))
			{
				numero=prompt("error,ingrese un valor de 0 a 10000");
				numero=parseInt(numero);
			}

			if(color=="rojo")
				{rojo=rojo+1}
			else
				{if(color=="rojo"&&numero>5000)
					{rojomayor=rojomayor+1}
				}


			if(numero<5000)
				{inferiores=inferiores+1}

			if(numero>Mascaro)
				{
					Mascaro=numero;
					Mascarocolor=color;
				}


PromedioNumero=PromedioNumero+numero;
contador=contador+1;
respuesta=prompt("desea continuar?(no para no continuar mas)");
	}
PromedioNumero=PromedioNumero/contador;
document.write("	cantidad de rojos: "+rojo);
document.write("	cantidad de rojos mayor a 5000 su precio: "+rojomayor);
document.write("	la cantidad de vehiculos con un precio inferior a 5000: "+inferiores);
document.write("	el promedio de vehiculos incresados es de: "+PromedioNumero);
document.write(" 	el auto mas caro es : "+Mascaro+" y su color es : "+Mascarocolor);
}
/*Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color 
(rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar
 al terminar el ingreso por document.write: 
a) La cantidad de rojos 
b) La cantidad de rojos con precio mayor a 5000 
c) La cantidad de vehiculos con precio inferior a 5000 
d) El promedio de todos los vehiculos ingresados.	
e) El mas caro y su color*/