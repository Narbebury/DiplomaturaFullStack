const os = require('os');
const path = require('path');

console.log('Sistema operativo: ' + os.platform());
console.log('version del sistema operativo: ' + os.release());
console.log('memoria total:' + os.totalmem() + 'bytes');
console.log('Memoria libre: ' + os.freemem() + 'bytes');
console.log('arquitectura CPU: ' + os.arch());
console.log('Numero de procesadores lógicos: ' + os.cpus().length);
os.cpus().forEach(cpu => {
    console.log('Nombre: ' + cpu.model);
    console.log('Núcleos: ' + cpu.cores);
});

const ruta = path.resolve('servidor-http','index.js');
console.log(ruta)

//Muestra direccion del index
const info = path.parse(ruta);
console.log(info);
console.log(__dirname);