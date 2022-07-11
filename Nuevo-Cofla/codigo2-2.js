//alumnos 19
//tiempo 30 dias
// sistema 

let cantidad = prompt ("Cuantos Alumnos son?");
let alumnosTotales=[];

for(i=0;i<cantidad;i++){
    alumnosTotales[i]=[prompt("Nombre del Alumno"+(i+1)),0];
}

const tomarAsistencia = (nombre,posicion)=>{
    let presencia = prompt(nombre);
    if (presencia=="p" || presencia=="P"){
        alumnosTotales[posicion][1]++;
    }
}

for (i=0;i<30;i++){
    for (alumno in alumnosTotales){
        tomarAsistencia (alumnosTotales[alumno][0],alumno);
    }
}

for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    Presente: ${alumnosTotales[alumno][1]}<br>
    Ausente: (${30-alumnosTotales[alumno][1]})<br>`;
    
    if ((30-alumnosTotales[alumno][1])>18){
        resultado+= "Reprobado por Inasistencia <br><br>";
    }
    else{
        resultado; "<br><br>"
    }

    document.write(resultado);
}
