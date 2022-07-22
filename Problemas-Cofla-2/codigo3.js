let alumnos =[{
    nombre: "Omar Rojas",
    email: "orojas3095@gmail.com",
    materia: "logica 1"
},{
    nombre: "Ernesto Dojas ",
    email: "era@gmail.com",
    materia: "logica 1"
},{
    nombre: "DinaOr",
    email: "dina@gmail.com",
    materia: "logica 3"
},{
    nombre: "Dalto Pro",
    email: "dalto@gmail.com",
    materia: "logica 1"
},{
    nombre: "Esteban",
    email: "esteban@gmail.com",
    materia: "logica 2"
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
};

boton.addEventListener("click",()=>{
    document.body.removeChild(boton);
    let elementos=document.querySelectorAll(".semana");
    console.log('asdasd', elementos);
    let semanasElegidas=document.querySelectorAll(".semana-elegida")
    for (let elemento in elementos){
        semana=elementos[elemento];
        semana.innerHTML=semanasElegidas[elemento].value;
    }
})
