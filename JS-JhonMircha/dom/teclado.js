const d= document;
let x=0,y=0;
export function moveBall(e,ball,stage){
const $ball = document.querySelector(ball);
const $stage=document.querySelector(stage);    
const limitsBall=$ball.getBoundingClientRect(); //Nos da un objeto de altura anchura, se usara para
const limitsStage=$stage.getBoundingClientRect();  //limitar el movimiento de la bola // y escenario

//console.log(e.keyCode)
//console.log(e.key)
//console.log(limitsBall,limitsStage);

switch (e.keyCode) {
    case 37://izq
        e.preventDefault();
        if(limitsBall.left>limitsStage.left){x--};       
        // move("left")
        break;
    case 38://arriba
        if(limitsBall.top>limitsStage.top){
            e.preventDefault();
            y--};
        // move("up")
        break;
    case 39://derecha
        e.preventDefault();
        if(limitsBall.right<limitsStage.right){x++};
       // move("right")
        break;
    case 40://abajo
        if(limitsBall.bottom<limitsStage.bottom){
            e.preventDefault();
            y++};
        // move("down")
        break;
    default:
        break;
};

$ball.style.transform=`translate(${x*10}px,${y*10}px)`;

}

export function shortcuts (e){
   /* console.log(e.type)
    console.log(e.key)
    console.log(e.keyCode)
    console.log(`Ctrl:${e.ctrlKey}`)
    console.log(`Alt:${e.altKey}`)
    console.log(`Shift:${e.shiKey}`)
    console.log(e)*/

    if(e.key==="a"&&e.altKey){
        alert("Haz lanzado una alerta en el teclado");
    }
    
    if(e.key==="p"&&e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
    
    if(e.key==="c"&&e.altKey){
        confirm("Haz lanzado aviso con el teclado")
    }
}
