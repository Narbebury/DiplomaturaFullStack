const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

//Middleware para parsear JSON (configuraciones,validaciones, cosas a ejecutar)
app.use(express.json());//Habilito la libreria de json

//Conexion a la base de datos
const uri = 'mongodb+srv://agusn11:qhMAcEEDxkvxZFfp@nosqldatabase.frdzy0d.mongodb.net/';
const client = new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true});

app.get('/frutas')
//Ruta
app.get('/',(req,res)=>{
    res.send('¡API en funcionamiento!');
});

app.get('/frutas/:id', async (req,res)=>{
    try{
        await client.connect();//conecta a la base que esta en el cluster
        const frutaId = parseInt(req.params.id) || 0;
        const db = client.db('frutas1');//Abro la base de datos
        const frutas = await db.collection('frutas').findOne({id:frutaId});//hago un await para guardar la coleccion y las frutas en un array
        res.json(frutas);//meto toda la info en un archivo json
    }
    catch (error){
        console.error('Error al obtener las frutas',error);
        res.status(500).json({error:'Error del servidor'});
    }
    finally{
        await client.close();
    }
});

//Inicializacion del server
app.listen(port,()=>{
    console.log('Servidor API corriendo en server',port);
})