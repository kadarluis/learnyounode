var suma = 0;
// var l = (process.argv).length;
for (let i = 2; i < process.argv.length; i++) {
var x = Number(process.argv[i]);
suma += x;
}

console.log(suma);
