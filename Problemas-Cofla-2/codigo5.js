/* Cofla desea recuperar sus notas de otro servidor.
Crea un sistema que almacene toda la informacion de las materias y
muestra en pantalla de forma ordenada*/


const materiasHTML = document.querySelector(".materias");

const materias=[
    {
        nombre: "fisica4",
        nota: 7
    },{
        nombre: "Calculo4",
        nota: 8
    },{
        nombre: "Bases de Datos 2",
        nota: 9
    },{
        nombre: "Matematicas",
        nota: 6
    },{
        nombre: "Programacion3",
        nota: 8
    }
];

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        let materia = materias[id];
        if(materia==undefined){
            reject("no existe la materia");
        }
        else{
            setTimeout(() => {resolve(materia)}, Math.random()*400);
        }
    })
}

const devolverMateria = async()=>{

    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i]= await obtenerMateria(i);  
        let newHTMLCode=`
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;   
        
        materiasHTML.innerHTML+=newHTMLCode;
    }

    
        
}

devolverMateria();

/*

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia=materias[id];
        if(materia==undefined){
            reject("No existe la materia");
        } else{ setTimeout(()=>{resolve(materia)},Math.random()*400)}
    })
}

const devolverMateria = async()=>{
    let materia=[]
    for (let i = 0; i < materias.length; i++) {
        materia[i]= await obtenerMateria(i)
        let newHTMLCode=`
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML+=newHTMLCode;
    }
}

devolverMateria();
*/

