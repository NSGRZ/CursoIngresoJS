function mostrar()
{
	var Numerito; //ingreso la variable
	var contador
	Numerito = Math.floor((Math.random() * 10) + 1); //la variable tiene propiedad Aleatoria del  1 al 10
	Numerito = parseInt(Numerito);
	
    alert(Numerito); 
	if (Numerito >8)
		alert("EXCELENTE");
	{else
			{if(Numerito >3)
							alert("APROBÓ");}
			else
				{if(Numerito <4)
									alert("Vamos, la proxima se puede" );}
	}
}//FIN DE LA FUNCIÓN