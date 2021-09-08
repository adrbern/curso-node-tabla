const { crearArchivo } = require('./helpers/multiplicador');
const colors = require('colors')
const argv = require('./config/yargs');

console.clear();

const base = 4;
/* PARAMETROS a las bravas
console.log(process.argv);
const [,,paramBase] = process.argv;
console.log(`parametro base: ${paramBase}`);
const [,newBase = 5 ] = (paramBase || '').split("=");
console.log(`new base: ${newBase}`);
*/

console.log(argv);
console.log(`base en argv: ${argv.base}`);
console.log(`listar en argv: ${argv.listar}`);
console.log(`hasta en argv: ${argv.hasta}`);
/*
try {
    const { fileName, tabla } = crearArchivo(argv.base);
    console.log(crearArchivo(argv.base))
    console.log(fileName);
    console.log(`${fileName} creado!!!`);
    if (tabla) {
        console.log(tabla);
    }
} catch(e) {
    console.log(`ERROR: ${e}`);
}
*/



crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(({ fileName, tabla }) => {
        console.log(`${fileName.rainbow} creado!!!`);
        if (tabla) {
            console.log(tabla);
        }
    }).catch((e) => {
        console.log(`ERROR: ${e}`);
    })