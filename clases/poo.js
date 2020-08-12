console.log("#################################################");
console.log("PROGRAMACION ORIENTADA A OBJETOS #################");
console.log("#################################################");

// Prototype o prototipo / clase
// No existen clases como tal, todos son prototypes

class Persona {
	constructor(nombre, apellido, altura) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.altura = altura;
		this.vivo = true; // se puede asignar un valor por defecto
	}

	saludar(fn) {
		console.log(`Hola me llamo ${this.nombre} ${this.apellido} `);
		if (fn) {
			fn(this.nombre, this.apellido, false);
		}
	}

	soyAlto() {
		this.altura >= 1.8
			? console.log(`Soy alto, mido ${this.altura.toFixed(2)}`)
			: console.log(`Soy bajo, mido ${this.altura.toFixed(2)}`);
	}
}

erik = new Persona("Erik", "Antillanca", 1.7);
juan = new Persona("Juan", "Perez", 1.8);
console.log(erik);
erik.saludar();
erik.soyAlto();

// Herencia prototipal

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura) {
		super(nombre, apellido, altura);
	}

	// es posible reescribir funciones en las clases que heredan de otra
	saludar(fn) {
		let { nombre, apellido } = this;
		console.log(
			`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`
		);
		if (fn) {
			fn(nombre, apellido, true);
		}
	}
}

erik_dev = new Desarrollador("Erik", "Antillanca", 1.7);
console.log(erik_dev);

// se puede acceder a las funciones de de la misma clase
erik_dev.saludar();
// y las funciones heredadas de la clase padre
erik_dev.soyAlto();

function responderSaludo(nombre, apellido, isDev) {
	console.log(`Hola ${nombre} ${apellido}`);
	if (isDev) {
		console.log(`No sabia que eras Dev!`);
	}
}

console.log("saludo y respuesta:");
juan.saludar(responderSaludo);
console.log("---------------");
erik_dev.saludar(responderSaludo);
