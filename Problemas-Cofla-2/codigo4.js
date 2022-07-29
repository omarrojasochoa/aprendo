

const boton=document.querySelector(".boton");
let nota=document.querySelector(".nota");

boton.addEventListener("click",()=>{
    let prevRes,resultado,mensaje;
    try {
        prevRes= parseInt(nota.value);
        mensaje="hola";

        if (isNaN(prevRes)) {
            throw "";
        }
        mensaje=definirMensaje(prevRes);
        resultado=verificarAprobacion(8,6,prevRes); //nota1,nota2,prevRes
    } catch (error) {
        resultado= `TE CREES GRACIOSO HDP?`
        mensaje=`He descubierto que eres un hacker malo.`
    }

    abrirModal(resultado,mensaje);
})

const verificarAprobacion=(n1,n2,pr)=>{
    let resultado;
    let promedio=(n1+n2+pr)/3;
    if (promedio>=7){
        resultado = "APROBADO";
        return resultado;
    } else{
        resultado = "DESAPROBADO";
        return resultado;
    }
}

const definirMensaje=(pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado ="Ultima Prueba: No podes ser tan malo HDP";
        break;
        case 2: resultado ="Ultima Prueba: Sos malo para la materia";
        break;
        case 3: resultado ="Ultima Prueba: No sabes casi nada";
        break;
        case 4: resultado ="Ultima Prueba: Muy mal";
        break;
        case 5: resultado ="Ultima Prueba: Mal";
        break;
        case 6: resultado ="Ultima Prueba: Regular";
        break;
        case 7: resultado ="Ultima Prueba: Bien, pero puedes mejorar";
        break;
        case 8: resultado ="Ultima Prueba: Muy bien";
        break;
        case 9: resultado ="Ultima Prueba: Excelente";
        break;
        case 10: resultado ="Ultima Prueba: Insuperable HDP";
        break;
        default: resultado=null;
        // default es en caso no se cumpla ninguna anterior
    }
    return resultado;
}

const abrirModal=(res,msg)=>{
    document.querySelector(".resultado").innerHTML=res;
    document.querySelector(".mensaje").innerHTML=msg;
    let modal=document.querySelector(".modal-background");
    modal.style.display="flex";
    modal.style.animation="aparecer 0.5s forwards";
};