
/*AXIOS
No necesita CONVERTIR A JSON, NO viene ENCAPSULADO

__________PETICION GET_________
axios("https://reqres.in/api/users")
.then(res=>console.log(res))


//__________PETICION POST_________
axios.post("https://reqres.in/api/users",{
    "nombre":  "Omar" ,
    "trabajo":  "líder" 
}).then(res=>console.log(res));
*/

// ___________FECTH Y AXIOS CON ASYNC Y AWAIT_____________

const getName=async()=>{
   
    /*let peticion = await fetch("informacion-axios.txt");
    let resultado = await peticion.json();*/
    //console.log(resultado)
    
    let resultado= await axios("informacion-axios.txt")

    let div = document.createElement("DIV");
    div.classList.add("name");
    div.innerHTML=resultado.data.nombre; // se agrego data para axios
    document.body.appendChild(div);
}
const getApellido=async()=>{
    
    /*let peticion = await fetch("informacion-axios.txt");
    let resultado = await peticion.json();
    //console.log(resultado)*/

    let resultado= await axios("informacion-axios.txt")
    
    let div = document.createElement("DIV");
    div.classList.add("apellido");
    div.innerHTML=resultado.data.apellido; // se agrego data para axios
    document.body.appendChild(div);
}

document.querySelector("#nombre").addEventListener("click",()=>{getName()});
document.querySelector("#apellido").addEventListener("click",()=>{getApellido()});
