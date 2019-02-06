/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
var nombre; 
	nombre = prompt("ingrese nombre :");
   //elNombre ; representa lo mismo document.getElementById("elNombre")
   //document.getElementById("elNombre") dame un elemento por el id (este funciona en todos los exploradores)
   document.getElementById("elNombre").value = nombre
}

