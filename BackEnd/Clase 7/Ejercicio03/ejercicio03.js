const productos = ["Monitor", "Teclado", "Mouse", "Auriculares",
"Altavoces", "Micrófono", "Webcam", "Disco Rígido", "SSD", "Tarjeta Gráfica", "Microprocesador", "Memoria RAM", "Fuente", "Fan Cooler",
"Motherboard"];

const productosEnVenta = [
    {id: 2000, nombre: "Monitor", importe: 743, stock: 45},
    {id: 2001, nombre: "Teclado", importe: 513, stock: 28},
    {id: 2002, nombre: "Mouse", importe: 842, stock: 18},
    {id: 2003, nombre: "Auriculares", importe: 147, stock: 64},
    {id: 2004, nombre: "Altavoces", importe: 30, stock: 10},
    {id: 2005, nombre: "Micrófono", importe: 562, stock: 72},
    {id: 2006, nombre: "Webcam", importe: 388, stock: 91},
    {id: 2007, nombre: "Disco Rígido", importe: 898, stock: 97},
    {id: 2008, nombre: "SSD", importe: 951, stock: 84},
    {id: 2009, nombre: "Tarjeta Gráfica", importe: 843, stock: 71},
    {id: 2010, nombre: "Microprocesador", importe: 684, stock: 51},
    {id: 2011, nombre: "Memoria RAM", importe: 824, stock: 59},
    {id: 2012, nombre: "Fuente", importe: 358, stock: 88},
    {id: 2013, nombre: "Fan Cooler", importe: 182, stock: 41},
    {id: 2014, nombre: "Motherboard", importe: 991, stock: 62}
    ];

    function iterarProductos(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
console.log("Array 1");
iterarProductos(productos);
console.log("\nArray 2")
iterarProductos(productosEnVenta);


// /*EJERCICIO 02*/
console.log("\nEJERCICIO 2");
const iterarPorStock = (arrayObjetos) => {
    for (let i = 0; i < arrayObjetos.length; i++) {
        if (arrayObjetos[i].stock>50) {
            console.log(arrayObjetos[i]);            
        }
    }
}
iterarPorStock(productosEnVenta);

// /*EJERCICIO 3*/
console.log("\nEJERCICIO 3");
const descartarProductos = (arrayObjetos) => {
    for (let i = 0; i < arrayObjetos.length; i++) {
        if (arrayObjetos[i].includes('ic')) {
            delete(arrayObjetos.includes('ic'))
        }else{
            console.log(arrayObjetos[i]);
        }
    }
}
descartarProductos(productos);

// /*EJERCICIO 4*/
console.log("\nEJERCICIO 4");
const descartarProductos2 = (arrayObjetos) => {
    for (let i = 0; i < arrayObjetos.length; i++) {
        if (arrayObjetos[i].nombre.includes('a')) {
            delete(arrayObjetos.includes('a'))
        }else{
            console.log(arrayObjetos[i]);
        }
    }
}

descartarProductos2(productosEnVenta);

const descartarProductos3 = (arrays) => {
    for (let i = 0; i < arrays.length; i++) {
        !arrays[i].nombre.includes('a') ? console.log(arrays[i]) : null;
     
    }
}

console.log("otro3");
descartarProductos3(productosEnVenta);

/*Usando filter */
console.log("Filter");
const resultado = productosEnVenta.filter( prod => !prod.nombre.includes('a'));
console.log(resultado);
const resultado2 = productosEnVenta.find(pro => pro.stock > 80);/*Solo devuelve un producto */
console.log(resultado2);