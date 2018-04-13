class User{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    diHola(){
        console.log(this.nombre + " " + this.apellido);
    }
}

var jose = new User("jose", "nunez");
console.log(jose.apellido)