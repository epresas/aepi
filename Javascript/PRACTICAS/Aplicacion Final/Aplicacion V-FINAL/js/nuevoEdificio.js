class Edificio {

	constructor(celda, nombre) {

		this._celda = celda;
		this._nombre = nombre;
	}

	iniciar() {

		let celdas = opener.document.getElementsByClassName('celda');

		for (let cadaCelda of celdas) {

			if (cadaCelda.dataset.celda == this._celda) {

				cadaCelda.dataset.edificio = this._nombre;
			}
		}
	}

	get tipo() {
		return this._tipo;
	}
}


class Atraccion extends Edificio {

	constructor(celda, nombre, visitantes) {

		super(celda, nombre);
		this._visitantes = visitantes;
		this._tipo = "atraccion";
	}

	get visitantes() {
		return this._visitantes;
	}
}


class Puesto extends Edificio {

	constructor(celda, nombre, ingresos) {

		super(celda, nombre);
		this._ingresos = ingresos;
		this._tipo = "puesto";
	}

	get ingresos() {
		return this._ingresos;
	}
}




let edificios = document.getElementsByClassName('edificio');

for (let edificio of edificios) { 

	edificio.onclick = function() {

		if (opener.objPartida.saldo >= this.dataset.coste) {

			let celdaMapa = document.getElementById('numeroCelda').textContent;
			let nombreMapa = this.dataset.nombre;

			if (this.dataset.tipo === "atraccion") {
				
				let visitantesMapa = this.dataset.visitantes;
				let objAtraccion = new Atraccion(celdaMapa, nombreMapa, visitantesMapa);

				opener.objPartida.saldo -= this.dataset.coste;

				objAtraccion.iniciar();

				opener.objPartida.parque.push(objAtraccion);

				window.close();

				opener.msg('success', '¡Atracción nueva edificada!');

			}

			if (this.dataset.tipo === "puesto") {

				let ingresosMapa = this.dataset.ingresos;
				let objPuesto = new Puesto(celdaMapa, nombreMapa, ingresosMapa);

				opener.objPartida.saldo -= this.dataset.coste;

				objPuesto.iniciar();

				opener.objPartida.parque.push(objPuesto);

				window.close();

				opener.msg('success', '¡Puesto nuevo edificado!');
			}

		} else {

			msg("error", "No dispones de suficiente saldo (" + opener.objPartida.saldo + "$ restantes)");
		}
	}
}