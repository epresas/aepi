En este proyecto tenemos 2 programas para ver la diferencia entre un codigo bloqueante y no bloqueante.

En ambos vamos a leer un archivo que contiene 3 líneas y las vamos a imprimir. Para ello usaremos el modulo fs (es nativo de nodejs, no hace falta instalarlo) esto nos permite hacer operaciones sobre ficheros en nuestro sistema

- BlockingCode.js: node BlockingCode.js
Esto es un ejemplo de código bloqueante, quiere decir que el tiempo que tarde en acceder al archivo y leerlo, el código va a estar bloqueado y no va a continuar hasta que termine. Si lo ejecutamos el resultado es el siguiente:
    comienza la ejecución
    Hola!
    esto es una linea!
    esto es otra linea!
    El programa ha finalizado!

Como vemos el código se ha ejecutado tal y como se esperaba una linea debajo de otra, osea de manera síncrona. Este código es muy fácil de leer, pero en node podemos hacerlo de una manera mucho mas eficiente sin tener que esperar a que lea el archivo.

- NonBlockingCode.js: node NonBlockingCode.js
Esto es un ejemplo de código no bloqueante. En esta ocasión el orden de ejecución no va a ser sincrono, será asincrono.

comienza la ejecución
haciendo cualquier otra cosa mientras lee el archivo...... 
El programa ha finalizado!
Hola!
esto es una linea!
esto es otra linea!

Igual que pasaba antes va a tardar un tiempo en acceder y leer el archivo, ese tiempo no se va a quedar bloqueada la ejecución sino que va a continuar y una vez que consiga el contenido del archivo lo va a imprimir. Por eso cambia todo el orden. Esto es posible gracias a las funciones call back. 

- Una función callback es una función que le pasamos otra funcion como parametro, para que cuando acabe invoque a su callback

Vamos a ejecutar: node CallBackExample.js Simplemente es un código que va a realizar una suma, pero a partir de un callback.
Primero estamos difiniendo una function llamada suma y tiene 3 argumentos: numero_uno, numero_dos y callback. Esto paramentro callback es un función que lo único que hace es imprimir el resultado calculado en la función.

- Uno de los mayores problemas a la hora de usar funciones callback, es el famoso callbackhell, de momento hemos con solo un callback queda un código bastante legible, pero y si tuviesemos que añadir muchos callbacks dentro de un callback? echad un ojo a este código:
    
    fs.readdir(source, function (err, files) {
        if (err) {
        console.log('Error finding files: ' + err)
        } else {
        files.forEach(function (filename, fileIndex) {
            console.log(filename)
            gm(source + filename).size(function (err, values) {
            if (err) {
                console.log('Error identifying file size: ' + err)
            } else {
                console.log(filename + ' : ' + values)
                aspect = (values.width / values.height)
                widths.forEach(function (width, widthIndex) {
                height = Math.round(width / aspect)
                console.log('resizing ' + filename + 'to ' + height + 'x' + height)
                this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
                    if (err) console.log('Error writing file: ' + err)
                })
                }.bind(this))
            }
            })
        })
        }
    })


- Una promesa es un objeto que nos va a devolver un resultado cuando una operación haya finalizado. Aparte de hacer el código mucho mas claro nos aporta mas control sobre las ejecuciones asincronas. Ejecutemos node PromiseExample.js. A priori nos puede parecer que tiene incluso mas código pero esto nos permitirá tener codigo mucho mas estructurado
