/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//ingreso variables
	var primerNumero;
var segundoNumero;
var suma;
//les asigno los valores a las variables, en este caso tambien las hago numericas
primerNumero = numeroUno.value;
primerNumero = parseInt(primerNumero);
segundoNumero = numeroDos.value;
segundoNumero = parseInt(segundoNumero);
//realizo una accion entre las variables
suma = primerNumero + segundoNumero;
// muestro la accion entre las variables 
alert("la suma es :" + suma);
}

function restar()
{
	var primerNumero;
var segundoNumero;
var resta;
primerNumero = numeroUno.value;
primerNumero = parseInt(primerNumero);
segundoNumero = numeroDos.value;
segundoNumero = parseInt(segundoNumero);
resta = primerNumero - segundoNumero;
alert("la resta es :" + resta);
}

function multiplicar()
{ 
	var primerNumero;
var segundoNumero;
var multi;
primerNumero = numeroUno.value;
primerNumero = parseInt(primerNumero);
segundoNumero = numeroDos.value;
segundoNumero = parseInt(segundoNumero);
multi = primerNumero * segundoNumero;
alert("la multiplicacion es :" + multi);
}

function dividir()
{
	var primerNumero;
var segundoNumero;
var dividir;
primerNumero = numeroUno.value;
primerNumero = parseInt(primerNumero);
segundoNumero = numeroDos.value;
segundoNumero = parseInt(segundoNumero);
dividir = primerNumero / segundoNumero;
alert("la division es :" + dividir);
}

