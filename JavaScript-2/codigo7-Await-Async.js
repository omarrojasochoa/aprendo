const objeto={
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
};

const obtenerInformacion=()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{resolve(objeto)},1000)
    })
};

/*obtenerInformacion().then((resultado)=>{
    console.log(resultado);
}) */


const mostrarResultado = async()=>{ // async function mostrarResultado
    let resultado= await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado(); 



/*OTRO EJEMPLO 
ASYNC y AWAIT sirve para que traigamos los datos como nosotros
deseamos sin que se altere el orden. Hasta que no se ejecute, 
no continua el siguiente. (ayuda para API - llamada a servidores)

*/

const obtenerInfo=(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200);
    })
}

const mostrarData = async ()=>{
    data1= await obtenerInfo ("1: omar");
    data2= await obtenerInfo ("2: dalto");
    data3= await obtenerInfo ("3: eduardo");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();