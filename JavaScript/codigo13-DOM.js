/*

	NODO: Es cualquier etiqueta del Dom

______METODOS DE SELECCION DE ELEMENTOS._______


- document.getElementById ("x"): Selecciona el elemento por ID

- document.getElementsByTagName("p o h1 o div"): Selecciona una lista de elementos de una etiqueta

- document.querySelector(".x o #x"): Selecciona una clase o un id

- document.querySelectorAll()





______METODOS para DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS._______
* 1RO SE SELECCIONA EL ELEMENTO * 


- document.setAttribute("type","range"): MODIFICA el valor de un atributo. 1ro se selecciona el Elemento

- document.getAttribute("type"): OBTIENE el valor de un Atributo. 1ro se selecciona el Elemento

- document.removeAttribute("type"): ELIMINA el valor de un atributo. 1ro se selecciona el Elemento



*/

let saludo = document.querySelector(".capo");
saludo.setAttribute("type","email");
