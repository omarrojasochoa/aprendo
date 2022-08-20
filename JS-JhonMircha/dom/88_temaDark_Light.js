
const d= document;
const ls=localStorage;
export default function darktheme (btn,classDark){
    const $themeBtn=d.querySelector(btn);
    const $selectors= d.querySelectorAll("[data-dark]"); // se aplico un atributo data-dark para variar los elementos que queremos

   // console.log($selectors);
    let moon="🌙";
    let sun="☀️";
    
    const lightMode=()=>{
        $themeBtn.innerHTML=moon;
        $selectors.forEach(el=>el.classList.remove(classDark));
        ls.setItem("theme","light");
};

    const darkMode=()=>{
        $themeBtn.innerHTML=sun;
        $selectors.forEach(el=>el.classList.add(classDark));
        ls.setItem("theme","dark");
};

    $themeBtn.addEventListener("click",()=>{
        if($themeBtn.textContent===moon){
            darkMode();
            //$themeBtn.innerHTML=sun;
            //$selectors.forEach(el=>el.classList.add(classDark))
        } else if ($themeBtn.textContent===sun){
            lightMode();
            //$themeBtn.innerHTML=moon;
            //$selectors.forEach(el=>el.classList.remove(classDark))
        }
    })


/*-------------------- API LOCAL STORAGE------------------*/
    d.addEventListener("DOMContentLoaded",(e)=>{
        if(ls.getItem("theme")===null){
            ls.setItem("theme","light");
        }
        
        if(ls.getItem("theme")==="light"){
            lightMode();
        }
        if (ls.getItem("theme")==="dark"){
            darkMode()
        }
    });

}


