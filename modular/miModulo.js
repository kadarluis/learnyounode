var fs = require('fs');
var path = require('path');

module.exports = function miModulo(ruta, extension, callback) {
    fs.readdir(ruta, function(err, data) {
        if (err) {
            return callback(err);
        }
        var file = new Array();
        data.forEach(function(data) {
            if (path.extname(data) === '.' + extension) {
                file.push(data);
            }
        });
        callback(null, file);
    })
    
}
