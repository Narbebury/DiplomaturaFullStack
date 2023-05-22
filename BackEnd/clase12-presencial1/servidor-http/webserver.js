const productos = [{codigo:'P001',nombre:'Laptop',importe:1200,stock:20},
                   {codigo:'P002',nombre:'Monitor',importe:250,stock:15},
                   {codigo:'P003',nombre:'Teclado',importe:50,stock:30},
                   {codigo:'P004',nombre:'Mouse',importe:20,stock:50},
                   {codigo:'P005',nombre:'Impresoras',importe:150,stock:10},
                   {codigo:'P006',nombre:'Altavoces',importe:80,stock:25},
                   {codigo:'P007',nombre:'Disco duro externo',importe:100,stock:40},
                   {codigo:'P008',nombre:'Memoria USB',importe:30,stock:50},
                   {codigo:'P009',nombre:'Cámara web',importe:60,stock:15},
                   {codigo:'P010',nombre:'Router',importe:70,stock:20}]


const http = require('http');
const port = 3008;

//Creo server
const server = http.createServer((req,res)=>{
    const url = req.url;
    if (url === "/") {
        res.writeHead(200,{"Content-Text":"text/plane; charset=utf-8"});
        res.end("Bienvenidos");
    }
    if (url ==="/contacto") {
        res.writeHead(200,{"Content-Text":"text/plane; charset=utf-8"});
        res.end("Escríbenos al siguiente Email: hola@webserver.com");
    }
   if (url ==="/productos") {
    res.writeHead(200,{"Content-Text":"text/plane; charset=utf-8"});
    res.end(JSON.stringify(productos));
   }
   else{
    res.writeHead(404,{"Content-Text":"text/plane; charset=utf-8"});
    res.end("No se ha encontrado la ruta ingresada.");
   }
})


server.listen(port,()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
});