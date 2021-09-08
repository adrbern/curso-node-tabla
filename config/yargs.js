const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    }).check((argv) => {
        if (isNaN(argv.base)) {
            throw 'la base tiene que ser un numero';
        }

        return true;
    })
    .option('l', {
        alias: "listar",
        type: "boolean",
        describe: 'muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Este es el numero hasta donde quieres la tabla',
    })
    .argv;

   module.exports = argv;