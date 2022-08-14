/*

- Objeto XMLHttpRequest

- Enviar Peticiones GET

- Trabajar el Resultado de las Peticiones

- Objeto ActiveXObject

- Nueva forma de trabajar el resultado

- Enviar peticiones POST

- Objeto FormData

-------> BUSCAR EN LA CARPETA CODIGO.
*/


/*const peticion = new XMLHttpRequest();

//console.log(peticion)
peticion.addEventListener("readystatechange",()=>{
    if(peticion.readyState==4){
        //console.log(peticion.readyState); ->4; el de abajo nos bota la llave
        console.log(peticion.response)
    }
})
peticion.open("GET","informacion.txt");
//abre un metodo GET o POST en mayuscula.
//El segundo paramentro es donde se pide el archivo

peticion.send() //La peticion se envio

//console.log (peticion)- codigo de respuesta debe ser 3-4 
y el estatus debe ser 200*/

//__________________USO DE GET___________________

/*const peticion = new XMLHttpRequest();

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status==200||peticion.status==201){
        respuesta=peticion.response;
    } else{
        respuesta="Losiento, no se encontro el recurso"
    }
    console.log(JSON.parse(respuesta));
})
peticion.open("GET","informacion.txt");
peticion.send()

//___________________USO DE POST______________

 -> Objeto ActiveXObject: Se usa para internet explorer
*/

const peticion = new XMLHttpRequest();

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status==200||peticion.status==201){
        respuesta=peticion.response;
    } else{
        respuesta="Losiento, no se encontro el recurso"
    }
    console.log(JSON.parse(respuesta));
})
peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("content-type","application/json;charset=UTF8")

peticion.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}));