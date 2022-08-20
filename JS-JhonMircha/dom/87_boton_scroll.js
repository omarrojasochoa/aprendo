const d=document;
const w=window;

export default function scrollTopButton (btn){
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll",(e)=>{
        let scrollTop=d.documentElement.scrollTop;
        if(scrollTop>600){
            $scrollBtn.classList.add("hidden");
            
        } else {
            $scrollBtn.classList.remove("hidden");
            $scrollBtn.style.opacity=1;
            
        }
        //console.log(w.pageYOffset, d.documentElement.scrollTop)//para ver la distancia del scroll
    })
    
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top:0
            })
        }
    })


}