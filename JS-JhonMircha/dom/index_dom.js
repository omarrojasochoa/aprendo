import hambuguerMenu from "./menu_hambuguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./86_cuenta_regresiva.js";
import scrollTopButton from "./87_boton_scroll.js";
import darktheme from "./88_temaDark_Light.js";
import responsiveMedia from "./90_objeto_responsive.js";
import responsiveTester from "./91_prueba_responsive.js";
import userDeviceInfo from "./92_deteccionDispositivos.js";
import networkStatus from "./93_conexion_internet.js";
import webCam from "./94_deteccionWebCam.js";
import getGeolocation from "./95_geolocalizacion.js";
import searchFilters from "./96_filtroBusqueda.js";
import sorteo from "./97_sorteo.js";
import slider from "./98_slider.js";
import scrollSpy from "./99_scrollSpy.js";
import smartVideo from "./100_videoInteligente.js";
import contactFormValidations from "./102_validaciones_form.js";
import speechReader from "./104_narrador.js";

const d=document;
d.addEventListener("DOMContentLoaded",e=>{ //Carga del documento
    hambuguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("../assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown(
        "#countdown",
        "Nov 30, 2023 07:30:15",
        "Feliz Cumpleaños Mr. Programador 🤓 ");
        scrollTopButton(".scroll-top-button");
        responsiveMedia(
            "youtube",
            "(min-width:900px)",
            `<a href="https://www.youtube.com/embed/MXbN474T6bE?list=RDMXbN474T6bE" target="_blank" rel="noopener">Ver Video</a>`,
            `<iframe width="750" height="400" src="https://www.youtube.com/embed/MXbN474T6bE?list=RDMXbN474T6bE",
            title="Ella Ya Me Olvido- Manuel Medrano" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture" allowfullscreen></iframe>`
            );
        responsiveMedia(
            "gmaps",
            "(min-width:900px)",
            `<a href="https://goo.gl/maps/9w1PDyTsmmFjEqiu9" target="_blank" rel="noopener">Ver Mapa</a>`,
            `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.353342866512!2d-77.06290118255615!3d-11.950020099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1d5b57aecaf%3A0xbc36c6e40b5d56!2sBusano%20110%2C%20Comas%2015314!5e0!3m2!1ses-419!2spe!4v1660615855641!5m2!1ses-419!2spe" 
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
        responsiveTester("#responsive-tester");
        userDeviceInfo("#user-device");
        webCam("#webcam");
        getGeolocation("#geolocation");
        searchFilters(".card-filter",".card");
        sorteo("#winner-btn",".player");
        slider();
        scrollSpy();
        smartVideo();
        contactFormValidations();
        
})

d.addEventListener("keydown",(e)=>{/*Cuando presiono la tecla
keyup: cuando sueltas la tecla, keypress: mientras lo tengas presionada */
    shortcuts(e);
    moveBall(e,".ball",".stage")
})


darktheme(".dark-theme-btn","dark-mode");// no se puede hacer doble DOMContentLoaded por eso se saca esta fx
networkStatus();
speechReader();