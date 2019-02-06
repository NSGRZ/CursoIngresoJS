/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{//ingreso variables (las variables no tienen =)
var primerNumero;
var segundoNumero;
var suma;
//ingreso valores (busco en htlm el id para darle un .value)
primerNumero = numeroUno.value;
primerNumero = parseInt(primerNumero); //pareInt le dice a la maquina que es un valor numerico
segundoNumero = numeroDos.value;
segundoNumero = parseInt(segundoNumero); //sin PareInt te junta los dos numeros 
suma = primerNumero+segundoNumero; //realizo la interaccion de las variables
alert("la suma es "+ suma); //muestro los numeros el "+" junta cosas si no no tienen valor numerico
}

