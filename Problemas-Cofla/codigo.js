dc= prompt("¿Cuanto dinero tienes Cofla?")

let pa=0.6;
let pc=1;
let bheladix=1.6;
let bheladovich=1.7;
let bhelardo=1.8;
let hc=2.9;
let pote=2.9;

/*dc = parseInt(dc);*/

if (dc>=0.6 && dc<1){
	alert("Comprate la Paleta de Agua");
	alert("Y te sobra " + (dc-0.6));
}

else if (dc>=1 && dc<1.6){
	alert("Comprate la Paleta de Crema");
	alert("Y te sobra " + (dc-1));
}

else if (dc>=1.6 && dc<1.7){
	alert("Comprate el bombom Heladix");
	alert("Y te sobra " + (dc-1.6));
}
else if (dc>=1.7 && dc<1.8){
	alert("Comprate el bombom Heladovich");
	alert("Y te sobra " + (dc-1.7));
}

else if (dc>=1.8 && dc<2.9){
	alert("Comprate el bombom Helardo");
	alert("Y te sobra " + (dc-1.8));
}

else if (dc>=2.9){
	alert("Comprate un Pote con Confites o de 1/4 Kg");
	alert("Y te sobra " + (dc-2.9));
}

else {
	alert("Largo pobre.")
}


dp= prompt("¿Cuanto dinero tienes Pedro?")

if (dp>=0.6 && dp<1){
	alert("Comprate la Paleta de Agua")
}

if (dp>=1 && dp<1.6){
	alert("Comprate la Paleta de Crema")
}

if (dp>=1.6 && dp<1.7){
	alert("Comprate el bombom Heladix")
}

if (dp>=1.7 && dp<1.8){
	alert("Comprate el bombom Heladovich")
}

if (dp>=1.8 && dp<2.9){
	alert("Comprate el bombom Helardo")
}

if(dp>=2.9){
	alert("Comprate un Pote con Confites o de 1/4 Kg")
}

dr= prompt("¿Cuanto dinero tienes Roberto?")

if (dr>=0.6 && dr<1){
	alert("Comprate la Paleta de Agua")
}

 if (dr>=1 && dr<1.6){
	alert("Comprate la Paleta de Crema")
}

if (dr>=1.6 && dr<1.7){
	alert("Comprate el bombom Heladix")
}

if (dr>=1.7 && dr<1.8){
	alert("Comprate el bombom Heladovich")
}

if (dr>=1.8 && dr<2.9){
	alert("Comprate el bombom Helardo")
}

if(dr>=2.9){
	alert("Comprate un Pote con Confites o de 1/4 Kg")
}

