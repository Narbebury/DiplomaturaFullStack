const paisesLatinos = ['Argentina','Bolivia','Chile','Uruguay','Paraguay'];

console.log(paisesLatinos[0]);
console.log(paisesLatinos.length);//saber la longitud
console.log(paisesLatinos.push('Brasil'));//agregar al final
console.log(paisesLatinos.unshift('Ecuador'));//Agrega al principio
console.log(paisesLatinos[0]);
console.log(paisesLatinos.shift());//Quita lo que hay al principio del array
console.log(paisesLatinos[0]);
console.log(paisesLatinos.pop());//Quita lo que hay al final del array
console.log(paisesLatinos[5]);
//test de const
paisesLatinos[2] = 'Francia';
console.log(paisesLatinos[2]);

let posicion = paisesLatinos.indexOf('Uruguay');
console.log(posicion);
console.log(paisesLatinos.indexOf('Uruguay'));
let posicion2 = console.log(paisesLatinos.indexOf('España'));

let resultado = paisesLatinos.includes('Uruguay');
console.log(resultado);

console.log("antes del sort",paisesLatinos);

//Metodo sort
paisesLatinos.sort();
console.log(paisesLatinos);

//Reverse
paisesLatinos.reverse();
console.log("Reverse",paisesLatinos);

//Metodo concat (concatenacion)
const paisesEuropeos = ['Portugal','España','Italia'];
paisesLatinos.concat(paisesEuropeos);
console.log(paisesLatinos.concat(paisesEuropeos));

//Metodo slice
let parcial = paisesLatinos.concat(paisesEuropeos).slice(1,4);
console.log("usando slice",parcial);
let parcial2 = paisesLatinos.concat(paisesEuropeos);
parcial2.splice(1,1);
console.log("usando splice",parcial2);

