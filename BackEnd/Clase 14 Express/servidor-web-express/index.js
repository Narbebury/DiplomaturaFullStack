const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');

//Defino la ruta
// app.get('/',(req,res)=>{
//     res.send('Server Express');
// });

const PORT= 3000;

app.use(express.static(path.join(__dirname,'chivilflix-main')));
console.log(path.join(__dirname, "chivilflix-main"));

app.get('/',function(req,res){
    res.send(`<h1>PRIMER SERVIDOR EXPRESS</h1>`);
});

app.listen(PORT,() =>{ console.log(`oyendo en puerto ${PORT}`);});
