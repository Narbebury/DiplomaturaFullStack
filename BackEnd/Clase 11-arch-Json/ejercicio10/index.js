const http = require('http');
const url = require('url');
const fs = require('fs')
const PORT = 3050;

//Lee el archivo frutas.json y almacena los datos en una variable
const frutas = JSON.parse(fs.readFileSync('frutas.json','utf-8'));
const server = http.createServer((req,res) =>{
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    const method = req.method;

    const html = `<html lang=""es>
    <meta chraset= "utf-8">
    <title>Manda-Fruta.com</title>
    <h1>Bienvenid@s</h1>
    <p>Les damos la bienveinda a la API de Manda-Fruta</p>
    </html>`

    //Ruta '/'
    if (path === '/' && method === 'GET') {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(html);
    }
    //Ruta '/frutas/all'
    else if (path === '/frutas/all' && method == 'GET') {
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(frutas));
    }
    //Ruta '/frutas/id/:id'
    else if (path.match(/^\/frutas\/id\/(\d+)$/i) && method === 'GET') {
        const id = path.split('/')[3];
        const fruta = frutas.find(fruta => fruta.id === parseInt(id));
        if (fruta) {
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(fruta));
        }else{
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Fruta no encontrada'}));
        }
    }
    //Ruta '/frutas/existe/:name'
    else if (path.match(/^\/frutas\/existe\/(\w+)$/i) && method === 'GET') {
        const name = path.split('/')[3];
        const fruta = frutas.some(fruta => fruta.nombre.toLowerCase()=== name.toLowerCase());
        if (fruta) {
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:`La fruta '${name}' sí existe`}));
        }else{
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:`La fruta '${name}' no existe`}));
        }
    }
    //Ruta '/fruta/nombre/:name'
    else if (path.match(/^\/frutas\/nombre\/(\w+)$/i) && method === 'GET') {
        const name = path.split('/')[3];
        const frutasNombre = frutas.filter(fruta => fruta.nombre.toLowerCase().includes()(name.toLocaleLowerCase()));
        if (frutasNombre.lenght > 0) {
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(frutasNombre));
        }else{
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:`No se encontraron frutas con el nombre '${name}'`}))
        }
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({message:'Ruta no encontrada'}));
    }
});