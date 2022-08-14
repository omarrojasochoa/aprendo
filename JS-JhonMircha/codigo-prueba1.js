/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

1)
let cadena="hola mundo"
const conteoCaracteres=(palabra)=>{
    let resultado=0;
    for (let i = 0; i < palabra.length; i++) {
        resultado++;
    }
    console.log(resultado)
}
conteoCaracteres(cadena);

2)
let a = "hola mundo";
const cortar=(x,y)=>{
    let resultado=x.slice(y);
    console.log(resultado);
}
cortar(a,4)

3)
let a="hola que tal";
const cortar=(x)=>{
    let resultado=x.split(" ");
    console.log(resultado)
}
cortar(a);

4)
let a = "hola mundo "
const repetir = (x,y)=>{
    let resultado;
    resultado=x.repeat(y)
    console.log(resultado);
}

repetir(a,3)

5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

5)
let a= "hola mundo ";
const invertir= (cadena="")=>{
    (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :console.info(cadena.split("").reverse().join(""))
}
invertir(a);

6)
let a="hola mundo adios mundo"
const contar = (x,y) =>{
    let cont=0;
    let resultado=x.split(" ")
    for (let i = 0; i < resultado.length; i++) {
        if(resultado[i]==y){
            cont=cont+1;
        };  
    }
    console.log(cont);
}
contar(a,"mundo")

7)
let a = "salas";

const invertir= (cadena="")=>{
    return new Promise((resolve,reject)=>{
        let resultado;
        if(!cadena){
            reject("No se encontro cadena")
        } else{
            resolve(resultado=cadena.split("").reverse().join(""))
        }
        return resultado
    })
}

const validarPalindromo=async(a)=>{
    a=a.toLowerCase();
    let b= await invertir(a)
    if(b==a){
        console.log(b)
        console.log("Si es una palabra Palindromo")
    }else{
        console.log(b)
        console.log("NO es una palabra Palindromo")
    }
}

validarPalindromo(a);

8)
let a ="xyz1, xyz2, xyz3, xyz4 y xyz5"
const quitarCaracteres =(a,b)=>{
    a=a.split(b).join("")
    console.log(a)
}
quitarCaracteres(a,"xyz");


9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

9)
const aleatorio = ()=>{
    let a = Math.round(Math.random()*100)+500
    console.log(a)
}
aleatorio()

10)
let numero=12021;
const validarCapicua = (num)=>{
    num=num.toString()
    let capicua=num.split("").reverse().join("");
    console.log(capicua);
    if (num==capicua){
        console.log("Es capicua")
    } else{
        console.log("no es capicua")
    }
}
validarCapicua(numero);

11)
const factorial=(numero=undefined)=>{
    if(numero===undefined) return console.warn("No ingresaste un numero")
    if(typeof numero!=="number") return console.error(`El valor ${numero} ingresado, NO es un numero`)
    if(numero===0) return console.error("El numero no puede ser 0")
    if(Math.sign(numero)===-1)return console.error("El numero no puede ser negativo")
    let factorial=1
    for (let i = numero; i >1; i--) {
        factorial=factorial*i;
    }
    return console.log( `El factorial es ${factorial}`)
}

factorial(a)

12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

12)
const validarPrimo=(numero=undefined)=>{
    if(numero===undefined) return console.warn("No ingresaste un numero");
    if(typeof numero!=="number") return console.error(`El valor ${numero} ingresado, NO es un numero`);
    if(numero===0) return console.error("El numero no puede ser 0");
    if(numero===1) return console.error("El numero no puede ser 1");
    if(Math.sign(numero)===-1)return console.error("El numero no puede ser negativo");
    let divisible=false;
    for (let i=2;i<numero;i++){
        if((numero%i)===0){
            divisible=true;
            break
        }
    }
    if(divisible){
        console.log(`El ${numero} NO es primo`)
    } else{
        console.log(`El ${numero} SI es primo`)
    }
}
validarPrimo(119)

13)
const validarNumero = (numero)=>{
    if(numero===undefined) return console.warn("No ingresaste un numero");
    if(typeof numero!=="number") return console.error(`El valor ${numero} ingresado, NO es un numero`);
    if(numero===0) return console.error("El numero no puede ser 0");
    if(Math.sign(numero)===-1)return console.error("El numero no puede ser negativo");
    if((numero%2)===0){
        return console.log(`El numero ${numero} es PAR`);      
    } else {
        return console.log(`El numero ${numero} es IMPAR`)
    }
}
validarNumero(30)

14)

const convertirGrados=(grados=undefined,unidad=undefined)=>{
    if(unidad==="C"){
        return console.log(`${grados}C° = ${Math.round((grados*(9/5))+32)}°F`)
    } else if(unidad==="F"){
        return console.log(`${grados}F° = ${Math.round(((grados-32)*(5/9)))}°C`)
    } else{
        return console.log("El tipo de dato no es valido")
    }
}

convertirGrados(0,"C")


15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23))
devolverá 35 años (en 2020).


15)
const convertirBinario=(numero,base)=>{
    if(numero===undefined) return console.warn("No ingresaste un numero");
    if(typeof numero!=="number") return console.error(`El valor ${numero} ingresado, NO es un numero`);
    if(base===undefined)return console.warn("No ingresaste la base a convertir")
    if(typeof base!=="number") return console.error(`El valor ${base} ingresado, NO es un numero`);
    if(Math.sign(numero)===-1)return console.error("El numero no puede ser negativo");
    if(base===2){
        return console.log(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
    }
}
convertirBinario(100,2);

16)
const descuento=(precio,dsct)=>{
    precio=precio*(1-(dsct/100))
    return console.log(precio)
}
descuento(1000,20)


17)
const cantidadAños=(fecha)=>{
    if(fecha===undefined)return console.warn("No ingresaste la Fecha");
    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es valido");
    let hoyMenosFecha= new Date().getTime()-fecha.getTime();
    let aniosEnMS=1000*60*60*24*365
    let aniosHumanos=Math.floor(hoyMenosFecha/aniosEnMS);
    return(Math.sign(aniosHumanos)===-1)
    ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    :(Math.sign(aniosHumanos)===1)
        ?console.info(`Han pasado ${aniosHumanos}años, desde ${fecha.getFullYear()}`)
        :console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
    }

    cantidadAños({})


18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

18)
const contarLetras =(cadena=undefined)=>{
    if(!cadena)return console.warn("No ingresaste una Cadena de Texto");
    if(typeof cadena!=="string")return console.warn(`El valor ${cadena} ingresado, NO es una cadena`)
    let vocales=0;
    let consonantes=0;
    for (let letra of cadena) {
        if(/[aeiouAEIOU]/.test(letra)){
            vocales++;
        }
        if(/[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/.test(letra)){
            consonantes++;
        }
    }
    return console.info({
            cadena:cadena,
            vocales:vocales,
            consonantes:consonantes
        }
    )
}
contarLetras("Hola Como estas")

-----------------------DOM

19) 
VALIDAR NOMBRE
const validarNombre=(nombre)=>{
    if(!nombre)return console.warn("No ingresaste un Nombre");
    if(typeof nombre!=="string")return console.warn(`El valor ${nombre} ingresado, NO es una cadena de texto`)
    let expReg= /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre)                           // VALIDA NOMBRES LETRAS Y ESPACIOS
    return(expReg)
    ? console.info(`${nombre}, es un Nombre Valido`)
    : console.warn(`${nombre}, NO es un nombre Valido`)
}

validarNombre("Omar")

20) VALIDACION EMAIL
const validarEmail=(email)=>{
    if(!email)return console.warn("No ingresaste un email");
    if(typeof email!=="string")return console.warn(`El valor ${email} ingresado, NO es una cadena de texto`)
    let expReg= /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)             //VALIDACION EMAIL
    return(expReg)
    ? console.info(`${email}, es un Email Valido`)
    : console.warn(`${email}, NO es un Email Valido`)
}

validarEmail("omar@hola.com")

------------------------------------ARREGLOS

21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
 pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


21)
let a =[1,4,5]
const potencia = (arr)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length===0)return console.errir("El arrelgo esta vacio")
    let resultado=[];
    arr.forEach(element => {resultado.push(element*element)});
    console.log(resultado);
}
potencia(arr);


22)
let a = [1,4,5,99,-60];
const maxMin = (arr)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length===0)return console.errir("El arrelgo esta vacio")
    for (let num of arr){
        if(typeof num!=="number")return console.error(`El valor ${num} ingresado, NO es un numero`)
    }
    return console.info(`Arreglo Original: ${arr}\n Valor Mayor: ${Math.max(...arr)}\n Valor Minimo: ${Math.min(...arr)}`)
}
maxMin(a);


23)
let a = [1,2,3,4,5,6,7,8,9,0];
const arrayParImpar=(arr)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length===0)return console.errir("El arrelgo esta vacio")
    for (let num of arr){
        if(typeof num!=="number")return console.error(`El valor ${num} ingresado, NO es un numero`)
    }

    return console.log({
        pares: arr.filter(num=>num%2===0),
        impares: arr.filter(num=>num%2===1)
    })
}
arrayParImpar(a)


24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados
 en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true].

26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.


24) let array=[7, 5,7,8,6];
const arrayAscDesc=(arr)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length===0)return console.errir("El arrelgo esta vacio")
    for (let num of arr){
        if(typeof num!=="number")return console.error(`El valor ${num} ingresado, NO es un numero`)
    }
    return console.info({
        arr,
        asc: arr.map(el=>el).sort(),
        desc: arr.map(el=>el).sort().reverse()
    })
}
arrayAscDesc(array);


25)
let array=["x", 10, "x", 2, "10", 10, true, true];
const quitarDuplicados = (arr)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length===0)return console.errir("El arreglo esta vacio")
    if(arr.length===1)return console.errir("El arreglo debe tener al menos 2 elementos")
    return console.info({
        origina:arr,
        sinDuplicados: arr.filter((value,index,self)=>self.indexOf(value)===index)//magia
    })
}
quitarDuplicados(array);

26)
let array = [9,8,7,6,5,4,3,2,1,0];
const sumaElementos = (arr)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arr.length===0)return console.errir("El arreglo esta vacio")
    if(arr.length===1)return console.errir("El arreglo debe tener al menos 2 elementos")
    let element=0;
    let n=arr.length;
    for (let i = 0; i < arr.length; i++) {
        element = element+arr[i];
    }
    element=element/n
    return console.log(element)
}

sumaElementos(array)


27) Programa una clase llamada Pelicula. //VALIDAR***

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país 
o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los            //STRING
                    7 restantes números.
    - Valida que el título no rebase los 100 caracteres.              //STRING
    - Valida que el director no rebase los 50 caracteres.             //STRING
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
        aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
        decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
                - Apartir de un arreglo con la información de 3 películas genera 3 
                    instancias de la clase de forma automatizada e imprime la ficha técnica 
                    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama,
Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short,
Sport, Talk-Show, Thriller, War, Western. */


class Pelicula{
    constructor({id,titulo,director,añoEstreno,pais,genero,calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.añoEstreno=añoEstreno;
        this.pais=pais;
        this.genero=genero;
        this.calificacion=calificacion;
        

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(añoEstreno);    
        this.validarPais(pais);
        this.validarGeneros(genero);
        this.validarCalificacion(calificacion)
    }

    static get listaGeneros(){
        return ["Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family",
        "Fantasy","Film Noir","Game-Show","History","Horror","Musical","Music","Mystery","News","Reality-TV",
        "Romance","Sci-Fi","Shor","Sport","Talk-Show","Thriller","War","Western"]
    };

    static generosAceptados(){
        return console.info(`Los Generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
    }


    validarCadena(propiedad,valor){ // se usara para validar los datos que son cadena
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor!=="string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
        return true;
    }
    
    validarLongitudCadena(propiedad,valor,longitud){ // se usara para validar los datos que son cadena
        if(valor.length>longitud)return console.error(`${propiedad}"${valor}" excede el numero de caracteres permitidos (${longitud})`)
        return true;
    }

    validarNumero (propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
        if(typeof valor!=="number") return console.error(`${propiedad} "${valor}" ingresado, NO es un numero`);
        return true;
    }

    validarArreglo(propiedad,valor){
        if(!valor) {return console.warn(`${propiedad} "${valor}" esta vacío`)};
        if(!(valor instanceof Array)) {return console.error(`${propiedad} "${valor}" ingresado NO es un arreglo`)};
        if(valor.length===0){return console.error("El arreglo NO tiene datos")};
        for (let cadena of valor){
            if(typeof cadena!=="string") return console.error(`El valor ${cadena} ingresado, NO es una Cadena de Texto`)
        };
        return true;
    }


    validarIMDB(id){
        if (this.validarCadena("IMDB id",id))
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                return console.error(`IMDB id "${id}" NO es valido, debe tener 9 caracteres, los 2 primeros
                letras minusculas, los 7 restantes numeros`);
    }
    validarTitulo(titulo){
        if (this.validarCadena("Titulo",titulo)){
            this.validarLongitudCadena("Titulo",titulo,100);
        }
    }
    validarDirector(director){
        if (this.validarCadena("Director",director)){
            this.validarLongitudCadena("Director",director,50);
        }
    }
    validarEstreno(añoEstreno){
        if (this.validarNumero("Año de Estreno",añoEstreno))
        if(!(/^([0-9]{4})$/.test(añoEstreno)))
            return console.error(`Año de Estreno"${añoEstreno}" NO es valido, debe ser un numero de 4 digitos`);
    }

    validarPais(pais){
        this.validarArreglo("Pais",pais)
    }
    validarGeneros(genero){
        if(this.validarArreglo("Genero",genero)){
            for (let gen of genero) {
                if(!Pelicula.listaGeneros.includes(gen)){
                    console.error(`Genero(s) Incorrecto "${genero.join(", ")}"`)
                    Pelicula.generosAceptados()
                }
            }
        }
    }

    validarCalificacion(calificacion){
        if (this.validarNumero("Calificacion",calificacion))
        return (calificacion<0 || calificacion>10)
        ? console.error(`La Calificacion tiene que estar en un rango de 0 - 10`)
        : this.calificacion = calificacion.toFixed(1); //acorta al numero de decimales que deseas
    }
    
    fichaTecnica(){
        console.info(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.añoEstreno}"\nPais: "${this.pais.join("-")}"\nGeneros: ${this.genero.join(",")}\nCalificacion: "${this.calificacion}"\nIMDB Id: "${this.id}"`)
    }

}

    

//Pelicula.generosAceptados();
const peli = new Pelicula({
    id:"tt1234567",
    titulo:"Titulo de la peli",
    director:"Tarantino",
    añoEstreno: 2022,
    pais:["Peru"],
    genero:["Comedy","Sport"],
    calificacion:7.85
});

peli.fichaTecnica()
console.log(peli)