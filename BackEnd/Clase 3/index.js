console.log("Hola mundo");

//Variables //en versiones viejas se usa let en nuevas se usa var
let nombreCompleto ="Joe McMillian";
let edad= 44;

let esCEO=true;
let esMenor = (45>50) //false
console.log(esMenor);

console.log(nombreCompleto)

//Constantes
const empresa= 'Pepe SA';
console.log(empresa)

//Funciones
function mostrarmiNombre()
{
    let nombre = "Sara";
    console.log(nombre);
    console.log("Mi nombre es",nombre);
}

mostrarmiNombre();

function mostrarmiNombre2(nombre)
{
    console.log("Mi nombre es",nombre);
}

function obtenerMaximo(num1,num2,num3)
{

    return Math.max(num1,num2,num3);
}

let nummax = obtenerMaximo(1,6,8);
console.log("El numero maximo es",nummax);
console.log("El numero maximo es",obtenerMaximo(1,10,8));

//Funciones Flechas
const obtenerMaximo5 = ()=>
{
    return Math.max(1,5,6);
}

console.log("El maximo es",obtenerMaximo5());

//Array
const arrayNumeros = [4,9,12,34];

const obtenerMaximoArray = array => 
{
    console.log("El maximo es",Math.max(...array));
}

obtenerMaximoArray (arrayNumeros);
