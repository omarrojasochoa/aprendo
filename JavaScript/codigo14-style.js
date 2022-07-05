/*

___________ATRIBUTOS GENERALES__________

-contenteditable; Indica si el elemento puede ser editado por el usuario

-tabIndex; Indica si el elemento puede obtener un focus de input



____________ATRIBUTOS DE INPUTS ____________

let input = document.querySelector(".input-normal");

- className:
document.write(input.className); -> input-normal;

- value:
document.write(input.value); -> 1; 

- type:
document.write(input.type); -> text; 
document.write(input.type=range); -> range; 

- accept:
input.accept = image/png ->"Aceptara solo formato
png (para esto el input dbe ser type= "file")"  

-form: 
-minlength:
-placeholder:
-required:
input.required = " "; ->Te pide llenar el campo del input obligatoriamente

_____________PROPIEDAD STYLE__________________
let saludo = document.querySelector(".saludo");

saludo.style.color= "#0359";
saludo.style.padding="30px";
saludo.style.background="azul"


*/
let saludo = document.querySelector(".saludo");
saludo.style.color= "#0359";

saludo.style.padding="30px";
saludo.style.background="sky";