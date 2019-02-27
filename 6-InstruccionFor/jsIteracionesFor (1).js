function mostrar()

{ 
	var NumeroRandom;
		var contador1=0;
		var contador2=0;
		var contador3=0;
		var contador4=0;
		var contador5=0;
		var contador6=0;
		var contador7=0;
		var contador8=0;
		var contador9=0;
		var contador10=0;
var Ganador
Ganador=prompt("ingrese su numero ganador")
Ganador=parseInt(Ganador)









	for(contador=0;contador<10;contador=contador+1)
	{	
		
		NumeroRandom=Math.random()*10+1;
		NumeroRandom=parseInt(NumeroRandom);
		switch(NumeroRandom)
		{
			case 1:
			contador1=contador1+1;
			break;
			case 2:
			contador2=contador2+1;
			break;
			case 3:
			contador3=contador3+1;
			break;
			case 4:
			contador4=contador4+1;
			break;
			case 5:
			contador5=contador5+1;
			break;

			case 6:
			contador6=contador6+1;
			break;
			case 7:
			Porcentaje=contador7*100/contador;
			if(Porcentaje>0.001)
			{contador--;
				continue;
				}
			contador7=contador7+1;
			break;
			case 8:
			contador8=contador8+1;
			break;
			case 9 :
			contador9=contador9+1;
			break;
			case 10:
			contador10=contador10+1;
			break;
	
		}
		
		}
	

console.log("el 1 Salio: "+contador1+" veces "+(contador1*100)/contador+"%");
console.log("el 2 Salio: "+contador2+" veces "+(contador2*100)/contador+"%");	
console.log("el 3 Salio: "+contador3+" veces "+(contador3*100)/contador+"%");	
console.log("el 4 Salio: "+contador4+" veces "+(contador4*100)/contador+"%");	
console.log("el 5 Salio: "+contador5+" veces "+(contador5*100)/contador+"%");	
console.log("el 6 Salio: "+contador6+" veces "+(contador6*100)/contador+"%");	
console.log("el 7 Salio: "+contador7+" veces "+(contador7*100)/contador+"%");	
console.log("el 8 Salio: "+contador8+" veces "+(contador8*100)/contador+"%");	
console.log("el 9 Salio: "+contador9+" veces "+(contador9*100)/contador+"%");	
console.log("el 10 Salio: "+contador10+" veces "+(contador10*100)/contador+"%");	
console.log(contador+" el dado rodò");
suma=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;
console.log(suma+" salieron todos");

if(Ganador==NumeroRandom)
{
	alert("Ganaste!!!!!")
}
else
	{ alert("Perdiste :( inserta dinero de nuevo")}
console.log(NumeroRandom)
}

//for de 1 a 10 y que sume  de a 1