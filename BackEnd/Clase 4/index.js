const nombreCompleto = "Agustin"

/*
if (nombreCompleto !== '') 
{
    console.log(`Bienvenid@ : ${nombreCompleto}`);
}else{
    console.error()
}*/

//condicion verdadera AND &&
const nombre = "Jose Suarez";
const login= false
if (nombre !== '')
{
    console.log(`Bienvenido : ${nombre}`);
}
else{
    console.error(`No se reconoce el usuario, o no existe`)
}

if (nombre !== '' && login === false) {
    console.log(`Bienvenido : ${nombre}`)
}else{
    console.error(`No se reconoce el usuario, o no existe`)
}

//Condicion OR ||
if (nombre !== '' ||  login === true) {
    console.log(`Bienvenido : ${nombre}`)
}else{
    console.error(`No se reconoce el usuario, o no existe`)
}

//Operador ternario ?= if  : = else
nombre !== '' ? console.log(`Bienvenido : ${nombre}`)
              : console.error(`No se reconoce el usuario, o no existe`)

//Operador ternario en forma booleana
console.log("asda")
const resultado = nombre !== '' ? true : false;
console.log(resultado);

//SWITCH
let color = 'Rojo';

if (color == 'Rojo') {
    console.log("Es el color esperado");
}
else if (color == 'Blanco'){
    console.log("Este no es el color esperado");
}
else if (color =='Azul'){
    console.log("Este no es el color esperado");
}
else{
    console.log("Error al ingresar un color");
}


switch (color) {
    case 'Rojo':
        console.log("Es el color esperado");
        break;
    
    case 'Blanco':
        console.warn("Este no es el color esperado");
        break;
    
    case 'Azul':
        console.warn("Este no es el color esperado");

    default:
        console.error("Error al ingresar un color");
        break;
}


//Operador logico and &&
(color == 'Rojo') && console.log("Es el color esperado");

const colores = color || [];
console.log(colores);

//Metodos de conversion
console.log(nombre.toUpperCase());
//Minuscula
console.log(nombre.toLocaleLowerCase());
//Quito espacios
console.log(nombre.trim())
//Busca la z
console.log(nombre.includes('z'))//devuelvo true si encuentra la z en el string
//Encadenamiento de metodos
console.log(nombre.trim().toUpperCase())