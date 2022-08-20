const d=document;
const w=window;
const n=navigator;

export default function networkStatus(){

    const isOnline=()=>{
        let $div=d.createElement("DIV")
        if(n.onLine){
            $div.textContent="Conexión Estable";
            $div.classList.add("online")
            $div.classList.remove("offline")
        } else{
            $div.textContent="Conexion Perdida";
            $div.classList.remove("online");
            $div.classList.add("offline");
        }

        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(()=>d.body.removeChild($div),2000);
    }

    w.addEventListener("online",(e)=>isOnline());//true, si tengo internet
    w.addEventListener("offline",(e)=>isOnline());//false, si NO tengo internet
}   