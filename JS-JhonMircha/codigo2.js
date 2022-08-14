/*
------------ CALL APPLY Y BIND ---------

console.log (this) -> me arroja el objeto windows
this.lugar="Contexto Global"

function saludar(saludo,aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar();

const obj = {
    lugar:"Contexto Objeto"
}

saludar.call(obj,"hola","omar") -> manda a llamar al obejto Obj 
                                y toma el obj.lugar 

------------------
DOM:

constantes que empiecen con $, son variables del DOM
ejm:
        const $input= document.querySelector(".input")


*/

 
 
 
 
 