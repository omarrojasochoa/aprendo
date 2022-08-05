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

*/





