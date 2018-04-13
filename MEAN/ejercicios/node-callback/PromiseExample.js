var fs = require("fs")


var promise = new Promise(function(resolve, reject) {
    fs.readFile("data.txt", function(err, buffer) {
        if (err) {
            reject(err);
            return;
        }
        console.log("se ha ejecutado con exito")
        resolve(buffer);
    });
});

promise.then(
    function(buffer) {
        console.log("FILE CONTENTS: ", buffer.toString());
    },
    function(err) {
        console.log("FILE READ ERROR", err);
    }
);
