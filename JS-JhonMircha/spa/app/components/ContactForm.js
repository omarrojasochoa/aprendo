export function ContactForm(){
    const d=document;
    const $form= d.createElement("form")
    const $styles=d.getElementById("dynamic-styles")

    $form.classList.add("contact-form");

    $styles.innerHTML=`
    body{
        display: block;
        justify-content: center;
        align-items: center;
        
    }
    
    html{
        box-sizing: border-box;
        font-family: var(--main-font);
        font-size: var(--font-size);
        scroll-behavior: smooth;
    }
    img{
        max-width: 100%;
        height: auto;
    }
    
    *,
    *:before,
    *:after{
        box-sizing: inherit;
    }
    
    body{
        margin: 0;
        overflow-x: hidden;
    }
    
    h2 {
        margin: 0 auto;
        text-align: center;
        z-index: 1001;
    }
    
    
    .contact-form{
        --form-ok-color:#4caf50;
        --form-error-color: #f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        text-align: center;
    }
    .contact-form>*{       /*todos los hijos de formulario de contacto*/
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
    }      
    .contact-form textarea{
        resize: none;
    }
    .contact-form legend,
    .contact-form-reponse{
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }
    
    .contact-form input,
    .contact-form textarea{
        font-size: 1rem;
        font-family: sans-serif;
    }
    
    .contact-form input[type="submit"]{
        width: 50%;
        font-weight: bold;
        cursor: pointer;
    }
    
    .contact-form *::placeholder{
        color: #000;
    }
    
    .contact-form [required]:valid{
        border: thin solid var(--form-ok-color);
    }
    .contact-form [required]:invalid{
        border: thin solid var(--form-error-color);
    }
    
    .contact-form-error{
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #fff;
        transition: all 0.8s ease;
    }
    .contact-form-error.is-active{
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
    }
    
    .contact-form-loader{
        text-align: center;
    }
    
    .none{
        display: none;
    }
    
    @keyframes show-message{
        0%{
            visibility: hidden;
            opacity: 0%;
        }
        100%{
            visibility: visible;
            opacity: 100%;
        }
    }
    `;

    $form.innerHTML=`
    <legend>Envianos tus comentarios</legend>
    <input type="text" name="name" placeholder="Escribe tu nombre.."
    title="Nombre solo acepta letras y espacion en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required> <!--pattern sirve para colocar la expresion regular para la validacion-->

    <input type="email" name="email" placeholder="Escribe tu correo.." title="Email Incorrecto"
    pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>

    <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido." required>

    <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios.." 
    title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
    <input type="submit" value="Enviar">
    <div class="contact-form-loader none">
        <img src="../assets/puff.svg" alt="Cargando">
    </div>
    <div class="contact-form-response none">
        <a>Los datos han sido enviados</a>
    </div>
    `;

    function validationsForm(){
        const $form=d.querySelector(".contact-form");
    const $inputs=d.querySelectorAll(".contact-form [required]");
    //console.log($inputs)

    $inputs.forEach((input)=>{ //Para crear los comentarios abajo del input
        const $span=d.createElement("span");
        $span.id=input.name;
        $span.textContent=input.title;
        $span.classList.add("contact-form-error","none")
        input.insertAdjacentElement("afterend",$span);
     
    });

    d.addEventListener("keyup",e=>{
        if(e.target.matches(".contact-form [required]")){
            let $input=e.target;
            let pattern=$input.pattern||$input.dataset.pattern; //esto es para detectar el atributo pattern que creamos en html
            
            //console.log($input,pattern)
            if(pattern && $input.value!==""){
                //console.log("el input tiene patron")
                let regex= new RegExp(pattern)
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
            }
            
            if(!pattern){
               // console.log("el input NO tiene patron")
                return $input.value===""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
            }
        }
    })


    d.addEventListener("submit",(e)=>{
        e.preventDefault();
        alert("Enviando formulario")

        const $loader=d.querySelector(".contact-form-loader");
        const $response=d.querySelector(".contact-form-response");//respuesta
        
        $loader.classList.remove("none")
        
        fetch("https://formsubmit.co/ajax/orojas3095@gmail.com",{
            method:"POST",
            body: new FormData(e.target)
        })
            .then(res=>res.ok ?res.json() :Promise.reject(res))
            .then(json=>{
                console.log(json)
                $loader.classList.add("none");
                $response.classList.remove("none");
                $response.innerHTML=`<p>${json.message}</p>`
                $form.reset()
            })
            .catch(err=>{
                console.log(err)
                let message= err.statusText || "Ocurrio un error al enviar, intenta nuevamente"
                $response.innerHTML=`<p>Error ${err.status}: ${message}</p> `
            })
            .finally(()=>setTimeout(()=>{
                $response.classList.add("none");
                $response.innerHTML="";
            },3000));
    })
    }

    setTimeout(() => { //por problemas de interaccion dinamico se usa.
        validationsForm()
    }, 100);
    
    return $form
}