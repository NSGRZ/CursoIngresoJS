function mostrar()
{	var bolsas;
	var sabor;
	var contador;
	var promedio;
	var sumakg=0;
	var liviano=0;
	var saborliviano;
	var carne=0;
	var carneKG=0;
	var promediocarne=0;
	contador=0
	while(contador<10)
	{
		bolsas=prompt("ingrese kg de las bolsas");
		bolsas=parseInt(bolsas);

		while(bolsas<0||bolsas>500||isNaN(bolsas))
			{	bolsas=prompt("ingrese cantidad de kg entre 0 a 500");
					bolsas=parseInt(bolsas);
			}
	
		sabor=prompt("ingrese el sabor carne,vegetales o pollo");
		while(sabor!="carne"&&sabor!="vegetales"&&sabor!="pollo")
			{sabor=prompt("error,ingrese el sabor, carne,vegetales o pollo");}

		if(liviano<bolsas)
			{
				liviano=bolsas;
				saborliviano=sabor;
			}

		if(sabor=="carne")
			{
				carne=carne+1;
				carneKG=bolsas+carneKG;
				promediocarne=carneKG/carne;
				promediocarne=parseInt(promediocarne);
				
			}	
	sumakg=bolsas+sumakg;	
	contador=contador+1;
	}
promedio=sumakg/contador;
promedio=parseInt(promedio);
alert("el promedio de kg es: "+promedio);
alert("el sabor mas liviano: "+saborliviano+" el peso mas liviano :"+liviano);
alert("promedio de los kg de carne: "+promediocarne+" la cantidad de bolsas de carne : "+carne);

}
/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos 
(validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert: 
a) El promedio de los kilos totales. 
b) El mas liviano y su sabor 
c) La cantidad de sabor carne y el promedio de kilos de sabor carne*/