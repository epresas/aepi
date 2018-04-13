'use strict'

var fileSystem = require('fs')

console.log("comienza la ejecicion");
fileSystem.readFile('data.txt', function(err, filedata){
	if (err) throw err;
	fileSystem.writeFile('message.txt', filedata, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	   });
});

console.log("termina la ejecucion");

