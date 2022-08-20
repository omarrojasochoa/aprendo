const d= document;
export default function sorteo (btn,selector){
    const getWinner=(selector)=>{
        const $players=d.querySelectorAll(selector);
        const random=Math.floor(Math.random()*$players.length);
        const winner=$players[random];

        //console.log($players,random,winner)

        return(`El Ganador es: ${winner.textContent}`)
    }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let resultado=getWinner(selector);
            alert(resultado);
            console.log(resultado);
        }
    })
}

