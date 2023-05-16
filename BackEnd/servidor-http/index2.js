const http = require('http');
const PORT = 3030;
const path = require('path');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Mundo!')
})

server.listen(PORT,()=>{
    console.log(`Server ejecutandoce en puerto ${PORT}`)
})

//200 TODO OK
//400,500 TODO MAL

const ruta = path.resolve('servidor-http','index2.js');
console.log(ruta)