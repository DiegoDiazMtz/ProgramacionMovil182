

async function cargarPares(){
    const numeros= [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]
    const pares= []

    for (let i = 0 ; i< numeros.length; i++){
        if (numeros[i] % 2 === 0){
            pares.push(numeros[i])
        } 
    }
    console.log(pares)

    for (let i = 0 ; i<1; i++){
        console.log(numeros)
    }
}

cargarPares()
