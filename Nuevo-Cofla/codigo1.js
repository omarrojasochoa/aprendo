const definirCompra = (n)=>{
    let din = prompt(`Dinero de ${n}`);
   // din=parseInt(din);
    if (din>=0.6 && din<1) {return (`${n}:Comprate un helado de Agua y te sobra: `+(din-0.6)+"<br>");}
    if (din>=1 && din<1.6) {return (`${n}:Comprate un helado de Crema y te sobra: `+(din-1)+"<br>");}
    if (din>=1.6 && din<1.7) {return (`${n}:Comprate un helado de Heladix y te sobra: `+(din-1.6)+"<br>");}
    if (din>=1.7 && din<1.8) {return (`${n}:Comprate un helado de Heladovich y te sobra: `+(din-1.7)+"<br>");}
    if (din>=1.8 && din<2.9) {return (`${n}:Comprate un helado de Helardo y te sobra: `+(din-1.8)+"<br>");}
    if (din>=2.9) {return (`${n}:Comprate un helado de Confites o 1/4 de Kg y te sobra: `+(din-2.9)+"<br>");}
    else return(`${n}: No te alcanza basura de pobre`);
}   

console.log(definirCompra("cofla"));
console.log(definirCompra("pedro"));
console.log(definirCompra("roberto"));   