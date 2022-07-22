/* 

INTRODUCCION WINDOW:
- window.open("x.com"): Puede crear una nueva pestaña con una direccion URL
    ej: let youtubeUrl="https://youtube.com"
        window.open(yotubeUrl);

- window.close("x.com"): Ciera la ventana Actual
    let youtubeUrl="https://youtube.com"
    let ventana = window.open(yotubeUrl);
    ventana.close();

- window.closed("x.com"): Te arroja True o False, pregunta si cerro
- window.stop("x.com"): Detiene la carga de los recursos
- print(): Abre el cuadro para imprimir la pagina actual

- alert("hola"): Abre una ventana emergente con el mensaje hola.
- prompt("hola"): Abre una ventana emergente con el mensaje hola y solicita un dato al usuario(string)
- confirm(): Abre una ventana emergente con un mensaje y 2 botones: Aceptar y Cancelar

- window.screen:  devuelve una referencia al objeto de Pantalla asociado a la ventana
- window.screenLeft: devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.
- window.screenTop: devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla.     

- window.scrollX: Nos indica el numero de pixeles que nos desplazamos en el eje X
- window.scrollY: Nos indica el numero de pixeles que nos desplazamos en el eje Y
- window.scroll: En consola window.scroll(0,100)


LOCATION: // MUY UTIL PARA NODEJS
- window.location.href : indica el href (URL) de la pagina actual
- window.location.protocol: Indica  el protocolo web utilizado (http: o https:)
- window.location.hostname: Indica el dominio del servidor web
- window.location.pathname: Indica la ruta y el nombre del archivo de la pagina actual
- window.location.assign(): Carga un nuevo documento.  

*/
const screen= window.screen;
console.log(screen);
document.write(screen);
