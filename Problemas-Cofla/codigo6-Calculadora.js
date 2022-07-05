	
class Calculadora { 

	sumar(num1,num2){
		return parseInt(num1) + parseInt(num2);
	}
	restar(num1,num2){
		return parseInt(num1) - parseInt(num2);
	}
	dividir(num1,num2){
		return parseInt(num1) / parseInt(num2);
	}
	multiplicar(num1,num2){
		return parseInt(num1) * parseInt(num2);
	}
	potencia(num1,num2){
		return parseInt(num1)**parseInt(num2);
	}
	raizcuadrada(num1){
		return Math.sqrt(num1);
	}
	raizcubica(num1){
		return Math.cbrt(num1);
	}
 }

 const calculadora = new Calculadora

 alert(`Que operación deseas realizar?`);
 let operacion = prompt ("1=Suma, 2=Resta, 3=Dividir, 4=Multiplicar, 5=Potenciar, 6=RaizCuadrada, 7=RaizCubica");

 if (operacion==1){
 	let numero1 = prompt("Primer numero para sumar");
 	let numero2 = prompt("Segundo numero para sumar");
 	resultado = calculadora.sumar(numero1,numero2);
 	alert(`Tu resultado es ${resultado}`);
 }

 else if (operacion==2){
 	let numero1 = prompt("Primer numero para restar");
 	let numero2 = prompt("Segundo numero para restar");
 	resultado = calculadora.restar(numero1,numero2);
 	alert(`Tu resultado es ${resultado}`);
 }

 else if (operacion==3){
 	let numero1 = prompt("Primer numero para dividir");
 	let numero2 = prompt("Segundo numero para dividir");
 	resultado = calculadora.dividir(numero1,numero2);
 	alert(`Tu resultado es ${resultado}`);
 }

 else if (operacion==4){
 	let numero1 = prompt("Primer numero para multiplicar");
 	let numero2 = prompt("Segundo numero para multiplicar");
 	resultado = calculadora.multiplicar(numero1,numero2);
 	alert(`Tu resultado es ${resultado}`);
 }

 else if (operacion==5){
 	let numero1 = prompt("Numero a Potenciar");
 	let numero2 = prompt("Indicar el exponente");
 	resultado = calculadora.potencia(numero1,numero2);
 	alert(`Tu resultado es ${resultado}`);
 }

 else if (operacion==6){
 	let numero1 = prompt("Numero a sacar Raiz Cuadrada");
 	resultado = calculadora.raizcuadrada(numero1);
 	alert(`Tu resultado es ${resultado}`);
 }

 else if (operacion==7){
 	let numero1 = prompt("Numero a sacar Raiz Cubica");
 	resultado = calculadora.raizcubica(numero1);
 	alert(`Tu resultado es ${resultado}`);
 }

 else{
 	alert("Fuck u");
 }