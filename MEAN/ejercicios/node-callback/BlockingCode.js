var fileSystem = require("fs");

console.log("comienza la ejecución");

var filedata = fileSystem.readFileSync('data.txt');

console.log(filedata.toString());

console.log ("El programa ha finalizado!");