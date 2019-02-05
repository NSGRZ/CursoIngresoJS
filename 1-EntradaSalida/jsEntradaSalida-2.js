/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//https://www.w3schools.com/jsref/met_win_prompt.asp  informacion del promt
	var nombre = prompt("Porfavor ingrese su nombre");  //las variables lo mas explisitas posible
    alert("Nombre ingresado "+nombre);  //puse un + de mas en el promt y bugeo todo el ejecutable
    var b = "Su nombre ah sido cargado exitosamente "
    alert(b);
}

