console.log("#################################################");
console.log("CICLOS ##########################################");
console.log("#################################################");

erik.peso = 60;
juan.peso = 67;

const DIAS_ANIO = 365;

const INCREMENTO_PESO = 0.2;

const aumentarPeso = persona => (persona.peso += INCREMENTO_PESO);
const disminuirPeso = persona => (persona.peso -= INCREMENTO_PESO);

// CICLO FOR

console.log(`${erik.nombre} a inicio de año pesaba ${erik.peso} kg`);

for (let i = 1; i <= DIAS_ANIO; i++) {
	let random_erik = Math.random();
	let random_juan = Math.random();

	if (random_erik < 0.25) {
		aumentarPeso(erik);
	} else if (random_erik < 0.5) {
		disminuirPeso(erik);
	}
}

console.log(`${erik.nombre} a fin de año pesaba ${erik.peso.toFixed(2)} kg`);

// CICLO WHILE

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = juan.peso - 3; // bajar tres kilos
let dias = 0;

console.log(`${juan.nombre} en un inicio pesaba ${juan.peso.toFixed(2)} kg`);

while (juan.peso > META) {
	// debugger; // permite debuggear codigo viendo el paso a paso en consola
	if (comeMucho()) {
		aumentarPeso(juan);
	}
	if (realizaDeporte()) {
		disminuirPeso(juan);
	}
	dias += 1;
}

console.log(
	`${
		juan.nombre
	} en ${dias} dias bajo 3 kg de peso y ahora pesa ${juan.peso.toFixed(2)} kg`
);

// DO WHILE

let contador = 0;
const llueve = () => Math.random() < 0.25;

do {
	contador += 1;
} while (!llueve());

let veces = contador === 1 ? "vez" : "veces";

console.log(`Fui a ver si llovia ${contador} ${veces}.`);

// SWITCH

// let signo = prompt("cuál es tu signo?");
let signo = "aries";
console.log(signo);

const horoscopos = {
	aries: "21 marzo - 19 abril",
	tauro: "20 abril - 20 mayo",
	geminis: "21 mayo - 20 junio",
	cancer: "21 junio - 22 julio",
	leo: "23 julio - 22 agosto",
	virgo: "23 agosto - 22 septiembre",
	libra: "23 septiembre - 22 octubre",
	escorpion: "23 octubre - 21 noviembre",
	sagitario: "22 noviembre - 21 diciembre",
	capricornio: "22 diciember - 19 enero",
	acuario: "20 enero - 18 febrero",
	piscis: "19 febrero - 20 marzo"
};

const mostrarFechasSigno = signo => console.log(signo);

switch (signo) {
	case "aries":
		mostrarFechasSigno(horoscopos.aries);
		break;
	case "tauro":
		mostrarFechasSigno(horoscopos.tauro);
		break;
	case "geminis":
	case "géminis":
		horoscopos.geminis;
		break;
	case "cancer":
		mostrarFechasSigno(horoscopos.cancer);
		break;
	case "leo":
		mostrarFechasSigno(horoscopos.leo);
		break;
	case "virgo":
		mostrarFechasSigno(horoscopos.virgo);
		break;
	case "libra":
		mostrarFechasSigno(horoscopos.libra);
		break;
	case "escorpion":
		mostrarFechasSigno(horoscopos.escorpion);
		break;
	case "sagitario":
		mostrarFechasSigno(horoscopos.sagitario);
		break;
	case "capricornio":
		mostrarFechasSigno(horoscopos.capricornio);
		break;
	case "acuario":
		mostrarFechasSigno(horoscopos.acuario);
		break;
	case "piscis":
		mostrarFechasSigno(horoscopos.piscis);
		break;
	default:
		console.log(`Signo no encontrado.`);
		break;
}
