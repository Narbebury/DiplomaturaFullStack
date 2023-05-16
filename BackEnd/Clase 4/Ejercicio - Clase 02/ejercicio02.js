//Primera forma para hacer la funcion
function poseeLetraU(nombre) {
    console.log(nombre.toLowerCase().includes('u'));
}
poseeLetraU("Agustin");

//Segunda forma de funcion
function poseeLetraU2(nombre2) {
    return (nombre2.toLowerCase().includes('u'));
}
console.log("Resultado de posee letraU2",poseeLetraU2("Agustin"));

//Funcion flecha
const poseeLetraU3 = (nombre3) => nombre3.toLowerCase().includes('u') ? true : false;
console.log(poseeLetraU3("Agustin"));