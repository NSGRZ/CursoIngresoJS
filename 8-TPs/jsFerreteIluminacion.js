/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
 /*Marca.value
 ArgentinaLuz
 FelipeLamparas
 JeLuz
 HazIluminacion
 Osram
 precioDescuento.value*/
function CalcularPrecio () 
{
 	var CantidadLamparitas
 	var PrecioLamparita
 	var precioFinal
 	var cuenta

 	PrecioLamparita = 35
 	CantidadLamparitas=Cantidad.value
 	CantidadLamparitas=parseInt(CantidadLamparitas)
 	precioFinal=parseInt(precioFinal)
 	cuenta=parseInt(cuenta)
 	cuenta=PrecioLamparita*CantidadLamparitas
 	precioFinal=cuenta
 	precioDescuento.value=precioFinal


if(CantidadLamparitas>=6)//si cantidad de lamparitas mayor a 5
	{
		    precioFinal=cuenta*0.5
		    precioFinal= cuenta-precioFinal
		    precioDescuento.value=precioFinal+" "+"descuento del 50%"}
else		    
 	  
{if(CantidadLamparitas==5 && Marca.value == "ArgentinaLuz" )
	{		precioFinal=cuenta*40/100
		    precioFinal= cuenta-precioFinal

			precioDescuento.value=precioFinal+" "+"descuento del 40%"
	}
else
	{if(CantidadLamparitas==5 && Marca.value != "ArgentinaLuz")
		{		precioFinal=cuenta*30/100
			    precioFinal= cuenta-precioFinal
				precioDescuento.value=precioFinal+" "+"descuento del 30%"}
		
	else
	{if(CantidadLamparitas==4 && Marca.value == "ArgentinaLuz")
			
			{		precioFinal=cuenta*25/100
				    precioFinal= cuenta-precioFinal
					precioDescuento.value=precioFinal+" "+"descuento del 25%"
			}
		
		else	
		{if(CantidadLamparitas==4 &&  Marca.value == "FelipeLamparas" )
					        
						       {	 		precioFinal=cuenta*25/100
						   				 	precioFinal= cuenta-precioFinal
						               		precioDescuento.value=precioFinal+" "+"descuento del 25%"}
					if(CantidadLamparitas==4 && Marca.value != "ArgentinaLuz" && Marca.value != "FelipeLamparas")
					                   						{	precioFinal=cuenta*20/100
					                   							precioFinal= cuenta-precioFinal
					                   							precioDescuento.value=precioFinal+" "+"descuento del 20%"
					                   						}
				else
				{if(CantidadLamparitas==3 && Marca.value == "ArgentinaLuz")
									
									{		precioFinal=cuenta*15/100
										    precioFinal= cuenta-precioFinal
											precioDescuento.value=precioFinal+" "+"descuento de 15%"
									}
								
								else	
								{if(CantidadLamparitas==3 &&  Marca.value == "FelipeLamparas" )
																	       
																		       {	 	precioFinal=cuenta*10/100
																		   				precioFinal= cuenta-precioFinal
																		               	precioDescuento.value=precioFinal+" "+"descuento de 10%"}
																	               
																	               	if(CantidadLamparitas==3 && Marca.value != "ArgentinaLuz" && Marca.value != "FelipeLamparas")
																	                   					{	precioFinal=cuenta*5/100
																		    							 	precioFinal= cuenta-precioFinal
																	                   						precioDescuento.value=precioFinal+" "+"descuento de 5%"}
																	                   					}//else del felipe 10%
									                   					}//else del 15%
					                   					}//else del 25% felipe
			                   					}//else del 25%
		                   					}//else del 40%
	                   					}//else del 50%
        if(precioFinal>120)
	 		 	 	 	{	
	 		 	 	 		var IIBB
	 		 	 	 		IIBB=parseInt(IIBB)
	 		 	 	 		IIBB=precioFinal*10/100
	 		 	 	 		precioFinal=IIBB+precioFinal
	 		 	 	 		alert("IBB ES DE : "+IIBB)
	 		 	 	 		alert(" Usted pago : "+precioFinal+" CON IIBB incluido")
	 		 	 	 	 	 }

}