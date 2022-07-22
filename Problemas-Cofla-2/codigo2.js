/*
Los datos de Cofla y otros alumnos fueron recibidos y ya estan almacenados,
ahora hay qe crear un sistema que muestre esa informacion y se pueda asignar 
cuando rinde.

    - La interfaz debe ser agradable y atractiva
    - Debe contener todos los datos de manera estructurada
    - El profesor puede seleccionar en cual de los 2 semana rinde el usuario
    - Si el profesor confirma, los datos se deben actualizar y reemplazar
    el espacio de seleccion de semana por la semana seleccionada 

*/

let alumnos=[{
    nombre:"Lucas Dalto",
    email: "lucasdalto@gmail.com",
    materia: "Fisica 3"
},{
    nombre:"Omar Rojas",
    email: "orojas3095@gmail.com",
    materia: "Fisica 1"
},{
    nombre:"Kimi Micha",
    email: "Kimi@gmail.com",
    materia: "Fisica 1"
},{
    nombre:"Robert Can",
    email: "robert@gmail.com",
    materia: "Fisica 3"
},{
    nombre:"Dina Rojas",
    email: "dina@gmail.com",
    materia: "Fisica 2"
}];

const boton=document.querySelector(".button");
const contenedor=document.querySelector(".grid-container");

for (alumno in alumnos){
    let datos= alumnos[alumno];
    let nombre=datos["nombre"];
    let email=datos["email"];
    let materia=datos["materia"]
    let htmlCode=`
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
    </div>`

    document.querySelector(".grid-container").innerHTML+=htmlCode;
}

boton.addEventListener("click",()=>{
    let confirmar=confirm("Deseas confirmar los cursos?")
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas=document.querySelectorAll(".semana-elegida");
        for(let elemento in elementos){
        semana=elementos[elemento];
        semana.innerHTML=semanasElegidas[elemento].value;
    }
    }
})