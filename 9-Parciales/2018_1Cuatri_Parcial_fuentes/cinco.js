function mostrar()
{
/*var planetas
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
alert(Planetas);*/
var MedioDePago
MedioDePago=prompt("Escriba medio de pago:(visa,paypal,mercadopago,efectivo,otro) y escriba separado si desea el paquete desayuno escriba (desayuno) para el paquete Todo Incluido escriba (todo) ")
var habitacion
habitacion=prompt("ingrese el monto de la habitacion")
var Visa = 10
var paypal = 15
var mercadopago = 10
var efectivo = 20
var OtroMedio = 5
var todoincluidoPaypal = 25
var todoincluidoEfectivo = 35
var soloDesayuno = 30
var Resultado
switch(MedioDePago)
{
	case "paypal"+"todo":
	Resultado =habitacion-(habitacion*todoincluidoPaypal/100)
	alert(Resultado)
break;

case  "efectivo"+"desayuno":
	Resultado =habitacion-(habitacion*soloDesayuno/100)
alert(Resultado)
break;

case  "efectivo"+"todo":
	Resultado =habitacion-(habitacion*todoincluidoEfectivo/100)
alert(Resultado)
break;

case "visa" :
case "mercadopago":
Resultado =habitacion-(habitacion*mercadopago/100) 
alert(Resultado)
break;
case "paypal":
Resultado =habitacion-(habitacion*paypal/100) 
alert(Resultado)
break;

case "efectivo":
Resultado =habitacion-(habitacion*efectivo/100) 
alert(Resultado)
break;
default:
Resultado =habitacion-(habitacion*OtroMedio/100) 
alert(Resultado)
break;




}












}
/*cada habitacion de un hotel tiene un precio,hay promociones segun el tipo de pago si es con
 tarjeta visa un 10%
su es por paypal un 15%
por mercado pago 10%
efectivo 20%
cualquier otro medio 5%.
si compraste el paquete "todo incluido"y pagas con paypal se te suma 10% al descuento = 25%

si pagas en efectivo ,tenes varias opciones
el paquete "soloDesayuno" te suma 10% de descuento al 20% anterior = 30%
si es el paquete "todoincluido" te suma un 15% = 25%
para el resto de los paquetes NO DESCUENTO ADICIONAL*/