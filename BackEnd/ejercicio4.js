const productos = ["Monitor","Teclado","Mouse","Webcam","SSD"];
const otrosProds = ["Trackball", "Monitor","iPad","NAS","M.2"];

let pos = "Teclado"

// const retornarTeclado = (pos) => {
//     productos.find(elemento => elemento == pos)
// }
// console.log(retornarTeclado);
const retornarTeclado = (pos) =>{
    productos.find(elementos => elementos === pos);
}

console.log(retornarTeclado)
