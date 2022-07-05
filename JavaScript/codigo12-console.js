/*
__________FUNCIONES DE REGISTRO____________


console.clear();		-> Limpia la consola

console.error("che, que hiciste?");		-> Muestra un mensaje de error 

console.info("muy buen trabajo");		-> Emite un mensaje informativo

console.log()		 -> Mensaje de depuracion

console.table([a,b,c]) 		-> Te muestra una tabla del indice y el valor. Ej: 0----a/1----b/2----c

console.warn("che loco, ten cuidado") -> Imprime una advertencia en la consola

console.dir([a,b,c])    -> Despliega una lista interactiva de las propiedades del objeto



__________FUNCIONES DE CONTEO____________

console.count ()			-> lleva el registro de cuantas veces ejecute una funcion.
	ej: function suma(a,b){
		document.write(a+b);
		console.count()
	}
	suma (4,2);
	suma (4,2);
	suma (4,2);			-> En la consola: default = 3

console.countReset ()		-> Resetea el contador console.count()

__________FUNCIONES DE AGRUPACION____________

console.group("nombre") 	-> Sirve para crear grupos en la consola

console.groupEnd()			-> Sirve para cerrar el grupo 

console.groupCollapsed("nombre") 	-> Crea un grupo cerrado y pasa a la siguiente linea.


__________FUNCIONES DE TIEMPO____________

console.time() 		-> Empieza contador

console.timeLog()	-> Indica cuanto tiempo va el contador

console.timeEnd()	-> Finaliza el contador.





console.clear(): limpiar consla
console.error(""): avisar de un error de la manera que quiera
console.info(""): mensaje informativo
console.log (""): mensaje depurativo
console.table([,]): muestra una tabla de indice y valor
console.warn(""): muestra un mensaje de advertencia.
console.dir(): despliega una lista de las propiedades
*/


console.log("%cOMAR","color:red;background:black")