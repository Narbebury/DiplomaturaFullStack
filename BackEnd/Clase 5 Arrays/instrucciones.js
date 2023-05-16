// Tipos de instrucciones
// 1) Secuenciales
// 2) Condicionales o de desición -> if
// 3) ciclos, iterativas y de repeticion -> while / for
const paisesLatinos = ['Argentina','Bolivia','Chile','Uruguay','Paraguay'];
const paisesEuropeos = ['Portugal','España','Italia'];
const paises = paisesLatinos.concat(paisesEuropeos);

for (let i = 0; i < paisesLatinos.length; i++) {
    console.log(paises[i]);//Paises concatenados
}

let x = 0;

while (x <=3) {
    console.log(x);
    x++;
}

x = 0;
do {
    console.log(x);
    x++;
    //break;
} while (x <= 3);