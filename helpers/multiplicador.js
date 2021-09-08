const fs = require('fs');
const colors = require('colors')

const _multiplicador = (base, hasta) => {
    let i = 1;
    let salida= '';

    const condition = hasta
        ? (i <= 10) || ((i * base) <= hasta)
        : (i <= 10);
    while(hasta
        ? (i <= 10) && ((i * base) <= hasta)
        : (i <= 10)) {

        salida += `${base} * ${i} -> ${i * base}\n`;
        i++;
    }

    return salida;
}

const crearArchivo = async (base = 5, listar, hasta) => {
    const fileName = `tabla-${base}.txt`;

    if (listar) {
        console.log('--------------------------------'.green);
        console.log(` Tabla del ${base}`);
        console.log('--------------------------------'.green);    
    }

    const tabla = _multiplicador(base, hasta);
    fs.writeFileSync(`./salida/${fileName}`, tabla);

    return {
        fileName,
        tabla: listar ? tabla: null
    };
};

module.exports = {
    crearArchivo
};