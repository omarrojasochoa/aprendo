/*
1. Cofla debe tener 90% asistencias
2. Promedio >= 7/10 
3. Trabajos Practicos >=75/100. 

Solicitar los datos y decirle si aprueba o no.
Mostrar todo esto en colores representativos en consola (ej. No aprobar en rojo)*/

let materias = { //1: Porcentaje de asistencia, 2. promedio 
	fisica: [90,6,3,"fisica"],
	matematica:[84,8,2,"matematica"],
	logica:[92,8,4,"logica"],
	quimica:[96,8,4,"quimica"],
	calculo:[91,6,3,"calculo"],
	programacion:[79,7,4,"programacion"],
	biologia:[75,9,2,"biologia"],
	bbdd:[98,9,1,"bbdd"],
	algebra:[100,10,4,"algebra"]
}

const asistencia = ()=>{
	for (materia in materias){
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajo = materias[materia][2];
		console.log(materias[materia][3]);

		if(asistencias>=90){
			console.log("%c Asistencia en orden","color:green");
		}
		else{
			console.log("%c Falta de Asistencia","color:red")
		}

		if (promedio>=7){
			console.log("%c Aprobo el curso","color:green");
		}
		else{
			console.log("%c No aprobo el curso","color:red")
		}

		if (trabajo>=3){
			console.log("%c Trabajos practicos en orden","color:green");
		}
		else{
			console.log("%c Faltan trabajos.","color:red")
		}
	}
}

asistencia();