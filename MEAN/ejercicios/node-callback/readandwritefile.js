var fileSystem = require("fs");

function readandwrite(pathread, pathwrite, callback){
    fileSystem.readFile(pathread, function(error, filedata) {
        if (error){
            return console.error(error);
        }
        content = filedata.toString();
        fileSystem.writeFile(pathwrite,content, function(error, filedata) {
            if (error){
                return console.error(error);
            }
            console.log("done");
            callback()
        });

    });
}
module.exports = readandwrite;

