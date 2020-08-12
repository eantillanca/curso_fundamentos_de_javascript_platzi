const ULITMO_NIVEL = 10;
const TIEMPO_ILUMINANDO = 500;
const TIEMPO_INICIAR = 1000;
const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Juego {
	constructor() {
		this.inicializar = this.inicializar.bind(this);
		this.inicializar();
		this.generarSecuencia();
		setTimeout(() => {
			this.siguienteNivel();
		}, TIEMPO_INICIAR);
	}

	inicializar() {
		this.toggleBtnEmpezar();
		this.nivel = 1;
		this.colores = {
			celeste, // mismo nombre = celeste : celeste,
			violeta,
			naranja,
			verde
		};
		this.elegirColor = this.elegirColor.bind(this);
		this.siguienteNivel = this.siguienteNivel.bind(this);
	}

	toggleBtnEmpezar() {
		if (btnEmpezar.classList.contains("hide")) {
			btnEmpezar.classList.remove("hide");
		} else {
			btnEmpezar.classList.add("hide");
		}
	}

	generarSecuencia() {
		this.secuencia = new Array(ULITMO_NIVEL)
			.fill(0)
			.map(n => Math.floor(Math.random() * 4));
	}

	siguienteNivel() {
		this.subnivel = 0;
		this.iluminarSecuencia();
		this.agregarEventosClick();
	}

	transformarNumeroAColor(n) {
		switch (n) {
			case 0:
				return "celeste";
			case 1:
				return "violeta";
			case 2:
				return "naranja";
			case 3:
				return "verde";
		}
	}

	transformarColorANumero(color) {
		switch (color) {
			case "celeste":
				return 0;
			case "violeta":
				return 1;
			case "naranja":
				return 2;
			case "verde":
				return 3;
		}
	}

	iluminarColor(color) {
		this.colores[color].classList.add("light");
		setTimeout(() => {
			this.colores[color].classList.remove("light");
		}, TIEMPO_ILUMINANDO);
	}

	iluminarSecuencia() {
		for (let i = 0; i < this.nivel; i++) {
			let color = this.transformarNumeroAColor(this.secuencia[i]);
			setTimeout(() => {
				this.iluminarColor(color);
			}, TIEMPO_ILUMINANDO * i);
		}
	}

	agregarEventosClick() {
		this.colores.celeste.addEventListener("click", this.elegirColor);
		this.colores.violeta.addEventListener("click", this.elegirColor);
		this.colores.naranja.addEventListener("click", this.elegirColor);
		this.colores.verde.addEventListener("click", this.elegirColor);
	}

	eliminarEventosClick() {
		this.colores.celeste.removeEventListener("click", this.elegirColor);
		this.colores.violeta.removeEventListener("click", this.elegirColor);
		this.colores.naranja.removeEventListener("click", this.elegirColor);
		this.colores.verde.removeEventListener("click", this.elegirColor);
	}

	elegirColor(evt) {
		let nombreColor = evt.target.dataset.color;
		let numeroColor = this.transformarColorANumero(nombreColor);
		this.iluminarColor(nombreColor);
		if (numeroColor === this.secuencia[this.subnivel]) {
			this.subnivel++;
			if (this.subnivel === this.nivel) {
				this.nivel++;
				this.eliminarEventosClick();
				if (this.nivel === ULITMO_NIVEL + 1) {
					this.ganaJuego();
					console.log("gana");
				} else {
					setTimeout(this.siguienteNivel, 1500);
				}
			}
		} else {
			this.pierdeJuego();
			console.log("pierde");
		}
	}

	ganaJuego() {
		swal("Ganaste", "Felicitaciones! Ganaste el juego", "success").then(
			this.inicializar
		);
	}

	pierdeJuego() {
		swal("Perdiste", "Lo siento! Perdiste el juego", "error").then(() => {
			this.eliminarEventosClick();
			this.inicializar();
		});
	}
}

function empezarJuego() {
	var juego = new Juego();
}
