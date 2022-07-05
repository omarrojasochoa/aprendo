// problema 1 Cofla 2da parte
/*

let free = false;

const validarCliente = (time)=> {
	let edad = prompt ("Cual es tu edad pelotudo?");
	if (edad > 18) {
		
		if (time>=2 && time<7 && free == false) {
			alert ("pasa gratis pq eres la 1ra persona despues de las 2am");
			free == true;
		}
		
		else{
			alert (`son las ${time} podes pasar pero pagas hdp`);	
		}
	}
	else{
		alert (" No entras hdp1000ptas");
		}
}

validarCliente(24);

validarCliente(23);

validarCliente(1);

validarCliente(3);
*/
// problema 2 Cofla 2da parte */ 

let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

// 1er paso llenar la 1ra parte del array
// 2do paso crear una funcion que ayude a llenar la 2da parte del array
// 3er paso llenar la 2da parte del array

for (i = 0; i < cantidad; i++) {
	alumnosTotales[i]= [prompt("Nombre del alumno "+(i+1)),0];
}

const tomarAsistencia = (nombre,posicion)=>{

	let presencia = prompt(nombre);
	if (presencia=="p" ||presencia=="P" ) {
		alumnosTotales[posicion][1]++; //aqui aumenta el 2do array
	}
}

for (i=0; i <30; i++) {
	for (alumno in alumnosTotales) {
		tomarAsistencia(alumnosTotales[alumno][0], alumno);
	}
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>  
	Presente: ${alumnosTotales[alumno][1]} <br>
	Ausente: ${30-alumnosTotales[alumno][1]} <br>
	`;

	if ((30-alumnosTotales[alumno][1])> 18) {
		resultado += "Reprobado por Inasistencia <br><br>";
	}
	else{
		resultado;"<br><br>"
	}

	document.write(resultado);
}



