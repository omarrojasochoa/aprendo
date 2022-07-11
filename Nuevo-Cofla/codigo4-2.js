let materias = {
    programacion: ["Perez","omar","jose","maria"],
    logica :["Rojas","jose","ernesto","maria"],
    quimica:["Perez", "omar","ernesto","maria"],
    fisica: ["Rojas", "jose","maria"]
}

const inscribir=(alumno,materia)=>{
    let personas=materias[materia];
    if(personas.length>=21){
        document.write(`Losiento ${alumno} la clase de ${materia} ya estan llenas. <br><br>`)
	}
    else{
        personas.push(alumno)
        if(materia=="programacion"){
            materias={
                programacion: personas,
                logica:materias["logica"],
                quimica:materias["quimica"],
                fisica:materias["fisica"],
            }
        }
        else if(materia=="logica"){
            materias={
                programacion : materias["logica"],
                logica:personas,
                quimica:materias["quimica"],
                fisica:materias["fisica"],
            }
        }
        else if(materia=="quimica"){
            materias={
                programacion:materias["programacion"],
                logica:materias["logica"],
                quimica:personas,
                fisica:materias["fisica"],
            }
        }
        else if(materia=="fisica"){
            materias={
                programacion:materias["programacion"],
                logica:materias["logica"],
                quimica:materias["quimica"],
                fisica:personas,
            }
        }
        document.write("Felicidades, ya te inscribiste.<br>")
    }
}

inscribir("kimi","logica");
inscribir("dina","logica");
inscribir("nico","logica");
inscribir("mario","logica");
inscribir("kimi","logica");
inscribir("dina","logica");
inscribir("nico","logica");
inscribir("mario","logica");
inscribir("kimi","logica");
inscribir("dina","logica");
inscribir("nico","logica");
inscribir("mario","logica");
inscribir("kimi","logica");
inscribir("dina","logica");
inscribir("nico","logica");
inscribir("mario","logica");
inscribir("kimi","logica");
inscribir("dina","logica");
inscribir("nico","logica");
inscribir("mario","logica");