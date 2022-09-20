import STRIPE_KEYS from "./129_stripe-keys.js";
//console.log(STRIPE_KEYS)
const d=document;
const $platos=d.querySelector("#platos");
const $template=d.querySelector("#plato-template").content;
const $fragment= d.createDocumentFragment();
const fetchOptions= {
    headers:{
        Authorization:`Bearer ${STRIPE_KEYS.secret}`,
    },
};

let prices,products;

const moneyFormat = num =>`S/.${num.slice(0,-2)}.${num.slice(-2)}`

Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions)
])
.then(responses=>Promise.all(responses.map((res)=>res.json())))
.then((json)=>{
    //console.log(json)
    products=json[0].data;
    prices=json[1].data;
    //console.log(products,prices);

    prices.forEach((el)=>{//para las tarjetas html
        let productData=products.filter((product)=>product.id===el.product);
        //console.log(productData);
        
        $template.querySelector(".plato").setAttribute("data-price",el.id);
        //se creo un data atributo que sera el id
        $template.querySelector("img").src=productData[0].images[0];
        $template.querySelector("img").alt=productData[0].name;
        $template.querySelector("figcaption").innerHTML=`
        ${productData[0].name}
        <br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
        `;

        let $clone=d.importNode($template,true);
        $fragment.appendChild($clone)
    });

    $platos.appendChild($fragment)
}) 
.catch((err)=>{
    console.log(err);
    let message= err.statusText||"Ocurrió un error al conectarse con la API de Stripe"
    $platos.innerHTML=`<p>Error ${err.status}: ${message}</p>`;
})

d.addEventListener("click",(e)=>{
    //console.log(e.target);
    if(e.target.matches(".plato *")){
        let price=e.target.parentElement.getAttribute("data-price")
        //ve a tu elemento padre y obten el atributo "data-price"
        //console.log(price)
        Stripe(STRIPE_KEYS.public)
         .redirectToCheckout({
            lineItems:[{price:price,quantity:1}],
            mode:"subscription",
            successUrl:"http://127.0.0.1:5500/JS-JhonMircha/ajax-ejercicios/assets/129_stripe-success.html",
            cancelUrl:"http://127.0.0.1:5500/JS-JhonMircha/ajax-ejercicios/assets/129_stripe-cancel.html",
         })//promesa
         .then(res=>{
            console.log(res)
            if(res.error){
                $platos.insertAdjacentHTML("afterend",res.error.message)
            }
        })
    }
})


/*fetch("https://api.stripe.com/v1/products",{
    headers:{
        Authorization:`Bearer ${STRIPE_KEYS.secret}`,
    },

}).then((res)=>{
    console.log(res)
    return res.json();
})
.then(json=>{
    console.log(json)
});*/

/*fetch("https://api.stripe.com/v1/prices",{
    headers:{
        Authorization:`Bearer ${STRIPE_KEYS.secret}`,
    },

}).then((res)=>{
    console.log(res)
    return res.json();
})
.then(json=>{
    console.log(json)
});*/

