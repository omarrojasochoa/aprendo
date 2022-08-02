
/*
En JSON las propiedades de los objetos van en comilla
porque enviamos informacion a un servidor. 
Es igual que un OBJETO
*/

const serializado =`{
    "nombre":"omar",
    "apellido":"rojas"
}`;
console.log(typeof serializado);

/* DATOS ESTRUCTURADOS: 

    - SERIALIZADO: Es una cadena de texto (`string`) en forma
        de estructura JSON

            > JSON.stringify(): se usa para serializar objetos
            ej: 

             const serializado= JSON.stringify(deserializado);


    - DESERIALIZADO: Es la estructura JSON como tal

            > JSON.parse(): Se usa para deserializar un string
            en estructura de JSON

*/

const deserializado= JSON.parse(serializado);
console.log(typeof deserializado);