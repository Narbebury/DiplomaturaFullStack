const express = require('express');
const { MongoCLient } = require('mongodb');

const app = express();
const port = 3000;

//Middleware para parsear JSON (configuraciones,validaciones, cosas a ejecutar)
app.use(express.json());//Habilito la libreria de json

//Conexion a la base de datos
const uri = 'mongodb+srv://agusn11:qhMAcEEDxkvxZFfp@nosqldatabase.frdzy0d.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoCLient(uri,{useNewUrlParser: true,useUnifiedTopology: true});

app.get('/frutas')
//Ruta
app.get('/',(req,res)=>{
    res.send('¡API en funcionamiento!');
});

app.post('/frutas', async (req,res)=>{
    try{
        const nuevaFruta = req.body;
        if (nuevaFruta === undefined) {
            res.status(400).send('Error en el formato de datos');
        }
        await client.connect();//conecta a la base que esta en el cluster
        const frutaId = parseInt(req.params.id) || 0;
        const db = client.db('Frutas');//Abro la base de datos
        const frutas = await db.collection.insertOne(nuevaFruta);
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