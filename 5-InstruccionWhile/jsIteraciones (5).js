function mostrar()
{
var sexo = prompt("ingrese f ó m .");

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
while(sexo != "f" && sexo != "m") //si tenemos mas, es lo mismo && != "otra cosa" acá se busca
{//var sexo = prompt("ingrese f ó m .");
alert("error");
sexo = prompt("ingrese f ó m .");
}
if(sexo == "f" )
{sexo = "Femenino"}
else 
{if (sexo =="m")
{sexo = "Masculino"}}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN