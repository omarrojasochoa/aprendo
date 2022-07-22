/*

PROBLEMA 1:
Cofla reprobo 2 materias, debe enviar 1 formulario para registrarse
en la materia que debe

    - El formulario debe contener nombre completo, correo, materia adeudada
    - Se debe validar que el mail sea valido, que los nombres sean reales
    - Se debe enviar al Servidor de manera publica

*/
const nombre=document.querySelector(".nombre");
const email=document.querySelector(".email");
const materia=document.querySelector(".materia");
const boton=document.querySelector(".boton");
const resultado=document.querySelector(".resultado")

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error= validarCampos();
    if(error[0]){
        resultado.innerHTML=error[1];
        resultado.classList.add("red");
    } else{
        resultado.innerHTML="Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos=()=>{
    let error=[];
    error[0]=false;
    if(nombre.value.length<5){
        error[0]=true;
        error[1]="El nombre no puede contener menos de 5 caracteres";
        return error;
    } else if(nombre.value.length>40){
        error[0]=true;
        error[1]="El nombre no puede contener mas de 40 caracteres";
        return error;
    } else if (email.value.length<5||email.value.length>40){
        error[0]=true;
        error[1]="El mail es invalido"
        return error;
    }
    return error;
}
//error[0]: T o F (es un error o no?)
//error[1]: Motivo del error.