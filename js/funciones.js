//Funcion declarada, se usa la palabra function

function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

//Invocacion de funciones
estoEsUnaFuncion();

//Funcion que devuelve valor, simepre usamos return
function devuelvoValor(params) {
    return "La funcion devuelve una cadena de texto";
}

console.log(devuelvoValor());

//Funcion que recive valores
function saludar(nombre,edad) {
    console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Agustin",25);

//La funcion declarada se puede ejecutar antes de ser declarada en si misma
funcionDeclarada();
//Funciones declaradas VS Funciones expresadas
function funcionDeclarada() {
    console.log("Esto es una funcion declarada")
}

//Funcion anónima (no tiene nombre y se la asignamos a una variable)
const funcionExpresada = function (){/*NO SE PUEDE ACCEDER ANTES DE INICIALIZARLA PORQUE ESTA DEFINIDA EN UNA VARIABLE*/
    console.log("Esto es una funcion expresada");
}

funcionExpresada();

//Funcion flecha (Tengo que almacenarla en una variable para poder llamarla y tampoco necesitan de la palabra function)
let saludo2 = nombre => {'saludos '+ nombre};
let suma = (a,b) => a+b;//Al sumar dos numero o parametros si necesito el parentesis

let obj = () => ({nombre: 'Bob',edad:20});//Si no tiene parametros el parentess va vacio