function prueba(text){

}

const functionOneLine = () =>{
    let i = "hola mundo"
    var boots = [1,2,3,4,'gola', {'hola' : 1, 'mundo': 2}, {'hola': 1, 'mundo': 2}, i]

    console.log(boots[5].mundo)
    console.log(boots[6]['hola'])

    let clave = {'hola': 1, 'mundo' : boots, saludar: function () { return "Esta es una clave" } }

    let camp = {'hola': 1, 'mundo' : boots, saludar: function () { return "Hola bienvenidos" } }

    for (let i = 0; i < boots.length; i ++) {
        console.log(boots[i]);
    }

    while (i <boots.length) {
        console.log(boots[i]);
        i++
    }

    boots.forEach(function (boot, i) {
        console.log(boot);
        console.log(i);
    }
)

let recorridoBoot = boots.map(function (boot, i) {
    console.log(boot);
    console.log(i);
})


    console.log(recorridoBoot)

    let dato = {'hola': 1, 'mundo': boots, saludar: function () {return "hola bienvenidos"}}

    let personas = {nombres: 'Jose Luis', edad:24, ciudad: 'Bogota', sexo:'M'}

    for(let clave in personas) {
        console.log(clave +" : "+personas[clave]);
    }

    Object.keys(personas).forEach(function(Clave){
        console.log(clave +" : "+personas[clave])
    })

    Object.values(personas).forEach(function(valor){
        console.log(valor)
    })

    Object.entries(personas).forEach(function([clave, valor]){console.log(clave + " : " + valor);

    })


    let newObj = {'golan':0}
    console.log(camp.saludar)
    console.log(camp['hola'])

    const bootscamps = () => {
    return "hola este es mi valor"
} 


let sociales = 40

let ingles = 40

let español = 35


let promedio = (sociales + ingles + español) / 2
console.log("el promedio es: " + promedio)

console.log(boots, camp, bootscamps)

//ejercicio 2

let numbers = [10,2,24]
numbers.push(34)
console.log("respuesta de ejercicio 2", numbers)

numbers.pop()
console.log("eliminado", numbers)

numbers.shift()
console.log("10 en tumba", numbers)

numbers.unshift(123, 96, 6)
console.log("más números", numbers)

let doble = numbers.map (a => a*2)
console.log("doble", doble)

let seiyuus = ["soma", "masuda", "toki", "komada"]
let seiyuusapellido = ["saito", "toshiki", "sunichi", "wataru"]
let nombrescompletos = seiyuus.map (a => a+seiyuusapellido)
console.log("los mejores japoneses", nombrescompletos )

const functionToReduce = (data) => {
    if(data != null) {
        return data.reduce((acc, item) => acc + item, 0)
    }
}

console.log(functionToReduce([10,10]))

const functionToSort = (data) => {
    if(data != null) {
        let descent = data.sort((a, b) => b - a)
        console.log(descent)
    }
}

functionToSort(["gato", "perro", "leoprado", "lechuza", "aguila"])

const functionToSplice = (data) => {
    if(data!= null){
        let spliced = data.splice(1, 2, "soma");
        console.log(spliced);
    }
}

functionToSplice(["soma", "masuda", "toki", "komada"])

const functionToFind = (data) => {
    if(data!= null){
        return data.find((item) => item == "masuda")
    }
}

console.log(functionToFind(["soma", "masuda", "toki", "komada"]))



//actividad 1

//Paso 1: Crear un array de numeros 
let numeros = [10, 20, 30, 40]

//Paso 2: Agregar un numero al final de array
numeros.push(50)
console.log("paso 2", numeros)


//Paso 3: Eliminar el primer numero de nuestro array
numeros.pop()
console.log("paso 3", numeros)

//Paso 4: Nuevo array con esos números multiplicados
let numerosnuevos = numeros.map (i => i*5)
console.log("paso 4" , numerosnuevos)



//actividad 2

//Paso 1: Crear un array de edades

let edad = [20, 15, 21, 10,18]

//Paso 2: Filtrar los array mayores a 18

const functionFilter = (data) => {
    return data.filter((num) => num > 18);
}

    console.log("paso 2 actividad 2 ", functionFilter(edad));

    //Paso 3: Calcular cuantas edades superan los 18

    let mayores = edad.filter((num) => num > 18).length

    console.log("¿Cuantas edades superan los 18?" , mayores)

     //Paso 4: Agregar una o más edades al final del array

     edad.push(30, 8, 25)
     console.log("paso 4 actividad 2", edad)

     //actividad 3
     //Paso 1: Crear un array de frutas

     let frutas = ["mango", "cereza", "fresa", "melon", "naranja"]

     //Paso 2: Ordenarlo Alfabéticamente
     
     frutas.sort ()
     console.log("paso 2 actividad 3" , frutas)

      //Paso 3: Frutas que empiecen por la letra c

     let frutasconC = frutas.filter(fruta => fruta.startsWith('c'));

    console.log("frutas con c" , frutasconC)

    //Paso 4: agregar una nueva fruta y que el filtro retorne solamente la nueva fruta

    let frutasnuevas = ["sandia" , "banano"]

    frutas.push(...frutasnuevas)

    let frutasfiltradas = frutas.filter(fruta => frutasnuevas.includes(fruta))

    console.log("nuevasfrutas", frutasfiltradas)
}