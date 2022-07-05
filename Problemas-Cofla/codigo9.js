let materias = {
		programacion: ["Perez","omar","jose","maria"],
		logica :["Rojas","jose","ernesto","maria"],
		quimica:["Perez", "omar","ernesto","maria"],
		fisica: ["Rojas", "jose","maria"]
	}

const inscribir = (alumno,materia)=>{
	let personas = materias[materia];
	if (personas.length >= 21) {
		document.write(`Losiento ${alumno} la clase de ${materia} ya estan llenas. <br><br>`)
	}
	else{
		personas.push(alumno);

		if (materia=="fisica"){
			materias={
				programacion: materias["programacion"],
				logica:materias["logica"],
				quimica:materias["quimica"],
				fisica: personas
			}
		}

		else if (materia=="quimica"){
			materias={
				programacion: materias["programacion"],
				logica: materias["logica"],
				quimica: personas,
				fisica: materias["fisica"]
			}
		}

		else if (materia=="logica"){
			materias = {
				programacion: materias["programacion"],
				logica: personas,
				quimica:materias["quimica"],
				fisica: materias["fisica"]
			}
		}

		else if (materia=="programacion"){
			materias={
				programacion: personas,
				logica:materias["logica"],
				quimica:materias["quimica"],
				fisica: materias["fisica"]
			}
		}

		document.write(`Felicidades ${alumno} ya te inscribiste en ${materia} <br><br>`)
	}
}

inscribir("kimi","fisica");
inscribir("dina","fisica");
inscribir("nico","fisica");
inscribir("mario","fisica");
inscribir("kimi","fisica");
inscribir("dina","fisica");
inscribir("nico","fisica");
inscribir("mario","fisica");
inscribir("kimi","fisica");
inscribir("dina","fisica");
inscribir("nico","fisica");
inscribir("mario","fisica");
inscribir("kimi","fisica");
inscribir("dina","fisica");
inscribir("nico","fisica");
inscribir("mario","fisica");
inscribir("kimi","fisica");
inscribir("dina","fisica");
inscribir("nico","fisica");
inscribir("mario","fisica");

