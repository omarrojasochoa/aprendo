
const array = ['a','b','c']
array.splice(1,0,'d');
document.write (array);

/*
__________TRANSFORMADORES___________

const array = ['a','b','c']


- pop(): Elimina el ULTIMO elemento de un array y lo devuelve. Modifica al array 
array.pop();   -> c
document.write(array);   -> a,b


- push(): Añade al final de un array. Modifica el array
array.push('d');    
document.write(array);   -> a,b,c,d


- shift(): Elimina el PRIMER elemento de un array y lo devuelve. Modifica el array
array.shift();    -> a
document.write(array);    -> b,c


- unshift(): Añade al inicio de un array. Modifica el array.
array.shift('d');
document.write(array);   -> d,a,b,c


- reverse(): Invierte los elementos de un array.
array.reverse();
document.write(array);   -> c,b,a

- sort(): Ordena los elementos de un array

- splice(1,2,"d"): Empezara en la posicion 1, eliminara 2 elementos y colocara el elemnto 'd'
array.splice(1,0,'d');
document.write(array);   -> a,d,b,c      .OBS: Si deseo colocarlo al final se pone (-1,0,'x')


__________ACCESORES___________

- slice(0,2): Actua como el substring. Nos devolvera un array desde la posicion 0 hasta la posicion 2
sin contar el ultimo
let resultado = array.slice(0,2);
document.write(resultado); ->  a,b

- join("-"): Une los elementos y se vuelve una cadena, podemos separarlo de distintas
maneras, en este caso "-".
let resultado = array.join("-");
document.write(resultado);  -> a-b-c



__________REPETICION___________

- filter(): Crea un nuevo array con los elementos q cumplan la funcion
let resultado = array.filter(numero => numero.length >4)
document.write(resultado);


- forEach(): Ejecuta la funcion para cada elemento. Se parace mucho a "filter()"
let resultado = array.forEach((numero) =>{ 
	document.write(numero+ "<br>")
})
*/