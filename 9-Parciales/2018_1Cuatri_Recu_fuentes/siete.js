function mostrar()
{
	
	var Sexo
	var Notas
	var NotaBaja
	var NotaAlta
	var Acumulador=0
	var Respuesta=0
	var Promedio=0
	while(Acumulador<5)
	{Acumulador=Acumulador+1
	 Notas=prompt("ingrese Nota")
	 Notas=parseInt(Notas)
	 while(Notas<0 && Notas>10)
	 {
	 Notas=prompt("incorrecto ingrese Nota")
	 Notas=parseInt(Notas)
	 Respuesta= Notas+Respuesta

	 }
	 sexo=prompt("ingrese Sexo")
	 while(sexo!="f"&& sexo !="m")
	 	{	 sexo=prompt("incorrecto ingrese Sexo")}
	
	}//whiles para cargar datos

	alert(Notas+sexo)

	if(Acumulador==5)  // ifs para modificar Datos
	{
		
		 Promedio=(Respuesta)/5
		alert(Promedio)
	}

}





/*ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales.    7 
b) La nota más baja y el sexo de esa persona.  6    m 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/  // 2