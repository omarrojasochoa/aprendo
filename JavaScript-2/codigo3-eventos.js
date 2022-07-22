/*

Un evento sirve si esta asociado a un elemento. Puede ser al hacer click,
presionar una tecla, usar el scroll, etc.

Cuando un div coniene a un boton pero ambos tienen
evento. Cual hace caso primero?
RPTA: Entre mas especifico es por ahi empieza.

-para detener un evento: event.stopPropagation();
ej: const button=document.querySelector(".button");
    button.addEventListener("click",()=>{
        alert("sos un capo putah")
        button.stopPropagation()});

_________EVENTOS DE MOUSE_________

-"click": ocurre con un click
-"dblclick": ocurre con undoble click
-"mouseover": ocurre cuando el puntero se mueve sobre un elemento
o sobre uno de sus hijos
-"mouseout": ocurre cuando se mueve el puntero fuera de un elemento.

OTROS: 
contextmenu: Ocurre con un click derecho de un elemento.
mouseenter: Cuando el puntero se mueve DENTRO de un element.
mousemove: Cuando el puntero se mueve mientras esta sobre un element.
mouseleave: Cuando el puntero se mueve FUERA de un element.

_________EVENTOS DE TECLADO_________
-"keydown": Cuando una tecla se deja de presionar
-"keypress": Cuando una tecla se presiona
-"onkeyup": Ocurre despues de 2 eventos hayan concluido consecutivamente

_________EVENTOS DE LA INTERFAZ_________
-"error": Cuando sucede un error durante la carga de archivo Multimedia
-"load": cuando un objeto se ha cargado
-"beforeunload": Ocurre antes de que el doc este listo para descargarse
-"unload": Cuando se ha descargado una pagina
-"resize": Cuando cambia el tamaño de vista del documento(resolucion)
-"scroll": Cuando se desplaza la barra de desplazamiento
-"select": Cuando el usuario selecciona un text o un input  
        ej:
        const input = document.querySelector(".input-prueba")
        const contenedor=document.querySelector(".seleccionado")

        input.addEventListener=("select",(e)=>{
            let start= e.target.selectionStart;
            let end= e.target.selectionEnd;
            let textoCompleto= input.value;//input.value=texto dentro del input
            contenedor.innerHTML=textoCompleto.substring(start,end)
        })

_________________TIMERS__________________
-setTimeout(fx,tiempo en milisegundos): Se ejecuta la funcion despues
de cumplido el tiempo

        Para no ejecutarlo: clearTimeout (x). Ej:
            const x=setTimeout(fx,t)
            clearTimeout(x);

-setInterval(fx,tiempo en milisegundos): Se ejecuta la funcion cada "t"
tiempo en milisegundos.
        Para no ejecutarlo: clearInterval (x). Ej:
            const x=setInterval(fx,t)
            clearInterval(x);

- Para poder ejecutar un intervalo por determinado tiempo
        const intervalo=setInterval(()=>{
            alert("Hola")
        },2000);
        setTimeout(()=>{
            setInterval(intervalo)
        },5000);

    

*/

//const button=document.querySelector(".button");
//button.addEventListener("click",clicked);


const text=document.querySelector(".text");
text.addEventListener("copy",copied)
text.addEventListener("click",clicked);

const img = document.querySelector(".img");
img.addEventListener("-",dragged);

const input = document.querySelector(".input");
input.addEventListener("keydown",textModified)


function clicked(){
    alert(`Haz hecho click`);
}
function copied(){
    alert("Haz copiado el texto");
}
function dragged(){
    alert("Estas arrastrando la imagen");
}
 
function textModified(){
        const inputText=document.querySelector(".input-text ");
        inputText.innerText=input.value;
}

const button=document.querySelector(".button");
button.addEventListener("click",()=>{alert("sos un capo putah")});

const inputPrueba = document.querySelector(".input-prueba")
inputPrueba.addEventListener("keyup",(e)=>{
    console.log(e.key);
})
