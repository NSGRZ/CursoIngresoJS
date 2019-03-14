function mostrar()
{
	var continente;
	var Dias;
	var MedioDePago;
	var diasprecio;
	var precio;
	var respuesta;
		continente=selecContinente.value;
		Dias=prompt("Ingrese la cantidad de dias");
		MedioDePago=selecPago.value;
		Dias=parseInt(Dias);
		diasprecio=Dias*100;
	switch(continente)
	{
		case"America":// América  15% de descuentoa por débito se le agrega un 10% mas de descuento 
					switch(MedioDePago)
						{
							case "Débito":
								precio=0.25; 
								respuesta=diasprecio*precio;
								respuesta=diasprecio-respuesta;
								break;
							case "Cheque":
								precio=1.15;
								respuesta=diasprecio*precio;
								
								break;
							default:
								precio=0.15;
								respuesta=diasprecio*precio;
								respuesta=diasprecio-respuesta; 
								break;
						}
	
				break;

		case"África"://Si es África u Oceania tiene un 30% de descuento y 
		case"Oceania"://si además paga por MercadoPago o Efectivo se le agrega un 15% mas de descuento 
						
					switch(MedioDePago)
						{	case"Efectivo":
							case "MercadoPago":
								precio=0.45;
								respuesta=diasprecio*precio;
								respuesta=diasprecio-respuesta;
								break;
							case "Cheque":
								precio=1.15;
								respuesta=diasprecio*precio;
								
								break;
							default:
								precio=0.30;
								respuesta=diasprecio*precio;
								respuesta=diasprecio-respuesta;
								break;
						}
				break;
		case"Europa":  //Si es Europa tiene un 20% de descuento 
					switch(MedioDePago)//y si ademas paga por débito se le agrega un 15% ,
						{	case "MercadoPago":
								precio=0.30;
								respuesta=diasprecio*precio;
								respuesta=diasprecio-respuesta;

								break;
							case "Débito"://por MercadoPago un 10% y cualquier otro medio 5% 
								precio=0.35;
								respuesta=diasprecio*precio;
								respuesta=diasprecio-respuesta;
								break;
							case "Cheque":
								precio=1.15;
								respuesta=diasprecio*precio;
								
								break;
							default:
								precio=0.25;
								respuesta=diasprecio*precio;
								respuesta=diasprecio-respuesta;
						}		break;
			break;
		default:
			switch(MedioDePago)
				{
					case"Cheque":
						precio=1.35;
								respuesta=diasprecio*precio;
								
						break;
					default:
						precio=1.20;
								respuesta=diasprecio*precio;
								
						break;
				}

	}


			alert("el precio final es de :"+respuesta);
}
/*
Una empresa de viajes le solicita ingresar que continente le gustaria visitar 
y la cantidad de días , la oferta dice que por día se cobra $100 ,
 que se puede pagar de todas las maneras 


 
cualquier otro continente tiene un recargo del 20% 
en cualquier continenete , si paga con Cheque, se recarga un 15% de impuesto al cheque*/