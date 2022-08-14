const d = document;

export function digitalClock(clock,btnPlay,btnStop){
    let clockTempo;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){//el evento coincide con btnPlay
            
            clockTempo = setInterval(()=>{
                let clockHour=new Date().toLocaleTimeString()
                d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`; 
            },1000);
            
            e.target.disabled=true; /*Para desactivar el boton y no sobrecargar el rendimiento */
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML=null;
            d.querySelector(btnPlay).disabled=false;
        }
    })
}

export function alarm(sound,btnPlay,btnStop){
    let alarmaTempo;
    const $alarma=d.createElement("audio");
    $alarma.src=sound;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            alarmaTempo= setTimeout(()=>{
                $alarma.play();
            },2000)
            e.target.disabled=true
        };
        if (e.target.matches(btnStop)){
            clearTimeout(alarmaTempo);
            $alarma.pause();
            $alarma.currentTime=0;
            d.querySelector(btnPlay).disabled=false;
        };
    })
}