const d=document;
const $palabraDiv=d.querySelector("#palabraDiv")
const $empezarBtn=d.querySelector("#empezarBtn")
const $letrasUsadasElement=d.querySelector("#letrasUsadas")
const $alumno=d.querySelector(".alumno")

const words = ['Diego','Martillo', 'Lavadora','Sucio','Cangrejo','Lento','Alimentos','Delgado','Cubo','Comida','Caracol','Abajo','Alumno','Bonito','Cesta','Sol','Beber','Botella','Hamburguesa','Invierno'];


let canvas = document.getElementById('canvas'); 
let ctx = canvas.getContext('2d'); // se pone 2 dimensiones el canva
ctx.canvas.width  = 0;
ctx.canvas.height = 0;

const bodyParts = [
    [4,2,1,1], //cabeza
    [4,3,1,2], //cuerpo
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

let palabraSelec, letrasUsadas, errores, aciertos; 

const agregarLetra = letra=> {
    const letraElement = document.createElement('span');
    letraElement.innerHTML = letra.toUpperCase();
    $letrasUsadasElement.appendChild(letraElement);
} 

const addBodyPart = bodyPart => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodyPart);
};

const terminarJuego = ()=>{
    d.removeEventListener('keydown',letraEvent);
    $empezarBtn.style.display='block';
    $alumno.style.display='block';
}

const letraIncorrecta = ()=>{
    addBodyPart(bodyParts[errores]);
    errores++;
    if(errores === bodyParts.length) terminarJuego();
};

const letraCorrecta = letra => {
    const { children } =  $palabraDiv;
    for(let i = 0; i < children.length; i++) {
        if(children[i].innerHTML === letra) {
            children[i].classList.toggle('hidden');
            aciertos++;}
    }
    if(aciertos === palabraSelec.length) terminarJuego();
}

const letraIngresada = letra => {
    if(palabraSelec.includes(letra)) {
        letraCorrecta(letra);
    } else {
        letraIncorrecta();
    }
    agregarLetra(letra);
    letrasUsadas.push(letra);
};

const letraEvent = e => {
    let nuevaLetra = e.key.toUpperCase();
    if(nuevaLetra.match(/^[a-zñ]$/i) && !letrasUsadas.includes(nuevaLetra)) {
        letraIngresada(nuevaLetra);
    };
};

const drawWord=()=>{
    palabraSelec.forEach(letra => {
        const letraElement = document.createElement('span');
        letraElement.innerHTML = letra.toUpperCase();
        letraElement.classList.add('letra');
        letraElement.classList.add('hidden');
        $palabraDiv.appendChild(letraElement);
    });
}

const palabraSeleccionada=()=>{
    let palabra= words[Math.floor((Math.random() * words.length))].toUpperCase();
    /*la variable palabra guardará un valor entre 0 y el largo del Array*/
    
    palabraSelec = palabra.split(''); //Palabra seleccionada en caracteres
}

const dibujarAhorcado =()=>{
    ctx.canvas.width  = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#03bb85';
    /*se dibuja el palo de ahorque */
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
}

const empezarJuego=()=>{// boton se usara para resetear el juego
    letrasUsadas=[];
    errores=0;
    aciertos=0;
    $palabraDiv.innerHTML='';
    $letrasUsadasElement.innerHTML='';
    $empezarBtn.style.display='none';
    $alumno.style.display='none';
    dibujarAhorcado();
    palabraSeleccionada();
    drawWord();
    document.addEventListener('keydown', letraEvent);
};

$empezarBtn.addEventListener('click', empezarJuego)

