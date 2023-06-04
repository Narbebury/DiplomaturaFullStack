const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'trailerflix')));

app.get('/', (req, res) => {
    res.send('Hola MUndo');
});

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la pagina que buscas no existe');
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});


