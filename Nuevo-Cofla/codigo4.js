const obtenerInfo= (materia)=>{
    materias={
        programacion:["Perez","omar","jose","maria"],
        logica:["Rojas","jose","ernesto","maria"],
        quimica:["Perez","omar","ernesto","maria"],
        fisica:["Rojas","jose","maria"]    
    }

    if(materia!==undefined){
        return [materias[materia],materia,materias]
    }
    else{
		return materias;
	}
}

const mostrarInfo=(materia)=>{
    let info = obtenerInfo(materia);
    if(info!==false){
        let profesor=info[0][0];
        let alumnos=info[0];
        alumnos.shift();
        document.write(`El profesor de ${info[1]}
        es ${profesor} y sus alumnos son ${alumnos}.<br><br>`)
    }
}

const claseAlumno=(alumno)=>{
    let info = obtenerInfo();
    let clasesPresentes=[];
    let cantidad=0;
    for(let inf in info){
        if(info[inf].includes(alumno)){
            cantidad++;
            clasesPresentes.push(" "+inf);
        }
    }
    return `${alumno} esta en ${cantidad} clases. Esta cursando: ${clasesPresentes}<br><br>`
}

mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");
mostrarInfo("fisica");

document.write(claseAlumno("omar"));
document.write(claseAlumno("ernesto"));