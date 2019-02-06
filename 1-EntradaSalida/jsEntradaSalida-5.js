/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//ingreso variables
	var nombre;
	var edad;
	//le doy  valora las variables
	 nombre = elNombre.value;
	 edad = laEdad.value;
	 //ejecuto la variable
 // alert(nombre + edad); ejemplo anterior
 alert("Usted se llama "+ nombre +" y tiene "+ edad + "años");
} 