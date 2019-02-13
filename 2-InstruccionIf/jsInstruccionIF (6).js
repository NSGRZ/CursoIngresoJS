/*function mostrar()
{var Numero;
	 Numero = edad.value;
	 Numero = parseInt(Numero);
if(Numero>17) //si es mayor de 17
	{alert("usted es mayor de edad");}

else // si no es mayor a 17...
	if(Numero>12) //es mayor a 12?
		{alert("adolescente");}
	else //si no es un niño
		{alert("niño");} //niño
	

} */
function mostrar() //lo hice en casa
{
	var Numero;
	Numero = edad.value;
	Numero = parseInt(Numero);
	if(Numero > 12 && Numero <18)
	//if(Numero <13 || Numero >17) //signos contrarios a el &&
	{
		alert("eres un adolescente.");

	}
	else
		if(Numero >17)
			{
			  alert("eres mayor");
			}
  		else
  			if(Numero <13)
  			{
  				alert("eres un niño")
  			}




}