// 1. Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuánto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible.

// tu código aquí

// 2. Pasa la siguiente condición a una sentencia switch
const diaDeLaSemana = 'martes'
if (diaDeLaSemana === 'lunes') {
  console.log('Es lunes')
} else if (diaDeLaSemana === 'martes') {
  console.log('Es martes')
} else if (diaDeLaSemana === 'miercoles') {
  console.log('Es miercoles')
} else if (diaDeLaSemana === 'jueves') {
  console.log('Es jueves')
} else if (diaDeLaSemana === 'viernes') {
  console.log('Es viernes')
} else if (diaDeLaSemana === 'sabado') {
  console.log('Es sabado')
} else if (diaDeLaSemana === 'domingo') {
  console.log('Es domingo')
} else {
  console.log('No es un día de la semana')
}

// 3. La siguiente función debe recibir como parámetro un string con un nombre del mes y debe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido". Use la sentencia switch.
function estacion(mes) {
  // tu código aquí
}

// 4. Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.

// 5. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
function halfArray(params) {
  // tu código aquí
}

console.log(halfArray([1, 3, 4]))
console.log(halfArray([1, 3, 4, 5, 6, 7]))

// 6. Tenemos un array con varios colores repetidos, pero quisieramos saber cuantos colores diferentes hay en el array y que cantidad de cada color hay. Tu trabajo es crear una función que reciba un array de colores y retorne un objeto con la cantidad de cada color.
const colores = [
  "rojo",
  "verde",
  "verde",
  "azul",
  "amarillo",
  "naranja",
  "rojo",
  "amarillo",
  "rojo",
  "verde",
  "azul",
  "rojo",
]

// El siguiente arreglo de usuario será el que pasarás por argumento a tus funciones de los problemas 7 y 8.
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    genero: "Hombre",
  },
  {
    nombre: "Georg",
    edad: 33,
    genero: "Hombre",
  },
  {
    nombre: "Andrea",
    edad: 42,
    genero: "Mujer",
  },
  {
    nombre: "Oscar",
    edad: 31,
    genero: "Hombre",
  },
  {
    nombre: "Daniela",
    edad: 22,
    genero: "Mujer",
  },
];


// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los nombres de los usuarios que sean mujeres.

// 8. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los usuarios que esten dentro del rango de edad de 20 a 30 años.

// 9. El reto Fizz Buzz: Tenemos un array de números del 1-100, todos los que son múltiplos de 3 deben devolver Fizz, todos los que son múltiplos de 5 deben devolver Buzz y los que son múltiplos de ambos, es decir, 3 y 5, deben devolver Fizz Buzz.

