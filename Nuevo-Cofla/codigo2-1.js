

let free = false;
const validarCliente = (hora) =>{
    let edad= prompt("Decime, cual es tu edad?")
    if (edad>=18) {
        if (hora>=2 && hora<7 && free==false ) {
            alert ("Pasá gratis hdp")
            free=true;    
        }
        else{
            alert("Pasa, pero paga la entrada")
        }
    }
    else{
        alert ("No podes pasar adentro hdp, anda tomate tu lechita")
    }
}
validarCliente(24);
validarCliente(23);
validarCliente(1);
validarCliente(3);
validarCliente(4);