/*
// Funcion --

    function suma(a,b){
        return a+b;
    }

    console.log(suma(2,3));


// Funcion fatArrow -- 

    const suma = (a,b) => {
        return a+b
    }

// Funcion fatArrow simplificada -- 

    const suma = (a,b) => a+b;

    console.log(suma(2,3));


 const usuario = {
    nombre: 'Diego',
    apellidoP: 'Diaz',
    edad: 20,
    direccion: {
        pais: 'Mexico',
        ciudad: 'Qro',
        calle: 'Calle 1',
    },
    amigos: ['Maya', 'Fer'],
    status: true,
    enviaCorreo: enviarCorr=()=> 'Enviando... '
}

console.log(usuario.enviaCorreo()); 

// Trabajo con el DOM 

const titulo = document.createElement('h1');
titulo.innerText = 'Soy un titulo creado con JS';
document.body.append(titulo);

const boton = document.createElement('button');
boton.innerText = 'Presioname';
document.body.append(boton);

boton.addEventListener('click',function(){
    //console.log('Evento click ejecutado');
    titulo.innerText = 'Evento click ejecutado';
    alert('Exito')
})


//----------------------------------------------*/
/*
const nombres= ["Diego","Maya","Pato"];

//Funcion find: Ubicar elemento en un arreglo 
const resultado = nombres.find(function(nombre){
    if(nombre === 'Diego'){    
        return nombre;
    }
})

console.log(resultado);


//Funcion filter: Recorre el arreglo filtrado resultados

const resultdo = nombres.filter(function(nombre){
    if(nombre != 'Diego'){    
        return nombre;
    }
})

console.log(nombres);
console.log(resultdo);



// funcion Concat:
const edades= [78,89,12,8,10,15];
console.log(nombres.concat(edades));
//Spread Operator
console.log([...nombres, ...edades]);



//import {suma,resta} from './calculadora.js';
import * as calc from './calculadora.js';


console.log(suma(45,54));
console.log(resta(45,54));

*/