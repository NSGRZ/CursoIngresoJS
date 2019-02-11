function mostrar()
{
//tomo la edad  
var Numero;
Numero = edad.value;
Numero = parseInt(Numero);
  
/*if(Numero >12){
	if(Numero <18)
	{ alert("adolescente")}
esta forma  sirve para hacer otras cosas con Else
} el if dentro del if  
*/
if(Numero>12&&Numero<18) //ahorra espacio pero no podemos manipular dentro de 12 y 18
{ alert("adolescente")}
}//FIN DE LA FUNCIÓN