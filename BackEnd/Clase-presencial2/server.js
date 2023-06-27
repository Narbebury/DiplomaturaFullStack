const { verify } = require('crypto');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const PORT = process.env.PORT || 3008;
const secretKey = process.env.SECRET_KEY;
const userToValidate = {username: "Agustin", password: "clave1"};


app.use(express.json());

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    console.log(`Datos recibidos: Usuario: ${username}, Password: ${password}`);

    //Si nuestras credenciales son validas mandamos el token
    if (username === userToValidate.username && password === userToValidate.password) {
        const token = jwt.sign({username: username},secretKey,{expiresIn:"1h"});
        console.log(token);
        res.json({token: token});
    }else{
        res.status(401).json({error:"Credenciales invalidas"});
    }
})

function verifyToken(req,res,next) {
    
    const token = req.headers["autorization"] || null;

    if (token) {
        jwt.verify(token,secretKey,(err,decode) => {
            err? res.status(401).json({error:"Token invalido"}) : req.decode = decode
            next();
        })
    }else{
        res.status(401).json({error:"Token no proporcionado"})
    }
}




app.get('/rutaprotegida',verifyToken,(req,res,next)=>{
    const username = req.decode.username;
    res.json({mensaje:`Hola ${username}! Esta ruta esta protegida` });
    next();
})

app.listen(PORT,()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})