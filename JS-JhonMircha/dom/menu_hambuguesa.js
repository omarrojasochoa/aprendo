export default function hambuguerMenu (panelBtn,panel,menuLink){
    const d=document;
    d.addEventListener("click",e=>{
        if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){
            /*Si el objeto qe origina el evento coincide con panelBtn ó   */
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)){
            /*remover el panel una vez hecho un clic en cualquier seccion */
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }

    });
} 
