const IVA = 1.21;

const producto =[ {
    codigo: 123,
    nombre: 'Notebook 14 pulgadas FHD',
    importe: 115000.00,
    stock: 22,
    //Agrego una funcion
    importeFinal(){
        return parseFloat(this.importe * IVA);
    }
}]



const agregarproducto = (codigo,nombre,importe,stock) => {
    const nuevoProducto = {codigo:codigo, nombre: nombre,importe:importe,stock:stock}
    producto.push(nuevoProducto);

}
agregarproducto(456,'Mouse',2600,0);

for (let i = 0; i < producto.length; i++) {
    console.log(`Producto `,i +1);
    console.log(`Codigo: ${producto[i].codigo }`);
    console.log(`Nombre: ${producto[i].nombre}`);
    console.log(`importe: ${producto[i].importe}`);
    console.log(`Stock: ${producto[i]?.stock || "Sin Stock"}\n`);
}


//console.table(producto);

// console.log("\nAgrego producto");
// const agregarproducto = () => {
//     const nuevoProducto = {codigo:190, nombre: 'Monitor',importe:160000,stock:22}
//     producto.push(nuevoProducto);
// }
// agregarproducto();//Llamo a la funcion agregarproducto para que funcione

// console.clear();
// console.log(producto);
// console.table(producto);