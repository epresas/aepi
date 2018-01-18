class Edificio{
    constructor(celda, nombre){

        this._celda = celda;
        this._nombre = nombre;
    }
    get tipo(){
        return this._tipo;
    }
    iniciar(){
        let celdas = opener.document.getElementsByClassName('celda');
        
        for (let cadaCelda of celdas){

            if (cadaCelda.dataset.celda == this._celda) {
                
                cadaCelda.dataset.edificio = this._nombre;
            }
            
        }
    }
}

class Atraccion extends Edificio {
    constructor(celda, nombre, visitantes){
        super(celda,nombre);
        this._visitantes = visitantes;
        this._tipo = "atraccion";
    }
    get visitantes(){
        return this._visitantes;
    }
    
}

class Puesto extends Edificio {
    constructor(celda, nombre, ingresos){
        super(celda,nombre);
        this._ingresos = ingresos;
        this._tipo = "puesto";
    }
    get ingresos(){
        return this._ingresos;
    }
}

let edificios = document.getElementsByClassName('edificio');

for (edificio of edificios) {
   edificio.onclick = function () {

       if (opener.objPartida.saldo >= this.dataset.coste) {
           
           let celda = document.getElementById('numeroCelda').textContent;

           if (this.dataset.tipo === "atraccion") {

                let objAtraccion = new Atraccion( celda, this.dataset.nombre, this.dataset.visitantes );
                opener.objPartida.saldo -= this.dataset.coste;
                objAtraccion.iniciar();
                opener.objPartida.parque.push(objAtraccion);
                window.close();
                opener.msg('success','Nueva atracción edificada.');
                
                
            } 
            if (this.dataset.tipo === "puesto") {
                
                let objPuesto = new Puesto( celda, this.dataset.nombre, this.dataset.ingresos );
                opener.objPartida.saldo -= this.dataset.coste;
                opener.objPartida.parque.push(objPuesto);
                objPuesto.iniciar();
                window.close();
                opener.msg('success','Nuevo puesto edificado.');
           
            } 

         
        } else {

            msg('error', 'No dispones de saldo suficiente para construir este edificio.'); 
        }
   } 
}