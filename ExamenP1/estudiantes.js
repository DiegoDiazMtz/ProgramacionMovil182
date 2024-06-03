async function MayoresEdad(){
    const estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
        name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },]    
    const mayores = []

    estudiantes.forEach(function(estudiante){
        if (estudiante.age > 18){
            mayores.push(estudiante.name)
        }
    })
    console.log(mayores)

    estudiantes.forEach(function(estudiante){
        console.log(estudiante)
    })

}

MayoresEdad()
