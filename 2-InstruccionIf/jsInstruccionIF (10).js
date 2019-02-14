function mostrar()
{
	var Numerito; //ingreso la variable
	var contador
	Numerito = Math.floor((Math.random() * 10) + 1); //la variable tiene propiedad Aleatoria del  1 al 10
	Numerito = parseInt(Numerito);
	
     
	if (Numerito >8)
		{alert("EXCELENTE la nota es : "+Numerito);}
	else
			{if(Numerito >3)
							{alert("APROBÓ la nota es : "+Numerito);}
			else
				if(Numerito <4)
									{alert("Vamos, la proxima se puede tu nota es : "+Numerito );}}
	
}//FIN DE LA FUNCIÓN