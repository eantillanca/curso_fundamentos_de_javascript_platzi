console.log("#################################################");
console.log("ASINCRONISMO ####################################");
console.log("#################################################");

// console.log("a");
// setTimeout(() => console.log("b"), 2000);
// console.log("c");

// console.log("A");
// setTimeout(() => console.log("B"), 2000);
// console.log("C");
// setTimeout(() => console.log("D"), 2000);

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const options = {
	crossDomain: 1
};

function obtenerPersonaje(id, callback) {
	const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
	$.get(URL, options, person => {
		console.log(`Hola, yo soy ${person.name}.`);
	});
}

// El orden en las peticiones no asegura el orden en las respuestas
// El orden de las respuestas solo depende del servidor
// De esta forma los request se ejecutan en paralelo
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);

// Una forma de asegurar el orden de los datos solicitados
// es utilizar funciones callback
// De esta forma los request se ejecutan en serie
obtenerPersonaje(1, function () {
	obtenerPersonaje(2, function () {
		obtenerPersonaje(3);
	});
});

// Promesas

// Estructura basica
new Promise(function (resolve, reject) {
	//
})
	.then(value => {
		//
	})
	.catch(value => {
		//
	});

function obtenerPersonajePromise(id) {
	return new Promise((resolve, reject) => {
		const URL_ID = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
		$.get(URL_ID, options, data => {
			resolve(data);
		}).fail(() => reject(id));
	});
}

const onError = id => {
	console.log(`Error al obtener personaje ${id}`);
};

obtenerPersonajePromise(1)
	.then(person => console.log(`Hola, yo soy ${person.name}.`))
	.catch(onError);

// encadenar promesas
obtenerPersonajePromise(5)
	.then(person5 => {
		console.log(`Hola, yo soy ${person5.name}.`);
		return obtenerPersonajePromise(6);
	})
	.then(person6 => {
		console.log(`Hola, yo soy ${person6.name}.`);
		return obtenerPersonajePromise(7);
	})
	.then(person7 => {
		console.log(`Hola, yo soy ${person7.name}.`);
	})
	.catch(onError);

// Promises en paralelo
let ids = [10, 11, 12, 13];
let promesas = ids.map(id => obtenerPersonajePromise(id));

Promise.all(promesas)
	.then(personajes => console.log(personajes))
	.catch(onError);

// async await
async function obtenerPersonajesAsync() {
	let ids = [15, 16, 17, 18];
	let promesas = ids.map(id => obtenerPersonajePromise(id));
	try {
		let personajes = await Promise.all(promesas);
		console.log(personajes);
	} catch (id) {
		onError(id);
	}
}
