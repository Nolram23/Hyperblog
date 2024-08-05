// exportando el metodo prompt de js.
const prompt=require("prompt-sync")({sigint:true});
// ejercicio calcular el precio total con iva.
/*let precio = prompt("ingrese el precio base:  ");
let iva = 19/100;
let precioint = parseFloat(precio)

function precioTotal (precioint, iva) {
let total = null

  if (precio != null){
  total = precioint + (precioint * iva);
  console.log ( total)
  } return total

}
precioTotal(precioint, iva);


// ejercicios calcular el area de un cuadrado
const lado = prompt("ingrese la medida de un lado del cuadrado: ");
let area = lado * lado
let perimetro = (lado * 4);
console.log ("el area del cuadrado es: " + area + ", y el perimetro es: " + perimetro);


// ejercicio saludo con tu nombre
let nombre = prompt(" escribe tu nombre:  ");
console.log ( "Hola, " + nombre);



// ejercicio promedio de 3 numeros:
var numeroUno = parseFloat(prompt ("Ingrese el primer numero: "));
var numeroDos = parseFloat(prompt ("Ingrese el segundo numero: "));
var numeroTres = parseFloat(prompt ("Ingrese el tercer numero: "));

const promedio = (numeroUno + numeroDos + numeroTres)/3;
console.log ( "El promedio de los 3 numeros es: " + promedio);


//ejercicio para calcular el consumo de litros de combustible por cada kilometro recorrido:

var numLt = parseFloat(prompt ("Ingrese el numero de litros de combustible consumidos: "));
var numKm = parseFloat(prompt ("Ingrese el numero de kilometros recorridos: "));

let consumo = (numLt/numKm)
console.log ( "El consumo de litros de combustible por cada kilometro recorrido es: " + consumo + " L/Km.");

// realizado sin metodo prompt
let horas = 2;
let min = 30;
let segundos;
//las horas a segundos
segundos = 2*60*60;
//ahora sumo los minutos en segundos
segundos += 30*60;
console.log("segundos "+segundos);


// ejercicios para calcular el tiempo en segundos:
var numHours = parseFloat(prompt ("Ingrese el tiempo en Horas: "));
let segundos = (numHours*60*60);
var numMinutes = parseFloat(prompt ("Ingrese el tiempo en Minutos: "));
segundos += (numMinutes*60);

console.log ( "El tiempo en segundos es: " + segundos + " seg.");

// pedir un numero de dos digitos y entregar cuantas decenas y unidades tiene
var numero = parseInt(prompt ("Ingrese un numero de 2 digitos: "));
let decenas = parseInt(numero/10);
let unidades = numero%10;
console.log ( "este numero tiene: " + decenas + " decenas, y tiene " + unidades + " unidades.");



// ejercicio para calcular la cantidad de ingredientes de una receta por cada comensal
//cantidad por persona para una tortila
var gramosPatatas = 200;
var huevos= 1;
var gramosCebolla = 300/1000*200;
var comensal = parseInt(prompt("Escribe el numero de Comensales: "));
var huevosTotales = huevos*comensal;
var gramosCebollaTotales = gramosCebolla*comensal;
var gramosPatatasTotales = gramosPatatas*comensal
console.log ("se necesitan " + gramosPatatasTotales + " gramos de patata, " + huevosTotales + " huevos, y " + gramosCebollaTotales + " gramos de cebolla.")

var comensales, papas, huevos, cebolla;
comensales = parseInt(prompt("Comensales: "));
papas = comensales*200;
if (papas < 1000) {
  papas = papas
  huevos = 1 * comensales;
  cebolla = comensales*300/1000*200;
  console.log("Patatas " + papas+" gramos");
  console.log("Huevos " + huevos);
  console.log("Cebolla "+cebolla +" gramos");

} else {
  papas = papas /1000 //en kilos
  huevos = papas*5;
  cebolla = papas*300;
  console.log("Patatas " + papas+" kilos");
  console.log("Huevos " + huevos);
  console.log("Cebolla "+cebolla +" gramos");
}



// Tienes que escribir un programa que intercambie el valor de dos variables. 
// Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. 
// No vale usar arrays ni asignación múltiple
let varUno = 10;
let varDos = 30;

let varTres = varUno;
varUno = varDos;
varDos = varTres;
console.log ( "varUno: " + varUno + " varDos: " + varDos)



// script que devuelve true si un numero es par y false si es impar
var num = parseInt ( prompt ( "Ingrese un numero entero: "));
var residuo = num%2
var par = residuo==0;
console.log ("¿es par? :" + par);

// variacion usando condicionales
var num = parseInt ( prompt ( "Ingrese un numero entero: "));
var residuo = num%2;
if (residuo == 0) {
  console.log ("el numero es par - true")
}else {
  console.log ("el numero es impar - false")
};



// ejercicio que comprueba si la letra es correcta
let L = prompt("digite una letra entre A, B, C, y D: ").trim();
console.log(L);
if (L.toUpperCase()=== 'A'){
  B= L.toUpperCase();
  console.log(B);
  console.log("el resultado es correcto")
}else{
  console.log("el resultado es incorrecto")
};



// En este ejemplo el usuario tecleará dos números. Debe devvolver la diferencia entre el mayor y el menor
var num1= parseFloat(prompt("ingrese un numero: "));
var num2= parseFloat(prompt("ingrese un numero: "));
let resultado = num1-num2;
if (num1==num2){
  console.log("la diferencia es cero")
}else if (num1<num2) {
console.log("la diferencia es negativa, el resultado es: "+ resultado)
}else {
  console.log("el resultado es: "+ resultado)
}
*/
/**Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas,
para ello el cliente puede pedir vino, cerveza, refresco, agua.
Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.
**/
/*
console.log("hola Sr. cliente, que desea ordenar?")
let pedido = prompt("Elija entre 'vino, cerveza, refresco o agua': ");
if (pedido.toLowerCase() == "vino" || pedido.toLowerCase() == "cerveza") {
  console.log("Por favor dirijase a la barra de bebidas");
}else if (pedido.toLowerCase()== "refresco" || pedido.toLowerCase()== "agua"){
  console.log("Por favor dirijase a la barra de comidas")
}else {
  console.log("Por favor, elije una opcion valida.")
}

*/

/**Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio.
 * El resultado que dará será suspenso si la media es menor de 5,
 * aprobado si está entre 5 y 7 y  Notable por encima de 7. */
/*
var nota1= parseFloat(prompt("Escribe la nota del primer trimestre: "));
var nota2= parseFloat(prompt("Escribe la nota del segundo trimestre: "));
var nota3= parseFloat(prompt("Escribe la nota del tercer trimestre: "));
let prom=((nota1+nota2+nota3)/3);
if (prom <= 5){
  console.log("tu promedio es bajo: " + prom);
}else if (prom> 5 && prom <= 7){
  console.log("tu promedio es aprobado: " + prom);
}else {
  console.log("tu promedio es Notable: " + prom);
};
*/

