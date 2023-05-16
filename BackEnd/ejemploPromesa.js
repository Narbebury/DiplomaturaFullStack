const data = [{
    title:'Aprendiendo JavaScript',
    year:'2023',
    isbn:'979-8700179263',
    author:'Carlos Azaustre'
},{
    title:'React.js Práctico',
    year:'2023',
    isbn:'TBD',
    author:'Carlos azaustre'
},{
    title:'Clean JavaScript',
    year:'2023',
    isbn:'979-8567583319',
    author:'Miguel A. Gómez'
}];

//SINCRONIA
// console.log("SINCRONIA");
// function getData() {
//     setTimeout(()=>{
//         console.log(data);
//     },2000)
    
// }
// getData();

//PROMESAS
console.log("PROMESAS");
function getData2() {
    return new Promise((resolve,reject)=>{
        if(data.length === 0){
            reject(new Error('Data is empty'));
        }
        setTimeout(()=>{
            resolve(data);
        },2000)
    })   
}

//Then si se resuelve bien y catch si da error
getData2()
.then((Response)=>console.log(Response))
.catch((err)=>console.log(err.message))

//ASYNC - AWAIT -> el await reemplaza al .then y .catch del ejemplo anterior
//Es igual a lo de arriva pero mas legible
console.log("AWAIT");
async function fetchingData() {
    const books =  await getData2();
    console.log(books);    
}

fetchingData();