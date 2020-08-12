console.log("#################################################");
console.log("ARRAYS ##########################################");
console.log("#################################################");

var sacha = {
	nombre: "Sacha",
	apellido: "Lifszyc",
	altura: 1.72,
	cantidadLibros: 4
};

var alan = {
	nombre: "Alan",
	apellido: "Perez",
	altura: 1.86,
	cantidadLibros: 6
};

var martin = {
	nombre: "Martin",
	apellido: "Gomez",
	altura: 1.85,
	cantidadLibros: 7
};

var dario = {
	nombre: "Dario",
	apellido: "Juarez",
	altura: 1.71,
	cantidadLibros: 2
};

var vicky = {
	nombre: "Vicky",
	apellido: "Zapata",
	altura: 1.56,
	cantidadLibros: 4
};

var paula = {
	nombre: "Paula",
	apellido: "Barros",
	altura: 1.76,
	cantidadLibros: 3
};

// array
var personas = [sacha, alan, martin, dario, vicky, paula];

console.log(personas[0].altura);
console.log(personas[0]["altura"]);

// Iterar array
personas.forEach(persona => {
	console.log(`${persona.nombre} mide ${persona.altura} mts.`);
});

// Array filter

// funcion con objeto completo como parametro
console.log("filter altura >= 1.80");
personasAltas = personas.filter(p => p.altura >= 1.8);
console.log(personasAltas);

// funcion con solo el atributo del objeto como parametro
console.log("filter altura < 1.80");
personasBajas = personas.filter(({ altura }) => altura < 1.8);
console.log(personasBajas);

// Array map
console.log("array map");
console.log(personas);

// map permite crear un array nuevo y modificar los atributos
// sin modificar el array original

let personasCms = personas.map(persona => {
	return {
		...persona,
		altura: persona.altura * 100
	};
});

// o su equivalente

personasCms = personas.map(persona => ({
	...persona,
	altura: persona.altura * 100
}));

console.log("map altura en cms");
console.log(personas);
console.log(personasCms);

// filter filtra segun la condición devolviendo
// los elementos del array que cumplen la condicion completo
console.log("array filter");
console.log(personas.filter(p => p.altura > 1.8));

// map devuelve un array de los atributos que se le indiquen
// el array obtiene solo los valores del atributo

// array [1.13, 1.46, 1.66, ...]
console.log("array map ");
console.log(personas.map(p => p.altura));

// array ["erik", 1.70]["juan", 1.80][...]
console.log(personas.map(p => [p.nombre, p.altura]));

// para modificar el array original se debe reasignar la variable
// porque map siempre devuelve un nuevo array sin modificar el original

console.log("modificar original");
console.log(personas);
personas = personas.map(p => {
	return {
		...p,
		altura: p.altura * 100
	};
});
console.log(personas);

// Reduce

// Reduce el array a un valor calculado y lo retorna
// ejemplo:
// array.reduce( (contador, ar) => (contador += ar.valor), valor_inicial )

let cantidadTotalLibros = personas.reduce(
	(cont, persona) => (cont += persona.cantidadLibros),
	0
);

// o pasando el atributo directamente
cantidadTotalLibros = personas.reduce(
	(cont, { cantidadLibros }) => (cont += cantidadLibros),
	0
);

console.log(cantidadTotalLibros);
