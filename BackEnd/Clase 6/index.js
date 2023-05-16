//Objeto literal
const IVA = 1.21;

const Producto = {
    codigo: 123,
    nombre: 'Notebook 14 pulgadas FHD',
    importe: 115000.00,
    stock: 22,
    //Agrego una funcion
    importeFinal(){
        return parseFloat(this.importe * IVA);
    }
}

//Como hay que ingresar a cada una parte del objeto
console.log(Producto.codigo);                               //Se usa parentesis cuando es funcion
console.log('Nombre:',Producto.nombre,'\nImporte:',Producto.importeFinal(),'\nStock:',Producto.stock);

//Array de objetos literales (Se escribe con minusculas no con mayusculas como el objeto literal)
const producto2 = [
    {id:1,nombre:'Notebook 14 FHD',importe:115000,stock:25},
    {id:2,nombre:'Tablet PAD 9.7',importe:195000,stock:19},
    //{id:3,nombre:'Macbook Air 13',importe:745000,discontinuo: TRUE},
    {id:4,nombre:'Tablet DROID 10.1',importe:165000,},
]

const producto = [
    {    codigo: 123,
        nombre: 'Notebook 14 pulgadas FHD',
        importe: 115000.00,
        stock: 22,
        //Agrego una funcion
        importeFinal(){
            return parseFloat(this.importe * IVA);
        }
    },
    {   codigo: 456,
        nombre: 'Impresora',
        importe: 80000.00,
        stock: 20,
        //Agrego una funcion
        importeFinal(){
            return parseFloat(this.importe * IVA);
        }
    },
    {   codigo: 789,
        nombre: 'Impresora 2',
        importe: 850000.00,
        stock: 0,
        //Agrego una funcion
        importeFinal(){
            return parseFloat(this.importe * IVA);
        }
    },
]
console.log("Array de objeto literal")
console.log(producto)

console.log("\nArray de objeto literal Recorrido con ciclo for")
for (let i = 0; i < producto.length; i++) {
    console.log(producto[i]);
}

console.log("\nImpresion con for con detalle");
for (let i = 0; i < producto.length; i++) {
    console.log(`Nombre del producto: ${producto[i].nombre}`);
    console.log(`Stock del producto: ${producto[i]?.stock || "Sin Stock"}\n`);//Muestro el stock cuando es disinto a 0
}

console.log("\nAgrego producto");
const agregarproducto = () => {
    const nuevoProducto = {codigo:190, nombre: 'Monitor',importe:160000,stock:22}
    producto.push(nuevoProducto);
}
agregarproducto();//Llamo a la funcion agregarproducto para que funcione

console.clear();
console.log(producto);
console.table(producto);

//Otra forma de agregar producto
const agregarproducto2 = (codigo,nombre,importe,stock) => {
    const nuevoProducto = {codigo:codigo, nombre: nombre,importe:importe,stock:stock}
    producto.push(nuevoProducto);
}
agregarproducto2(987,'Mouse',150,33);//Llamo a la funcion agregarproducto para que funcione

console.clear();
console.log(producto);
console.table(producto);