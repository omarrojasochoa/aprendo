import hambuguerMenu from "./menu_hambuguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";

const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hambuguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("../assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
})

d.addEventListener("keydown",(e)=>{/*Cuando presiono la tecla
keyup: cuando sueltas la tecla, keypress: mientras lo tengas presionada */
    shortcuts(e);
    moveBall(e,".ball",".stage")
})
