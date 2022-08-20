const d=document;
const n= navigator;
const ua=n.userAgent// se usa para saber desde donde se esta entrando al navegador
export default function userDeviceInfo(id){
    const $id=d.querySelector(id);
    const isMobile={
        android:()=>ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),//i es de expresion regular, que no se hace problemas con mayusculas o minusculas
        any:function(){
            return this.android()||this.ios()||this.windows()
        }
    };
    const isDesktop={
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac/i),
        windows:()=>ua.match(/windows/i),
        any:function(){
            return this.linux()||this.mac()||this.windows()
        }
    };
    const isBrowser={
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any:function(){
            return(this.chrome()||this.safari()||this.firefox()||this.opera()||this.ie()||this.edge())
        }
    }; 
    
    $id.innerHTML=`
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${
                isMobile.any()?isMobile.any():isDesktop.any() //? si es true, : si no es true
            }</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>    
    
    `;

    /*------CONTENIDO EXCLUSIVO-----*/
    if(isBrowser.chrome()){
        $id.innerHTML+=`<p><mark>Este contenido solo se ve en Chrome</mark></p>`
    }
    if(isBrowser.firefox()){
        $id.innerHTML+=`<p><mark>Este contenido solo se ve en Firefox</mark></p>`
    }
    if(isDesktop.linux()){
        $id.innerHTML+=`<p><mark>Descarga nuestro software para Linux</mark></p>`
    }
    if(isDesktop.mac()){
        $id.innerHTML+=`<p><mark>Descarga nuestro software para Mac OS</mark></p>`
    }
    if(isDesktop.windows()){
        $id.innerHTML+=`<p><mark>Descarga nuestro software para Windows</mark></p>`
    }

    //console.log(ua)
    /*-------REDIRECCIONES-----*/

    if(isMobile.android()){
        window.location.href="https://www.youtube.com"
    };
}