function mostrar()
{
	var edad;
	var sexo;
	var final;
	var respuesta;
	var contador=0;
	var promedio=0;
	var varones=0;
	var menores=0;
	var menoresfinal=0;
	var mayores=0;
	var mayoresfinal=0;
	var masculino=0;
	var masculinofinal=0;
	var mayoresfinal=0;
	var adolescentes=0;
	var adolescentesNota=0;
	var femenino=0;
	var femeninofinal=0;
	while(respuesta!="no")

		{
			edad=prompt("ingrese la edad");
			edad=parseInt(edad);

			while(edad<10||edad>99||isNaN(edad))
				{
					edad=prompt("error,ingrese una edad entre 10 y 99 años");
					edad=parseInt(edad);
				}
			sexo=prompt("ingrese el sexo");

			while(sexo!="femenino"&&sexo!="masculino")
				{sexo=prompt("error,ingrese femenino,masculino");}

			final=prompt("ingrese la nota del examen final");
			final=parseInt(final);

			while(final<0||final>10||isNaN(final))
				{
					final=prompt("ingrese la nota del examen final");
					final=parseInt(final);
				}

				if(sexo=="femenino")
						{
							femenino=femenino+1;
							femeninofinal=femeninofinal+final;
						}
								
							

				if(sexo=="masculino")
						{
							masculino=masculino+1;
							masculinofinal=masculinofinal+final;
							
						}
				else
					{
						if(sexo=="masculino"&&final>6)
									{varones=varones+1;}
					}

				if(edad>=13||edad<=17)
					{
						adolescentes=adolescentes+1;
						adolescentesNota=adolescentesNota+final;
						
					}
					
					if(edad<13)
							{	
								menores=menores+1;
								menoresfinal=final+menoresfinal;
								
							}	
					
						if(edad>17)
							{
								mayores=mayores+1;
								mayoresfinal=menoresfinal+final;
								
							}
						
					



			promedio=final+promedio;
			contador=contador+1;	
			respuesta=prompt("desea continuar?(no ,para no continuar");	
		}
//promedio=promedio/contador;
femeninofinal=femeninofinal/femenino;
masculinofinal=masculinofinal/masculino;
mayoresfinal=mayoresfinal/mayores;
menoresfinal=menoresfinal/menores;
adolescentesNota=adolescentesNota/adolescentes;
document.write("	El promedio de notas por sexo masculino: "+masculino);
document.write("	El promedio de notas por sexo femenino :"+femenino);
document.write("	La cantidad de varones aprobados: "+varones);
document.write("	El promedio de notas de los mayores"+mayoresfinal);
document.write("	El promedio de notas de los adolescentes: "+adolescentesNota);
document.write("	El promedio de notas de los menores de edad (menores de 13): "+menoresfinal);

//document.write("	promedio de todo	"+promedio);
}
/*Realizar el algoritmo que permita ingresar el nombre de un estudiante,
 la edad (validar) , el sexo (validar) y la nota del final (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de varones aprobados 
b) El promedio de notas de los menores de edad (menores de 13) 
c) El promedio de notas de los adolescentes (entre 13 y 17 inclusive). 
d) El promedio de notas de los mayores	(mayores de 17)	
f) El promedio de notas por sexo masculino y femenino*/