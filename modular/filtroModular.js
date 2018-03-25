var miModulo = require("./miModulo.js")
var ruta = process.argv[2];
var extension = process.argv[3];

miModulo(ruta, extension, function(err, data) {
    if (err) {
        return console.error('Se presento un error: ' + err);
    }
        data.forEach(function(data) {
            console.log(data);
        });                                                                             
})

