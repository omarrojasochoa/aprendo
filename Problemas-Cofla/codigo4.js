class celular{
	constructor(color,peso,resolPantalla,resolCam,ram){
		this.color = color;
		this.peso = peso;
		this.resolPantalla = resolPantalla;
		this.resolCam = resolCam;
		this.ram = ram;
		this.verInfo = `Este celular es de color ${this.color}, pesa ${this.peso} gr. Tiene una resolución
		de pantalla de ${this.resolPantalla} pulgadas, resolución de camara de ${this.resolCam}MP y una memoria
		de ${this.ram}GB de ram`+ "<br>";
	}

	prender(){
		alert("encendido");
	}

	reiniciar(){
		alert("reiniciar");
	}
	apagar(){
		alert("apagar"); 
	}
	foto(){
		alert("foto");
	}
	grabar(){
		alert("grabar");
	}
}

const a = new celular ("rojo",150,5,20,2);
const b = new celular ("azul",160,6,30,4);
const c = new celular ("negro",155,4,60,8);


document.write(a.verInfo + "<br>");
document.write(b.verInfo + "<br>");
document.write(c.verInfo + "<br>");







/*
class funcion extends celular{
	constructor(color,peso,resolPantalla,resolCam,ram,prender,reiniciar,apagar,foto,grabar){
		super(color,peso,resolPantalla,resolCam,ram);
		this.prender = prender;
		this.reiniciar = reiniciar;
		this.apagar = apagar;
		this.foto = foto;
		this.grabar = grabar;
	}
}
*/