/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var Valor;
    var Resultad;

Valor = sueldo.value;
Valor = parseInt(Valor);
Resultad = resultado.value;
Resultad = Valor*1.1;

	
}
