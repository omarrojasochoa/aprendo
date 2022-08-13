/* clase 11: Arreglos - Arrays
Otra forma de hacer un array

const c = Array.of("x","y","z",9,8,7);
console.log (c);

const d = Array(100).fill(false) // agrego al array d, 100 elementos con valor false

____________________________________________
Clase 12: Objetos 
jon={
    nombre:"jon"
    apellido:"mircha"
}

    console.log(Object.keys(jon)) => te nombra las propiedades
    => nombre, apellido

    console.log(Object.value(jon)) => te nombra los valores de las propiedade

___________________________________________
clase 13: Tipos de Operadores

    = : Asignacion de variable
    == : Comparacion de valores
    === : comparacion de tipo de dato y valor

______________________________________________
clase 16: Destructuracion
- Importante: Para que se pueda dar la destructuracion, la variable debe llevar
el mismo nombre que la propiedad del objeto. 

let persona={
    nombre:"omar",
    apellido:"rojas",
    edad: 26
}
let {nombre,apellido,edad}=persona;
console.log(nombre,apellido,edad)=> omar,rojas,26

_______________________________________________
Clase 22: Clases - POO

function Animal(nombre,genero){
    this.nombre=nombre;
    this.genero= genero
}

//Metodos agregados a la clase o Prototipo de la fx constructora
Animal.prototype.sonar=(){
    console.log(`Hago sonidos pq toy vivo`)
}
___________________________________________________
Clase 27: Objeto DATE
console.log(Date());
let fecha= new Date
console.log(fecha)

//DIA DEL MES 1-31
fecha.getDate() 

//DIA DE LA SEMANA D-L-M-M-J-V-S -> 0-1-2-3-4-5-6
fecha.getDay()

//mes Ene-Feb...Dic -> 0-1-...11
fecha.getMonth()

//año actual
fecha.getFullYear() 

//horas
fecha.getHours()

//minutos
fecha.getMinutes()

//segundos
fecha.getSeconds()
___________________________________________________
Clase 33: MODULOS (IMPORT/EXPORT)
-Para poder hacer un import, en la etiqueta html se debe colocar en el script
un atributo (type="module") y para navegadores viejos el atributo (nomodule)

<script src="prueba.js" type="module"></scrip>
<script src="prueba.js" nomodule></scrip>  //navegador antiguo


Se puede importar una funcion de un script si esque se coloca en
1er archivo Js: 
export const PI=Math.PI;
2do archivo modulos:
import {PI(nombre de la funcion que exporte)} from "./constantes.js"(misma carpeta)
Pi();
_________________________________________________

ORDENAMIENTO DE CODIGO 

1. IMPORTACION DE MODULOS
2. DECLARACION DE VARIABLES
3. DECLARACION DE FUNCIONES
4. EJECUCION DE CODIGO

*/