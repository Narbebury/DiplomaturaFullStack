//definicion del array
const paiseslatinos = ['Argentina','Paraguay','Chile', 'Uruguay', 'Bolivia'];
console.log(paiseslatinos[3]);
//metodo para saber la longitud
console.log(paiseslatinos.length);
//metodo para agregar al final del array
paiseslatinos.push('Brasil');
console.log(paiseslatinos[5]);
//metodo para agregar al principio del array
paiseslatinos.unshift('Ecuador');
console.log(paiseslatinos[0]);
//metodo para quitar al principio del array
paiseslatinos.shift();
console.log(paiseslatinos[0]);

//metodo para quitar al final del array
console.log('/metodo para quitar al final del array');
paiseslatinos.pop();
console.log(paiseslatinos[5]);
//test de const
paiseslatinos[2] = 'Francia';
console.log(paiseslatinos[2]);
//test  de metodo IndexOf
let posicion =paiseslatinos.indexOf('Uruguay');
console.log(posicion);
console.log( paiseslatinos.indexOf('Uruguay'));
let posicion2 = paiseslatinos.indexOf('España');
console.log(posicion2);
//test  de metodo includes
let resultado = paiseslatinos.includes('Uruguay');
console.log(resultado);
// test de metodo sort
// antes del sort
console.log(paiseslatinos);
paiseslatinos.sort();
//despues del sort
console.log(paiseslatinos);
//test de metodo reverse
paiseslatinos.reverse();
console.log(paiseslatinos);
// test de metodo concat (concatenacion)
const paiseseuropeos = ['Portugal','España', 'Italia'];
paiseslatinos.concat(paiseseuropeos);
console.log(paiseslatinos);
console.log(paiseseuropeos);
let paises = paiseslatinos.concat(paiseseuropeos);
console.log(paises);
console.log (paiseslatinos.concat(paiseseuropeos));
// metodo slice
let parcial = paises.slice(1,4);
console.log(parcial);
// metodo splice
console.log(paises);
paises.splice(1,1);
console.log(paises);
// i++ = > i = i + 1
//ciclos de iteracion
for (let i = 0; i < paises.length;i++)
{
  console.log(paises[i]);
}
console.log( '-----------------------------------------------------------');
// uso del break 
for (let i = 0; i < paises.length;i++)
{
  console.log(paises[i]);
   if (i == 4)
   {
      break;
   }
}
console.log( '-----------------------------------------------------------');
// uso del continue;
for (let i = 0; i < paises.length;i++)
{ if (paises[i] == 'Francia')
{
    continue;
}
  console.log(paises[i]);
}


let x = 0;
while (x <=3)
 {
     console.log(x);
    x = x + 1;
    break;
 }
 x= 0
 do {
    console.log(x);
    x = x + 1;

 } while (x<=3)

 // Estructura en memoria : objeto literal  --intellisense

 const Producto = {
    codigo: 123,
    nombre: "Notebook",
    importe: 110000,
    stock: 22,
    importefinal() {

      return ( this.importe * 1.21);
    }
 

 }

 console.log(Producto.nombre);
 console.log(Producto.importefinal());

 const productos = [ {   codigo: 123,
                        nombre: "Notebook",
                        importe: 110000,
                        stock: 22,
                        importefinal() {

                        return ( this.importe * 1.21);
                        }
                      },
                     { codigo: 124,
                      nombre: "Impresora",
                      importe: 80000,
                      stock: 0,
                      importefinal() {

                      return ( this.importe * 1.21);
                      }
                    }                                    
           
                      ];

console.log('Impresion sin for');
console.log(productos);
//-----------------------------------------------------------------------------------------------

console.log('Impresion con for');

for (let i = 0; i < productos.length;i++)
{
  console.log(productos[i]);
}

console.log('Impresion con for con seleccion de campo');
for (let i = 0; i < productos.length;i++)
{
   console.log(`Nombre del  producto: ${productos[i].nombre}`);
   console.log(`Stock del  producto: ${productos[i]?.stock || "sin stock"}`);
}

const agregarproducto = ()=> {
   const NuevoProducto = {
      codigo: 190,
      nombre: "mouse",
      importe: 1600,
      stock: 30,
   }
  productos.push(NuevoProducto)
//  console.clear;
  console.log(productos)
  console.table(productos)



}

const agregarproducto2 = (codigo,nombre,importe,stock )=> {
   const NuevoProducto = {
      codigo: codigo,
      nombre: nombre,
      importe: importe,
      stock: stock,
   }
  productos.push(NuevoProducto)
 // console.clear;
  console.log(productos)
  console.table(productos)



}
agregarproducto();
agregarproducto2(234, 'Monitor',150000,23);