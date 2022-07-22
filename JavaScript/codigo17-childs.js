/*const contenedor = document.querySelector(".contenedor");


____________OBTENCION Y MODIF. DE CHILDS_____________

- firstChild; (se usa sin dejar espacios)
	const primerHijo=  contenedor.firstChild;
	console.log(primerHijo); -> <h2> Un h2 comun </h2>

- lastChild;

- firstElementChild; (se usa normal. con espacios)

- lastElementChild;

- childNodes; devuelve TODOS los nodos hijos
(No devuelve un Array)

-children; devuelve TODAS las etiquetas HTML hijos
(No devuelve un Array)



___________MET. DE CHILDS___________

- replaceChild("nuevo","viejo"): se utiliza para reemplazar un nodo hijo
		
		const h2_nuevo = document.createElement("H2");

		h2_nuevo.innerHTML = "Titulo";

		let h2_antiguo = document.querySelector (".h2");

		contenedor.replaceChild(h2_nuevo,h2_antiguo);
			

- removeChild(nombre): Se elimina un hijo de un elemnto padre
	ej: 
	contenedor.removeChild(h2_antiguo);

- hasChildNodes(); Nos indica si tiene o no un elemento.
	Bota un True o False


// SIRVEN PARA IDENTIFICAR 
__________PROP PARENTS__________ 

- parentElement; Seleccione el padre Elemento de un Elemento




__________PROP SIBLING___________(hermanos)

- .nextElementSibling; Nos selecciona al elemento siguiente

- .previousElementSibling;  Nos selecciona al elemento anterior



_______NODOS EXTRAS_________


- .closest(".x"); Me indicara el elemento ascendente mas cercano
con la clase "x"



*/

const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";
let h2_antiguo= document.querySelector (".h2");

contenedor.replaceChild(h2_nuevo,h2_antiguo);