/*
-------------------SENTENCIA SWITCH------------------------ 
Es parecido a un If-else

switch(variable){       
    case "caso1":       // Esto se lee: "Si la variable=caso1"
        console.log("La fruta es amarilla")    
        break;

    case "caso2":       // Esto se lee: "Si la variable=caso2"
        console.log("La fruta es roja")    
        break;
    
    case "caso3":       // Esto se lee: "Si la variable=caso3"
        console.log("La fruta es verde")    
        break;
}

----------------------TRY & CATCH-----------------------
El Try debe estar acompañado del Catch obligatoriamente 



*/

try {
    var a = Number(prompt("Introduce un numero"))
    var b = Number(prompt("Introduce otro numero"))
    
    if (isNaN(a) || isNaN(b)){
        throw ("Haz colocado un numero invalido")
    }

    let resultado= a+b;
    alert(resultado);

} catch (error) {
    console.error("Error: "+error);
}

finally{
    console.log("me muestro igual");
}