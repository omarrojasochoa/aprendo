class Animal {
	constructor (especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info= `soy ${this.especie}, tengo ${this.edad} años
		y soy de color ${this.color} <br>`;
	}

	 verInfo(){
	 // si creo una fx dentro de una clase, es un metodo.
	 // Este METODO. no se le coloca const o let.
		document.write(this.info + "<br>");
	} 

	ladrar(){
		if (this.especie=="perro") {
			document.write("¡wof!¡wof! <br>")
		}
		else{
			document.write(`no puedo ladrar. soy un ${this.especie} <br>`)
		}
	}
}

let perro = new Animal ("perro",5,"marron");
let gato = new Animal ("gato",3,"negro");
let loro = new Animal ("loro",4,"verde"); 

	/*perro.verInfo();
	gato.verInfo();
	loro.verInfo();*/

	perro.ladrar();
	gato.ladrar();
	loro.ladrar();

/*
 CARACTERISTICAS DE POO: 

 - HERENCIA: "extends" toma todas las propiedades de una clase y le agrega unas cosas mas
 	ejmpl: class perro extends animal {
		

		super(especie,edad,color,raza)
*/

class Perro extends Animal {
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza;

	}
}

perro = new Perro ("perro",5,"marron","boxer");
perro.verInfo();