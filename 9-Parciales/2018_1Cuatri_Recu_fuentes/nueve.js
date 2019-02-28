function mostrar()
{	var animal;
	var peso;
	var Promedio=0
	var PromedioAnimal=0
	var temperatura;
	var contador =0
	var respuesta ="no";
	
	while(respuesta!="si")
{	animal =prompt("ingrese El nombre de el Animal");
	peso = prompt("ingrese el Peso del Animal");
	
	if(peso >1001 || peso <1)
	{
		alert("Peso no es correcto,ingresar el peso entre 1 y 1000KG");
		peso=prompt("ingrese el Peso de el Animal");
	}
	peso=parseInt(peso);
	contador++
	PromedioAnimal=peso+PromedioAnimal
	Promedio=PromedioAnimal/contador
	Promedio=parseInt(Promedio)
	temperatura = prompt("ingrese la Temperatura del Habitat");
	temperatura=parseInt(temperatura);
	
	console.log("Animal:"+animal+"/"+"Peso del animal:"+peso+"/"+"Temperatura del Habitat:"+temperatura)
	respuesta=prompt("Si?");
}


alert("promedio de Pesos: "+Promedio)
}
/*Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y
1000 y 
la temperatura del hábitat (entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/

/*
Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )
*/