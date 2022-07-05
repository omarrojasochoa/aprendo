class celular {
	constructor(color,peso,rsp,rsc,ram){
		this.color = color;
		this.peso = peso;
		this.rsp = rsp;
		this.rsc = rsc;
		this.ram = ram; 
		this.on == true;
	}

	on(){
		if (this.on !== false) {
			alert("El celular esta prendido")
			this.on = true;
		}
		else{
			alert("El celular esta apagado")
			this.on = false;
		}
	}
	reiniciar(){
		if (this.on == true) {
			alert("El celular se reiniciara")
			this.on = false;
		}
		else{
			alert("El celular esta apagado")
			this.on = false;
		}
	}

	foto(){
		alert(`Foto tomada con una Resolucion de Pantalla ${this.rsc}MP`)
	}

	grabar(){
		alert(`Grabación con una resolucion: ${this.rsc}`)
	}

	mostrarInfo(){
		document.write( `
		Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso}gr</b><br>
		Resolucion Pantalla: <b>${this.rsp}</b><br>
		Resolucion Camara: <b>${this.rsc}MP</b><br>
		RAM: <b>${this.ram}GB</b><br>
		`)
	}

}

celular1= new celular("rojo",250,"5'",30,2);
celular1.on();
celular1.reiniciar();
celular1.foto();
celular1.mostrarInfo();