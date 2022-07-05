/*
PROBLEMA 1 Y 2
	class celular{
		constructor(color,peso,tamaño,resolCam,ram){
			this.color = color;
			this.peso = peso;
			this.tamaño = tamaño;
			this.resolCam = resolCam;
			this.ram = ram;
			/*this.verInfo = `Este celular es de color ${this.color}, pesa ${this.peso} gr. Tiene un tamaño
			de ${this.tamaño} pulgadas, resolución de camara de ${this.resolCam}MP y una memoria
			de ${this.ram}GB de ram`+ "<br>";
			this.encendido == true;
		}

		encendido(){
			if (this.encendido !== false) {
				alert("el celular esta prendido");
				this.encendido = true;
			}
			else{
				alert("el celular esta apagado");
				this.encendido = false;
			}
		}
		reiniciar(){
			if(this.encendido == true){
				alert("Reiniciar celular");
				this.encendido = false;
			}
			else{
				alert("el celular esta apagado");
				this.encendido = false;
			}
		}

		foto(){
			alert(`foto tomada en una resolución de: ${this.resolcam}MP`);
		}

		grabar(){
			alert(`grabando video en: ${this.resolCam}`);
		}
		mostrarInfo(){
			return `
			Color: <b>${this.color}</b> <br>
			Peso: <b>${this.peso}gr</b> <br>
			Tamaño: <b>${this.tamaño}'</b> <br>
			Resolucion de Camara: <b>${this.resolCam}MP</b> <br>
			RAM: <b>${this.ram}GB </b><br>
			`
		}
	 }



	class altaGama extends celular{
		constructor(color,peso,tamaño,resolCam,ram, resolCamExtra){
			super(color,peso,tamaño,resolCam,ram);
			this.resolCamExtra = resolCamExtra;
		}

		camaraSuperLenta(){
			alert("Camara Super Lenta activado.");
		}

		reconocimientoFacial(){
			alert("Reconocimiento Facial activado");
		}

		infoAltaGama(){
			return this.mostrarInfo() + `Resolucion Camara Extra: ${this.resolCamExtra}K`
		}
	}


	const a = new altaGama ("rojo",150,5,20,2,4);
	const b = new altaGama ("azul",160,6,30,4,4);

	document.write(a.infoAltaGama());*/
// PROBLEMA 3 COFLA

	class App{
		constructor(descargas, puntuacion,peso){
			this.descargas= descargas;
			this.puntuacion= puntuacion;
			this.peso= peso;
			this.iniciada=false;
			this.instalada=false;
		}

		instalar(){
			if(this.instalada == false){
				this.instalada=true;
				alert("App Instalada");
			}
		}

		desinstalar(){
			if(this.instalada==true){
				this.instalada=false;
				alert("App Desinstalada");
			}
		}

		abrir(){
			if(this.iniciada==false && this.instalada==true){
				this.iniciada=true;
				alert("App Iniciada");
			}
		}

		cerrar(){
			if(this.iniciada==true && this.instalada==true){
				this.iniciada=false;
				alert("App Cerrada")
			}
		}

		info(){
			return `Descargas: <b>${this.descargas}</b><br>
			Puntuación: <b>${this.puntuacion}</b><br>
			Peso: <b>${this.peso}</b><br>
			`
		}
	}	

	app= new App (16000,4.5,"900MB");

	app.instalar()
	app.abrir()
	app.cerrar()
	app.desinstalar()
	document.write(app.info());