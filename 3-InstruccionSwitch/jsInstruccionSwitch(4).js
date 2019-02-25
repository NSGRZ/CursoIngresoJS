function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	
var mensaje
switch(mesDelAño)

{	case"Febrero":
	mensaje= "este mes tiene 28 dias";
	break;

	case"Abril":
	case"Junio":
	case"Septiembre":
	case"Noviembre":
	mensaje="Este mes tiene 30 dias";
	break;

	default:
	mensaje="este mes tiene 31 dias";
	break;

}
alert(mensaje)



}//FIN DE LA FUNCIÓN
