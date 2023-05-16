function MostrarmiNombre()
{   var nombre = "Sara";
    console.log(nombre);
    console.log( "Mi nombre es ", nombre);

}

function MostrarmiNombre2(nombre)
{
    console.log( "Mi nombre es ", nombre);
}

function obtenerMaximo(num1,num2,num3)
{
    return Math.max(num1,num2,num3);
}
const obtenerMaximo2 = function () {  console.log( "El maximo2 es ",Math.max(5,9,3))  };
obtenerMaximo2();
const obtenerMaximo3 = function (num1,num2,num3) { 
    console.log( "El maximo3 es ",Math.max(num1,num2,num3)) }; 
const obtenerMaximof =  ()=> {  console.log( "El maximof es ",Math.max(5,9,3))  };
obtenerMaximof();
const arrayNumeros = [4,9,12,34];
const obtenerMaximofa = array => {
    console.log( "El maximofa es ",Math.max(...array));
}
obtenerMaximofa(arrayNumeros);
const obtenerMaximofar = array => {
    return ( Math.max(...array));
}
console.log("El resultado es ", obtenerMaximofar(arrayNumeros));

console.log("Hola, Mundo!");
let nombre = "Pepe";
console.log(nombre);
let numero = 44;
console.log(numero);
let esMasGrande = true;
console.log(esMasGrande);
const empresa = "Pepe SA";
console.log(empresa);

 MostrarmiNombre();
 MostrarmiNombre2(nombre);
 let nummax = obtenerMaximo(1,6,8);
 console.log("El numero maximo es ",nummax);
 console.log("El numero maximo es ",obtenerMaximo(1,10,8));
 console.log(`El resultado : ${obtenerMaximo(1,10,8)}`);

obtenerMaximo3(12,30,45);
const nombrecompleto = 'Juan Cruz';
const login = true;
if (nombrecompleto !== '' )
   {
     console.log(`Bienvenido : ${nombrecompleto}`);
   }
else
   {
     console.error('No se reconoce el usuario, o no  existe');   

   }
   nombrecompleto !== '' ?  console.log(`Bienvenido : ${nombrecompleto}`)
                         :  console.error('No se reconoce el usuario, o no  existe');
   const salida = nombrecompleto !== '' ? true : false;
   console.log(salida);

   nombrecompleto !== '' &&  console.log(`Bienvenido con AND  : ${nombrecompleto}`);
 

   if (nombrecompleto !== '' &&  login === false )
   {
    console.log(`Bienvenido : ${nombrecompleto}`);

   }
   else{

    console.error('No se reconoce el usuario, o no  existe');  
   }
   if (nombrecompleto !== '' ||  login === false )
   {
    console.log(`Bienvenido : ${nombrecompleto}`);

   }
   else{

    console.error('No se reconoce el usuario, o no  existe');  
   }
   console.log(nombrecompleto.toUpperCase() );
   console.log(nombrecompleto.toLowerCase() );
   console.log(nombrecompleto.trim());
   console.log(nombrecompleto.includes('z'));
   console.log(nombrecompleto.includes('p'));
   console.log(nombrecompleto.trim().toUpperCase());
   let color = 'Rojo';

   if  ( color == 'Rojo' )
    {
        console.log ("Este es el color que buscaba");

    }
    else if ( color == 'Blanco' )
    {

        console.log ("Este no es el color esperado");
    }
    else if (color == 'Azul')
     {

        console.log ("Este no es el color esperado");
     }

     else
     {
        console.log ("Se produjo un error");   
     }

     switch(color){
            
       case 'Rojo' : console.log ("Este es el color que buscaba");
       break;
       case 'Blanco' : console.warn("Este no es el color esperado");
       break;
       case 'Azul' : console.warn("Este no es el color esperado");
       break;
       default:
        console.error ("Se produjo un error");   
     }

     const colores =  color || [];
     console.log(colores);

     //const poseeLetraU =(nombre) => nombre.toLowerCase().includes('u') ? true : false;

     //console.log(poseeLetraU("Laura"));
    // 1era forma de funcion
     function poseeLetraU2(nombre)
     {
        console.log( " El resultado es " ,nombre.toLowerCase().includes('u'));
     }
     //llamo a la primer forma
     poseeLetraU2("Laura");
     // 2da forma de funcion ( return)
     function poseeLetraU3(nombre)
     {
         return (nombre.toLowerCase().includes('u'));
     }
      // a la segunda forma
     console.log( "resultado de poseeLetraU3", poseeLetraU3("Laura"));

     // la funcion flecha

    const poseeLetraU =(nombre) => nombre.toLowerCase().includes('u') ? true : false;
     //Llamo  a la funcion flecha
    console.log( poseeLetraU("Laura"));