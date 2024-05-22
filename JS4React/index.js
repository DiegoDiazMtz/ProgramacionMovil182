/*
-- Funcion --

    primer ejemplo de funcion
    function suma(a,b){
        return a+b;
    }

    console.log(suma(2,3));


-- Funcion fatArrow -- 

    const suma = (a,b) => {
        return a+b
    }

-- Funcion fatArrow simplificada -- 

    const suma = (a,b) => a+b;


    console.log(suma(2,3));
*/

/* const usuario = {
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

console.log(usuario.enviaCorreo()); */

// Tranajo con el DOM 

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