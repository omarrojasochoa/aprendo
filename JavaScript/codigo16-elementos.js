/*const contenedor = document.querySelector(".contenedor");
let resultado= contenedor.textContent;*/

/*
_________OBTENCION Y MODIFICACION DE ELEM.________

(*) textContent; devuelve el texto de cualquier nodo.

- innerText; devuelve el TEXTO visible de un nodo.

- innerHTML; Es el CONTENIDO HTML dentro de un nodo.
	EJ: alert("resultado")

- outerHTML; CODIGO HTML de un nodo.
	EJ: alert("resultado")

(*) IMPORTANTE



__________CREACION DE ELEMENTOS.___________
appendChild() 

createElement("x"): crea el elemento x

createTextNode("algo x"): crea un texto "algo x" dentro del elemento

createDocumentFragment(); Se usa en caso se quiera agrega varios elementos.

*/
const contenedor = document.querySelector(".contenedor");

const item = document.createElement ("LI")//MAYUSCULA.

const textItem= document.createTextNode("Este es un item de la lista ") 

//item.innerHTML=textItem; //manera no correcta.

item.appendChild(textItem);
//se agrego el textItem a la etiqueta Li

contenedor.appendChild(item); 
//se agrego la etiqueta Li al Div

console.log(item);



