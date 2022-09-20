document.addEventListener("DOMContentLoaded",e=>{
    const includeHTML= (el,url)=>{
        const xhr= new XMLHttpRequest();

        xhr.addEventListener("readystatechange",e=>{
            if(xhr.readyState!==4)return;
            if(xhr.status>=200 && xhr.status<300){
                el.outerHTML=xhr.responseText;//outerHTML reemplaza el div. con innerHTML se hubiese colocado por dentro del div
            } else{
                let message=xhr.statusText||"Error al cargar archivo, verifica que este haciendo la peticion por http o https";
                el.outerHTML=xhr.responseText
            }
        })
        xhr.open("GET",url)
        xhr.setRequestHeader("Content-type","text/html;charset=utf-8")
        xhr.send()

    }

    document
    .querySelectorAll("[data-include]")
    .forEach(el=>includeHTML(el,el.getAttribute("data-include")))//getAttribute("data-include") para obtener la ruta
})



