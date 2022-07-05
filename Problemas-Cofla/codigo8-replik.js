const obtenerInfo =(materia)=>{
	materias = {
		programacion: ["Perez","omar","jose","maria"],
		logica :["Rojas","jose","ernesto","maria"],
		quimica:["Perez", "omar","ernesto","maria"],
		fisica: ["Rojas", "jose","maria"]
	}
	if (materia != undefined) {
		return [materias[materia],materia];
	}
	else{
		return materias;
	}
}

const mostrarInfo = (materia)=>{
	let información = obtenerInfo(materia);
	let profesor = información[0][0];
	let alumnos = información[0];
	alumnos.shift();
	document.write(`El profesor es: ${profesor} y los alumnos son: ${alumnos}`)
}

const claseAlumno = (alumno)=>{
	let información = obtenerInfo();
	let cantidadClases = 0;
	let clasesAlumno=[];
	for(let inf in información){
		if(información[inf].includes(alumno)){
			cantidadClases++;
			clasesAlumno.push(inf + " ");
		}
	}
	return cantidadClases + clasesAlumno;
}

document.write(claseAlumno("omar"));