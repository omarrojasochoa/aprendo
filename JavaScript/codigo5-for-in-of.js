/*

let animales=["perro","gato","ratas"];

for (animal in animales) { // "in" sirve para los indices
	document.write(animal+"<br>");
}

document.write("<br>");

for (animal of animales){ //"of" sirve para los elemntos
	document.write(animal+"<br>");
}

*/

forRancio:// Sentencia "LABEL"
{let array1 = ["a","b","c"];
let array2=["d","e",array1,"g"];

	for (let array in array2) {
		if (array==2) {
			for (let array of array1) {
				document.write(array);
				break forRancio; //
			}
			//break;
		} else{
			document.write(array2[array]);

		}
	}
}