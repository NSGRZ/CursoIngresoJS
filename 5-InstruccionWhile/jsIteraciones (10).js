function mostrar()
{

	var contadorpositivo=0;
	var contadorNegativo=0
	var contadorCero=0
	var negativo=0;
	var positivo=0;
	var numero
	var resto
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero que no sea 0")
		numero=parseInt(numero)
if(numero<0)
{
	negativo=negativo+numero
	contadorNegativo=contadorNegativo+1
	resto=numero%2
		
}
else {if(numero>0)
{	
	positivo=positivo+numero
	contadorpositivo=contadorpositivo+1
	resto=numero%2

}
else{if(numero==0)
{contadorCero=contadorCero+1
}


//del =0
}//del >0
}//del numero<0





	respuesta=prompt("desea continuar?")
	}
var Resultado
Resultado=positivo+negativo

	if(positivo>0)
{alert("cantidad de positvos = "+contadorpositivo+" resultado: "+positivo)
	alert("El promedio de los positivos es"+(positivo/contadorpositivo))
}

	if(negativo<0)
	{alert("cantidad de negativo = "+contadorNegativo+" resultado: "+negativo)
	alert("El promedio de los negativos es: "+(negativo/contadorNegativo))}
if(negativo<0 && positivo>0)
{alert("La diferencia entre positivo y negativo es: "+Resultado)
}
if(numero==0)
{alert("cantidad de 0 :"+contadorCero)}

if(resto == 0)
	{ alert(numero+"es par")}


}//FIN DE LA FUNCIÓN

/*1-Suma de los negativos.
 2-Suma de los positivos.
  3-Cantidad de positivos.
   4-Cantidad de negativos.
    5-Cantidad de ceros.
 6-Cantidad de números pares
. 7-Promedio de positivos
. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/