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
var parquete = prompt("ingrese el tipo de paquete (solo desayuno) o (todo incluido)")
var MedioDePago
MedioDePago=prompt("Escriba medio de pago:(visa,paypal,mercadopago,efectivo,otro)")
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
var porcentaje
switch(MedioDePago)
{


case "visa" :
case "mercadopago":

porcentaje = mercadopago
break;
case "paypal":

switch()
{}
break;

case "efectivo":
switch()
{}
break;
default:
porcentaje = OtroMedio
break;




}




Resultado =habitacion-(habitacion*porcentaje/100) 
alert(Resultado)







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