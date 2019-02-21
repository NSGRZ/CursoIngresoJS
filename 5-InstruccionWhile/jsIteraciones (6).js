function mostrar()
{

	var contador=0;
	var acumulador=0;
/*while(contador==0)//mientras contador sea 0
{contador=prompt("") //contador lo elige el usuario
 contador=parseInt(contador)
 if(contador>0) //si contador es mayor a 0
 	{contador+contador+contador+contador //contador +contador+contador+contador+contador
 		contador=acumulador
 		break;
 		}
}
*/
/*while(contador !=5)
	{var NumeroUno =prompt("numero 1")
		NumeroUno=pNumeroUnorseInt(NumeroUno)
		contador +1
		var NumeroDos =prompt("numero 2")
		NumeroDos=parseInt(NumeroDos)
		contador +1
	var NumeroTres =prompt("numero 3")
	NumeroTres=parseInt(NumeroTres)
		contador +1
	var NumeroCuatro =prompt("numero 4")
	NumeroCuatro=parseInt(NumeroCuatro)
		contador +1
	var NumeroCinco=prompt("numero 5")
	NumeroCinco=parseInt(NumeroCinco)
		contador +1

		acumulador=NumeroDos+NumeroCinco+NumeroCuatro+NumeroTres+NumeroUno
		break;
		}*/
		//interactuar con variables,este ejersicio
	var	Numero
	
	while(contador<5)
		{ Numero=prompt("ingrese un numero")//necesito que esto funcione 5 veces //perderia el anterior cada vez que paso el contador
			Numero=parseInt(Numero)
			contador=contador+1 //para que el contador vaya sumando hasta que llegue 5 veces 
			acumulador=acumulador+Numero //acá suma la variable para que no se pierda la variable que fue cambiando
		}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador; //si pongo 5,hace 5 veces el promedio o
														//si pongo "contador" lo haria en promedio 
														//de infinitas veces depende el while

}//FIN DE LA FUNCIÓN


/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/