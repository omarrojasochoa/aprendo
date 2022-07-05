class Animal {
	constructor(especie, edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy un ${this.especie}, tengo ${this.edad} años
		y mi pelaje es de color ${this.color}.`
	}

	verInfo(){
		document.write(this.info);
	}
}
	//Herencia
	class Perro extends Animal {
		constructor (especie,edad,color,raza){
			super (especie,edad,color);
			this.raza = null;
		}
		// Metodo Estatico no requiere que la clase se defina para poder ser creado
		static ladrar(){
			alert("¡WOAF!");
		}

		//GET (getter) se usa para obtener un valor
		//SET (setter) se usa para modificar o definirlo.
	
		set setRaza(newName){
			this.raza= newName;
		}

		get getRaza(){
			return this.raza;
		}

	}


let perro = new Perro ("perro",15,"rojo","doberman");

perro.setRaza = "Pedro";

document.write(perro.getRaza);

//static ladrar 