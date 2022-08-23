
/* ----------- AJAX ----------*/
(()=>{
    const xhr= new XMLHttpRequest()
    $xhr=document.getElementById("xhr")
    $fragment=document.createDocumentFragment();

    xhr.addEventListener("readystatechange",e=>{
        if(xhr.readyState!==4) return;
        //console.log(xhr)
        if (xhr.status>=200 && xhr.status<300) {
            //console.log("exito")
            //console.log(xhr.responseText)
            let datos = JSON.parse(xhr.responseText)
            //console.log(datos)

            datos.forEach((el)=>{
                const $li=document.createElement("li");
                $li.innerHTML=`${el.name} --- ${el.email} --- ${el.phone}`;
                $fragment.appendChild($li);
            })

            $xhr.appendChild($fragment)
        } else {
            console.log("error");
            let message = xhr.statusText || "Ocurrió un Error"
            $xhr.innerHTML=`Error ${xhr.status}: ${message}`
        }
    })
    
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");
    xhr.send()

})();

/* ----------- FETCH ----------*/

(()=>{

    const $fetch=document.querySelector("#fetch");
    const $fragment=document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
   /* .then((res)=>{
        console.log(res);
        return res.json()
        })*/
    .then((res)=>res.ok ?res.json() :Promise.reject(res))    
    .then((json)=>{
        //console.log(json)
        json.forEach((el)=>{
            const $li=document.createElement("li");
            $li.innerHTML=`${el.name} --- ${el.email} --- ${el.phone}`;
            $fragment.appendChild($li);
        })
        $fetch.appendChild($fragment)}

        )
    .catch((err)=>{
        console.log(err)
        let message = err.statusText || "Ocurrió un Error";
        console.log(err.status)
        $fetch.innerHTML=`Error ${err.status}: ${message}`;
        })
    //.finally(console.log("Esto se ejecutará independientemente del Resultado de la promesa Fetch"))


})();

/* ----------- FETCH & Async-Await ----------*/
(()=>{
    const $fetchAsync=document.querySelector("#fetch-async");
    const $fragment=document.createDocumentFragment();

    async function getData(){
        try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let json = await res.json()
        //console.log(json)
        
        if(!res.ok) throw{status:res.status, statusText:res.statusText}
        json.forEach((el)=>{
            const $li=document.createElement("li");
            $li.innerHTML=`${el.name} --- ${el.email} --- ${el.phone}`;
            $fragment.appendChild($li);
        })
        $fetchAsync.appendChild($fragment)
        } catch (err) {
            console.log(`Estoy en el Catch`,err)
            let message = err.statusText || "Ocurrió un Error";
            $fetchAsync.innerHTML=`Error ${err.status}: ${message}`;
        } finally{
            //console.log("Esto se ejecutará independientemente del Try.. Catch")
        }
    }
    getData()
})(); 

/* ----------- AXIOS ----------*/

(()=>{
    const $axios=document.querySelector("#axios");
    const $fragment=document.createDocumentFragment();

    axios("https://reqres.in/api/uses")
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
            console.log("Estamos en el catch:",err)
    })

})();

