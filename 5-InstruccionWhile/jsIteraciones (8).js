function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var Numero
	var respuesta="si";
while(respuesta== "si")
{ Numero =prompt("ingrese un numero")
	Numero =parseInt(Numero)
	if (Numero<0) {
		negativo=negativo*Numero
	}
	else
		{positivo=positivo+Numero}
respuesta=prompt("desea continuar?")

}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN