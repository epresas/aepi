var readandwrite = require('./readandwritefile');

console.log("empieza");
readandwrite("data.txt", "message.txt", function(){
    console.log("fichero creado");
});
console.log("acaba");