const d=document;
const w=window;

export default function responsiveTester(form){
    const $form=d.querySelector(form);
    const $cerrar=d.querySelector("#cerrar");
    let tester;
    d.addEventListener("submit",(e)=>{
        if(e.target===$form){ // se usa e.target ===$form, por ser uso de
            e.preventDefault()
            tester=w.open(
                $form.direccion.value,
                "tester",
                `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
            }
    });

   /* console.log(tester)
    $cerrar.addEventListener("click",(e)=>{
        tester.close();
    })*/
    
    /*
   d.addEventListener("click",(e)=>{
        if(e.target===$form.cerrar) {
           console.log(tester);// no cierra en Chrome
        }
    }); */
}