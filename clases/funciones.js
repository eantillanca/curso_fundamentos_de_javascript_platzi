console.log("#################################################");
console.log("FUNCIONES #######################################");
console.log("#################################################");

// Variables
var nombre = "Erik",
	edad = 25;

// Objetos
var erik = {
	nombre: "Erik",
	apellido: "Antillanca",
	edad: 25
};

var juan = {
	nombre: "Juan",
	apellido: "Fuentes",
	edad: 24
};

// FUNCIONES
function imprimirEdad(n, e) {
	console.log(`${n} tiene ${e} años`);
}

imprimirEdad(nombre, edad);
imprimirEdad("Juan", 24);

// ALCANCE DE FUNCIONES

// alcance global, modifica var nombre
// function imprimirNombreEnMayusculas() {
// 	nombre = nombre.toUpperCase();
// 	console.log(nombre);
// }

// nombre es de alance local, no modifica var nombre
function imprimirNombreEnMayusculas(nombre) {
	nombre = nombre.toUpperCase();
	console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);

// se puede recibir como parametro el atributo del objeto
// en este caso persona.nombre para como parametro { nombre }
function imprimirNombreEnMayusculasDesdeObjeto({ nombre }) {
	console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculasDesdeObjeto(erik);
imprimirNombreEnMayusculasDesdeObjeto(juan);

// se puede crear el objeto en el mismo parametro
imprimirNombreEnMayusculasDesdeObjeto({ nombre: "Diego" });

// Otra forma de desglozar el objeto es recibir su atributo directamente
function imprimirNombreEnMayusculasDesdeObjetoForma2(persona) {
	// let nombre = persona.nombre;
	let { nombre } = persona;
	console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculasDesdeObjetoForma2(erik);

function imprimirNombreYEdad(persona) {
	let { nombre, edad } = persona;
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años.`);
}

imprimirNombreYEdad(erik);

// COMPORTAMEINTO DE JS AL PASAR OBJETOS COMO PARAMETROS
console.log(erik);

function cumpleanios(persona) {
	return {
		...persona,
		edad: persona.edad + 1
	};
}

// esta funcion no modifica el objeto original
// crea uno nuevo con los mismos atributos del original
// mas sus modificaciones y/o nuevos atributos

erikCumpleanios = cumpleanios(erik);
console.log(erik);
console.log(erikCumpleanios);
