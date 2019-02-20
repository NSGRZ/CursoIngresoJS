function mostrar()
{


/*var consola
consola = "m"
//var Sexos = ["f","m"]
/*switch(sexo)
{case "f":
 sexo ="Femenino"
 break;
case "m" :
sexo="Masculino"
break;
default:
sexo="no es un genero definido"
break;
}*/
//while(sexo != Sexos)
/*if(sexo == "f" || sexo == "m")
   { sexo == "1"}
while(sexo != "1" )
{
	
	if(sexo == "f" || sexo == "m")
   { sexo == "1"}
{sexo="Masculino"}


}*/
while(true)
{var sexo = prompt("ingrese f ó m .");
if(sexo == "f" ||sexo == "m")
{break;}


}
if(sexo == "f" )
{sexo = "Femenino"}
else 
{if (sexo =="m")
{sexo = "Masculino"}}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN