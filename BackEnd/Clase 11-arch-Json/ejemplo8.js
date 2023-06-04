function realizarCalculo(numA,numB,salida) {
    salida(numA * numB);
}

realizarCalculo(21,75,console.log);

/* */
function calculo2(numc,numa) {
    return numc * numa;
}

console.log(calculo2(21,75));

productos =[
    {id:1,nombre:'Notebook 14" FHD',importe:11500},
    {id:2,nombre:'Tabler PAD 9.7"',importe:195000},
    {id:3,nombre:'Macbook Air 13"',importe:745000},
    {id:4,nombre:'Tablet DROID 10.1"',importe:165000},
]

const resultado = productos.find(producto => producto.id === 2)
if (resultado !== 'undefined') {
    console.table(resultado);
}
console.log("forEach")
productos.forEach(product =>{
    console.table(product)
})

paises = ['Argentina','Brasil','Portugal','Chile'];
const res = paises.some(pais => pais ==='Argentina');
if (res == true) {
    console.log("Se encontro el pais buscado");
}

console.log("EVERY");
const mayor100mil = productos.every(producto => producto.importe > 100_000)
console.log(mayor100mil);

const numeros = [2,4,6,8];
const sonPares = numeros.every(numero => numero % 2 === 0);
console.log(sonPares);

/*MAP */
console.log("MAP")
const numeros2 = [2,4,6,8,10];
const numeros2A = numeros2.map(num => num*2);
console.log(numeros2A)

/*MAP PARA PRODUCTOS */
console.log('Map, Productos mayusculas');
const productosMayusculas = productos.map(producto =>{
    return{
        id:producto.id,
        nombre:producto.nombre.toUpperCase(),
        importe: producto.importe,
    }
})
console.table(productosMayusculas);

/*Reduce*/
console.log('Reduce');
const carrito = [{id:1, nombre:'Notebook 14" FHD',precioUnitario:115000,cantidad:1},
                {id:4,nombre:'Tablet DROID 10.1"',precioUnitario:165000,cantidad:1},
                {id:5,nombre:'Smartwatch 1.8" black',precioTotal:22500,cantidad:2}]

const saldoAfavor = -10500;
const precioTotal = carrito.reduce((acumulado,producto)=>
    acumulado + (producto.precioUnitario * producto.cantidad),saldoAfavor)
    console.log("Total del carrito = " + precioTotal.toFixed(2))

/*SORT*/
paises.sort();
console.log('Sort:',paises);
paises.reverse();
console.log('Reverse',paises);
paises.sort().reverse();
console.log('Sort + Reverse',paises);

/*FLAT*/
//Sirve para juntar los 2 arrays
console.log("FLAT");
const productos2 = [{id:1,nombre:'Notebook 14" FHD',importe:115000,categoria:'Portatil'},
                    {id:2,nombre:'Tablet PAD 9.7"',importe:195000,categoria:'Tablet'},
                    {id:3,nombre:'Macbook Air 13',importe:745000,categoria:'Portatil'},
                    {id:4,nombre:'Tablet DROID 10.1',importe:165000,categoria:'Tablet'},
                    {id:5,nombre:'Smartwatch 1.8" black',importe:22500,categoria:'Relojes'},
                    {id:6,nombre:'Smartwatch 2" red',importe:24200,categoria:'Relojes'}];

const nuevosProductos = [{id:7,nombre:'Tablet DROID 7"',importe:110500,categoria:'Tablet'},
                         {id:8,nombre:'Smartwatch 1.5" white',importe:22500,categoria:'Relojes'}];

const productosAplanados = [productos2,nuevosProductos].flat();
console.table(productosAplanados);


