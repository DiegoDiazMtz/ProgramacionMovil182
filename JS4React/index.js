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


//----------------------------------------------

// Trabajo con Arreglos 
const nombres = ['Diego', 'Isa', 'Pablo', 'Juan Luis']
 for (let i = 0 ; i< nombres.length; i++){
     const elemento = nombres[i]
     console.log(elemento)
 }

 nombres.forEach(function (nombre){
     console.log(nombre)
 })

 
// FUNCION MAP: Permite generar copia de un Array
 const array2 = nombres.map(function (nombre){
     console.log(nombre)
    return nombre
 })

 console.log(nombres)
 console.log(array2)

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

/*/Ejemplo cotidiano
const ul = document.createElement('ul')

let datos = fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response){
                console.log("Carga de datos completada")
                return response.json()
            }).then(function (data){
                console.log(data)
                data.forEach(function(post){
                    const li = document.createElement('li')
                    li.innerHTML = post.title //Traer por cada fila del JSON irla "imprimiendo" por c/u
                    ul.append(li) //Mando mi "li" a "ul" para de ahí mandar solo "ul"
                })
                document.body.append(ul) //Para que mande la lista completa (ul) al body
            })

console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')

console.log(datos)
*/


//Ejemplo con Async
const ul = document.createElement('ul')

async function cargarDatos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos = await response.json() //Traer los datos en json
    console.log(datos) 
    datos.forEach(function(post){
        const li = document.createElement('li')
        li.innerHTML = post.title //Traer por cada fila del JSON irla "imprimiendo" por c/u
        ul.append(li) //Mando mi "li" a "ul" para de ahí mandar solo "ul"
    })
    document.body.append(ul) //Para que mande la lista completa (ul) al body
}
cargarDatos()
console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')
