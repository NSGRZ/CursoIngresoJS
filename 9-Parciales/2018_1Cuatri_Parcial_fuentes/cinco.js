function mostrar()
{
var planetas
planetas =prompt("ingrese artificios de el sistema solar")
switch(planetas)
{
	case"mercurio":
	case"venus":
	Planetas="acà hace màs calor"
	break;
	case"tierra":
	Planetas="acá vivimos"
	break;
	case"marte":	
	case"jupiter":	
	case"saturno":	
	case"urano":
	case"neptuno":
	Planetas="acà hace màs frio"
	break;
	case"pluton":
	Planetas="Pluton es un planeta"
	break;
	default:
	Planetas="Eso No es un Planeta Vàlido"
	break;

}
alert(Planetas);
}
/*Bienvenidos (SWITCH). 
pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/