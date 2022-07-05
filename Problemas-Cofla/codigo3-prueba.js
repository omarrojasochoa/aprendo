/*let cantidadAlumnos= prompt("Cuantos alumnos son?");
let alumnosTotales=[];

for (i=0; i < cantidadAlumnos; i++) {
	alumnosTotales[i]=[prompt("nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,posicion)=>{
	let presencia = prompt(nombre);
	if (presencia=="p" || presencia=="P") {
		alumnosTotales[posicion][1]++;
	}
}

for (i=0; i<30; i++){
	for (alumno in alumnosTotales) {
		tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}
}

for (alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}: <br>
	___Presente: ${alumnosTotales[alumno][1]} <br>
	___Ausente: ${30-alumnosTotales[alumno][1]} <br>

	`
		if (30-alumnosTotales[alumno][1]>18){
			resultado+= "Estas reprobado por inasistencia <br><br>";
		}
		
		else{
			resultado; "<br><br>"
		}
	document.write(resultado);
}
*/
/*
let free = false;

const validarCliente = (time)=>{
	let edad = prompt("Cuantos años tienes?")
	if (edad>=18) {
		if (time>=2 && time<7 && free == false) {
			alert("Pasa gratis pq eres la 1ra persona despues de las 2am")
			free = true;
		}
		else{
			alert("Puedes pasar pero debes pagar ctm.")
		}
	}
	else{
		alert("No podes pasar menor hdp")
	}
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
*/


const suma = (num1,num2)=>{
	let r= num1+num2;
	return r;
}
const resta = (num1,num2)=>{
	let r= num1-num2;
	return r;
}
const multiplicacion = (num1,num2)=>{
	let r= num1*num2;
	return r;
}
const division = (num1,num2)=>{
	let r= num1/num2;
	return r;
}