console.log("#################################################");
console.log("COMPARACIONES ###################################");
console.log("#################################################");

var x = 4,
	y = "4";

// TRUE
// valor equivalente
console.log(x == y);

// FALSE
// valor equivalente y mismo tipo de dato
console.log(x === y);

var obj1 = {
	nombre: "Erik"
};

var obj2 = {
	nombre: "Erik"
};

// FALSE
// se consulta por la referencia a la variable
console.log(obj1 == obj2);
console.log(obj1 === obj2);

// TRUE
// es la miama referencia

var obj3 = obj1;
console.log(obj3 == obj1);
console.log(obj3 === obj1);

// Objeto literal
// Es un nuevo objeto, otro lugar en memoria ram
var obj4 = {
	...obj1
};

// FALSE
console.log(obj4 == obj1);
console.log(obj4 === obj1);

// esto modifica ambos objetos,
// porque ambos apuntan al mismo espacio en memoria
console.log(obj1);
obj3.nombre = "Juan";
console.log(obj1);

// Funciones que retornan valores y arrow functions
const MAYORIA_DE_EDAD = 18;

// const esMayorDeEdad = persona => {
// 	return persona.edad >= MAYORIA_DE_EDAD;
// };

// si la funcion solo retorna un valor se puede simplificar
// ahorrando parentesis, corchetes y el return

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

const imprimirSiEsMayorDeEdad = persona => {
	// if (esMayorDeEdad(persona)) {
	// 	console.log(`${persona.nombre} es mayor de edad.`);
	// } else {
	// 	console.log(`${persona.nombre} es menor de edad.`);
	// }

	// un if tambien se puede simplificar en una linea if / else
	// de forma (condicional) ? hacer si se cumple : hacer si no se cumple;

	esMayorDeEdad(persona)
		? console.log(`${persona.nombre} es mayor de edad.`)
		: console.log(`${persona.nombre} es menor de edad.`);
};

imprimirSiEsMayorDeEdad(erik);
imprimirSiEsMayorDeEdad(juan);
