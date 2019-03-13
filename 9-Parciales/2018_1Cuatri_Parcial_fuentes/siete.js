function mostrar()
{
	var sexo;
	var nota;
	var contador=0;
	var Promedio=0;
	var MasAltaNota=0;
	var BajaNota=0;
	
	while(contador<5)
	{	nota=prompt("ingrese la nota del Alumno");
		nota=parseInt(nota);
		Promedio=nota+Promedio
		//sexo=prompt("ingrese si es f para Femenino o m para masculino");

		if(BajaNota != 0 && MasAltaNota != 0) //si max y min son distintos a 0
			{if(nota>MasAltaNota)   //y si numero es mayor a MasAltaNotaimo
				{MasAltaNota=nota;} //entonces MasAltaNotaimo es numero
			}
		else
			{if(nota<BajaNota) //pero si numero es menor a BajaNotaimo
				{BajaNota=nota;} //entonces BajaNotaimo es nota
			
		
		else //entonces BajaNotaimo es nota y MasAltaNotaimo es nota
			{	BajaNota=nota; 
				MasAltaNota=nota; 
			}
		}
			//else
		contador=contador+1;
	}
	alert(Promedio)
	alert(Promedio/contador+" es el promedio");
	alert("Nota mas baja --"+BajaNota);
	alert("Nota mas alta ++"+MasAltaNota);
	//5 10 20 30 40
}
/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales. -------
b) La nota más baja y el sexo de esa persona. -----
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/