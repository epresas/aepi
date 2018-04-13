'use strict'

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

// var User = require('./User');
// var Address = require('./Address');
var operations = require('./mongoOperations');

// Mongodb connection
mongoose.connect("mongodb://localhost:27017/test-aepi", function(err) {
    if (err){
        console.log("error")
    }
});
// END Mongodb conection

// Schema mongoose

// var Schema = mongoose.Schema;

// var usersSchema = new Schema({
//  name: {type: String, required: true, unique: true },
//  surname:String,
//  email:String,
//  password:String,
//  age: Number,
//  address:{type: mongoose.Schema.Types.ObjectId, ref: 'Address'},

// });
// usersSchema.plugin(mongoosePaginate);


// usersSchema.virtual('fullName').get(function () {
//     return this.name + ' ' + this.surname;
//   });

// usersSchema.statics.findByName = function (name, cb) {
//     this.find({ 
//         name:name
//     }, cb);
// }

// usersSchema.methods.sayHi = function () {
//     let hi = this.name + " say hi";
//     return hi;
//   }

// var User = mongoose.model('User', usersSchema);



// END Schema mongoose

// MONGOOSE PAGINATION
/*User.paginate({}, { page: 1, limit: 2 }, function(err, result) {
    // result.docs
    // result.total
    // result.limit - 10
    // result.page - 1
    // result.pages
    console.log(result)
  }); */

// CRUD

//CREATE
// function createUser(){
//     /**
//      *  Crea un usuario
//      */
//     // creamos un objeto User con los datos que queremos guardar
//     var user = new User();
//     user.name = "admin2";
//     user.email = "admin@admin.es";
//     user.password = "admin";
//     user.age = 15;


//     user.save(function(err){
//         if(err){
//             console.log("hay un error "+ err.message)
//         }else{
//             console.log("usuario insertado correctamente")
//         }
//     })
// }

// function createUserWithAddress(){
//     /**
//      *  Crea un usuario
//      */
//     // creamos un objeto User con los datos que queremos guardar
//     var user = new User();
//     user.name = "jose";
//     user.email = "admin@admin.es";
//     user.password = "admin";
//     user.age = 15;

//     var address = new Address();//instancia de objeto address
//     address.zip = 28900;
//     address.street_name = "some street same";
//     address.city = "Madrid"
//     //crea una direccion, luego se guarda y se asigna su id al usuario para relacionarlo
//     address.save(function(err, address){
//         user.address = address.id;
//         user.save(function(err){
//             if(err){
//                 console.log("hay un error "+ err.message)
//             }else{
//                 console.log("usuario insertado correctamente")
//             }
//         })
//     });

// }
// //FIND
// function findUsers(mensaje, callback){
//     /**
//      * Buscamos todos lo usuarios
//      */
//     console.log(mensaje)
//     User.find({}, function(err, user) {
//         if (err) throw err;
//         // Objeto con todos los usuarios qeu han coincidido con la busqueda
//         console.log(user);
//         callback()
//     });
// }
// findUsers("hola", function(){
//     console.log("acabo")
// })


// function findUserWithProyection(){
//     /**
//      * Buscamos los usuario que coincidan con el criterio de busqueda y usamos proyeccion para obtener solo el nombre
//      */
//     User.find({"name":"admin"},{"name":true}, function(err, user) {
//         if (err) throw err;
//         // object of all the users
//         console.log(user);
//     });
// }

// function findUserWithAddress(){
//     User.find({"name":"jose"},function (err, user){
//         console.log(user)
//     }).populate({ path: 'address'}) //hace un find en la coleccion Address con la referencia del path para concatenar el resltado
// }

// function findUserById(){
//     User.findById("5abf95f09f96311924f1416c", function(err, user) {
//     if (err) throw err;
//     console.log(user.fullName);
//     let hi = user.sayHi()
//     console.log(hi)
//     });
// }

// // QUERY HELPERS
// function findUserWhere(){
//     User.
//         find({ 'name': "admin2" }).
//         where('email').equals("admin@admin.es").
//         where('age').gt(10).lt(66).
//         limit(10).
//         sort('-name').
//         select('name occupation').
//         exec(function (err, res){
//             if (err) throw err;
//             console.log(res);
//         });
// }

// function findByUsername(){
//     User.findByName("admin", function (err, data){
//         console.log(data);
//     });
// }



// // UPDATE
// function findAndUpdate(){
//     User.findById("5abf95f09f96311924f1416c", function(err, user) {
//         if (err) throw err;
    
//         // change the users location
//         user.name = user.name+"1";
    
//         // save the user
//         user.save(function(err) {
//         if (err) throw err;
    
//         console.log('usuario actualizado correctamente"');
//         });
//     });
// }

// function findAndUpdate2(){
//     User.findOneAndUpdate({ name: 'admin' }, { username: 'admin11' }, function(err, user) {
//         if (err) throw err;
//         // Usuario actualizado
//         console.log(user);
//     });
// }

// function findAndUpdate3(){
//     User.update({"name": "new_admin1"}, {"name": "new_admin111"}, {multi: true}, function(err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// }

// //DELETE
// function deleteUser(){
//     User.findOneAndRemove({ name: 'admin' }, function(err) {
//         if (err) throw err;
//         // we have deleted the user
//         console.log('usuario eliminado');
//         });
// }
// END CRUD

operations.createUserWithAddress("edmundo","ed@ed.com","1234",33)
// findUserWhere()
// findUsers()
// findUserById()
// findAndUpdate()
// findAndUpdate2()
// findAndUpdate3()
// mongoose.connection.close()
