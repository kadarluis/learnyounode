var fs = require('fs');
var path = require ('path');
var ruta = process.argv[2];

fs.readdir(ruta, function (err, data) {
    data.forEach(function(data) {
        ext = path.extname(data);
        if ("." + process.argv[3] === ext) {
            console.log(data);
        }                
    })
});



