/*_________________________USO DE FECTH_______________________
.text()
.json()
.blob()

//PETICION GET
let peticion= fetch("https://reqres.in/api/unknown/2"); //GET por defecto
    peticion.then((res)=>res.json()) // no funciona con corchetes
            .then((res)=>{console.log(res)})      
console.log (peticion)



//PETICION POST

let peticion= fetch("https://reqres.in/api/unknown/2",{
    method:"POST",
    body: JSON.stringify({
        "nombre":"Omar",
        "apellido":"Rojas"
    }),
    headers:{"Content-type":"application/json"}
});
    peticion.then((res)=>res.json()) // no funciona con corchetes
            .then((res)=>{console.log(res)})   
            

*/

//---------> USO DE blob() para IMAGENES O MULTIMEDIA
const imagen=document.querySelector(".img")
let peticion= fetch("kimi.jpg"); //
    peticion.then((res)=>res.blob()) // no funciona con corchetes
            .then(img=>imagen.src=URL.createObjectURL(img))
           
            /*imagen.src="kimi.jpg" tmbien pudo ser asi,
             pero este es distinto: 
             - URL.createObjectURL() crea un url temporal donde
             se almacena la imagen*/
            
             
             

