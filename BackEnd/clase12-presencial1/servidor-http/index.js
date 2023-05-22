const http = require('http');
const port = 3030;

//Creo server                recibe una función
const server = http.createServer((req,res)=>{
    //req ->requeriminetos = que sucede si solicita algo el usuario
    req.url === "/";

    //res-> metodos de estados
    //res.statusCode();//
    res.writeHead(200,{"Content-Text":"text/plane; charset=utf-8"});//Cabecera, con writeHead puedo ahorrarme de escribir statusCode, ya que seria el primer parametro que recibe
    //"text/plane" es la forma en la cual se va a presentar
    res.end("Bienvenido");//permite finalizar el procedimiento y enviar una respuesta
})

//Le digo al server donde escuchar
server.listen(port,()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
});