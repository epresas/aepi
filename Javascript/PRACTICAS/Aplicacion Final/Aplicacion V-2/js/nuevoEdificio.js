class Edificio{
    constructor(celda, nombre){

        this._celda = celda;
        this._nombre = nombre;
    }
}

class Atraccion extends Edificio {
    constructor(celda, nombre, visitantes){
        super(celda,nombre);
        this._visitantes = visitantes;
        this._tipo = "atraccion";
    }
}

class Puesto extends Edificio {
    constructor(celda, nombre, ingresos){
        super(celda,nombre);
        this._ingresos = ingresos;
        this._tipo = "puesto";
    }
}

let edificios = document.getElementsByClassName('edificio');

for (edificio of edificios) {
   edificio.onclick = function () {

       if (opener.objPartida.saldo >= this.dataset.coste) {

           if (this.dataset.tipo === "atraccion") {

               alert("Atraccion");//instanciar el objeto
            } 
         
        } else {

            msg('error', 'No dispones de saldo suficiente para construir este edificio.'); 
        }
   } 
}