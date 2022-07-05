/*numero1 = "10";

numero2 = 5;

frase = numero1.concat(numero2)
document.write(frase) 

`` = ALT+96 (backticks) dentro de el se puede 
usar codigo html
*/

nombre = "Omar";
frase = `Soy ${nombre}  - `;
document.write(frase);

/* OPERADORES DE EQUIVALENCIA o COMPARACION
 a==b igual
 a!=b desigual
 a===b identico
 a!==b no-identico
*/

/* OPERADORES LOGICOS
 	
 	a&&b (and o Y)
	a||b (or o O) ALT+124
	!a (NOT) retorna el valor contrario



let num1=12;
let num2=24;

af1= num1 > num2;
af2= num1 == num2;

document.write(af1 || af2)

/*CONDICIONALES */

nombre= "omar";
if (nombre =="pedro") {
	alert("tu mama calata")
}
else if (nombre=="omar"){
	alert("sos un capo, rey.")
}
else {
	document.write(`QUE CHCH HACES AQUI ${nombre}`)
}