/*

function saludar() { // Declaracion de Funcion
	// body...
	respuesta= prompt("Hola omar, tuviste un buen día?")

	if (respuesta == "si") {
		alert("me alegro")
	}

	else{
		alert("que pena")
	}
}

saludar(); // funcion
saludar();
saludar();
saludar(); */

/*
function suma(num1,num2) {
	// body...
	let res = num1+num2;
	document.write(res)
	return res;	
}

suma(6,20); 

function saludo(nombre) {
	// body...
	let sal= `hola ${nombre}. Hoy dormiste bien?`
	document.write(sal)
}

saludo("kim");*/

// FORMAS DE USAR FUNCION 

function saludo(nombre) {
	let frase= `hola ${nombre}. Hoy dormiste bien?`
	document.write(frase)
}

const saludo = function (nombre) {
	let frase= `hola ${nombre}. Hoy dormiste bien?`
	document.write(frase)
}

const saludo = nombre => { //función flecha
	let frase= `hola ${nombre}. Hoy dormiste bien?`
	document.write(frase) 
	//no lleva parentesis al inicio pq es solo
	//una variable 
}