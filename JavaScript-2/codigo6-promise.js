/*let nombre="omaar";
const promesa = new Promise((resolve,reject)=>{
    if (nombre !=="omar"){
        reject ("lo siento, el nombre no es Omar")
    } else {
        resolve (nombre);
    } 
})
promesa.then((resultado)=>{// THEN esta vinculado con RESOLVE
    console.log (resultado);
}).catch((error)=>{//.CATCH vinculado con REJECT
    console.log (error);
}); 

 */

class Personas {
    constructor (nombre,instagram){
        this.nombre=nombre;
        this.instagram=instagram;
    }
}
const data = [
    ["Omar Rojas","@soyomar"],
    ["Dalto","@soydalto"],
    ["Camila Nesa","@milanesa"],
    ["Rancio Ramirez"],
];

const personas=[];
for (let i = 0; i < data.length; i++) {
    personas[i]=new Personas (data[i][0],data[i][1]);
    
}

const obtenerPersona =(id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id]==undefined){
            reject("No se encontro la persona");
        } else{
            resolve(personas[id]);
        }
    })
}

const obtenerInstagram =(id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id].instagram==undefined){
            reject("No se encontro el ig")
        } else{
            resolve(personas[id].instagram);
        }
    })
}

obtenerPersona(4).then((persona)=>{
    console.log(persona.nombre)
    obtenerInstagram(3).then((instagram)=>{
        console.log(instagram)
    }).catch((e)=>{
        console.log(e)
    })
}).catch((e)=>{
    console.log(e);
});
