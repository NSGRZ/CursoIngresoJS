function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje=""
switch(mesDelAño)
{
	case "Enero":
 	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	mensaje="este mes tiene 31 dias"
	break;

	case "Febrero":
	mensaje="este mes tiene 28 y cada tanto 29,pero nunca 30  dias"
	break;
		case "Septiembre":
	 	case "Abril":
		case "Junio":
		mensaje="este mes tiene 30 dias"
		break;

	}
	if(mensaje!="")
	{alert(mensaje)}
	
	



}