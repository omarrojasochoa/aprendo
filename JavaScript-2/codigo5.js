/* 

---------------CALLBACKS------------------
Es una funcion dentro de otra funcion



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
    ["Rancio Ramirez","@rancio"],
];

const personas= [];
for (let i = 0; i < data.length; i++) {
    personas[i] = new Personas(data[i][0],data[i][1]);
}

const obtenerPersona=(id,cb)=>{// cb = callback
    if (personas[id]== undefined){
        cb("No se encontro la persona");
    }
    else{
        cb(null,personas[id])
    }
};

obtenerPersona(0,(err,persona)=>{
    if (err){
        console.log(err);
    }
    else {
        console.log(persona.nombre);
        console.log(obtenerInstagram());
    }
})

const obtenerInstagram= (id,cb)=>{
    if (personas[id]== undefined){
        cb("No se encontro el instagram");
    }
    else{
        cb(null,personas[id].instagram)
    }
}