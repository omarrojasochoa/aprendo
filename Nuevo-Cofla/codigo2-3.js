class Calculadora{
    sumar(n1,n2) {return parseInt(n1)+parseInt(n2);}
    restar(n1,n2) {return parseInt(n1)-parseInt(n2);}
    multiplicar(n1,n2) {return parseInt(n1)*parseInt(n2);}
    dividir(n1,n2) {return parseInt(n1)/parseInt(n2);}
    potencia(n1,n2) {return parseInt(n1)**parseInt(n2);}
    raizcuadrada(n1) {return Math.sqrt(n1)}
    raizcubica(n1) {return Math.cbrt(n2);}
}
const calculadora = new Calculadora;
let operacion=prompt(`Que operacion deseas realizar: 1=Sumar, 2=Restar,
3=Multiplica, 4=Dividir, 5=potencia, 6=raizCuadrada, 7=raizCubica`)

if (operacion==1){
    let num1= prompt("Primer numero para Sumar");
    let num2= prompt("Segundo numero para Sumar");
    let resultado= calculadora.sumar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion==2){
    let num1= prompt("Primer numero para Restar");
    let num2= prompt("Segundo numero para Restar");
    let resultado= calculadora.restar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion==3){
    let num1= prompt("Primer numero para multiplicar");
    let num2= prompt("Segundo numero para multiplicar");
    let resultado= calculadora.multiplicar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion==4){
    let num1= prompt("Primer numero para dividir");
    let num2= prompt("Segundo numero para dividir");
    let resultado= calculadora.dividir(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion==5){
    let num1= prompt("Numero a potenciar");
    let num2= prompt("Numero de Potencia");
    let resultado= calculadora.potencia(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion==6){
    let num1= prompt("Numero a sacar Raiz Cuadrada");
    let resultado= calculadora.raizcuadrada(num1);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion==7){
    let num1= prompt("Numero a sacar Raiz Cubica");
    let resultado= calculadora.raizcubica(num1);
    alert(`Tu resultado es ${resultado}`);
}
else{
    alert("Vete a la mrd puta.")
}