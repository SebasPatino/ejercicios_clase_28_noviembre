// function saludo (nombre) {
//     console.log(`Hola mi nombre es: ${nombre}`);
// };

// const accion = (palabra, callback) => {
//     callback(palabra);
// }

// (function () {
//     console.log("Hola");
// })();

// saludo("Sebas");

// accion("Sebastián", function(nombre){
//     console.log(`Hola mi nombre es: ${nombre}`);
// });

// function accion(parametro) {
//     console.log(`Hola mi nombre es: ${parametro}`);
// }

// function almacenar(callback) {
//     const nombre = "Sebastián";
//     callback(nombre);
// }

// almacenar(accion);

// function saludar(nombre) {
//     console.log(`Hola mi nombre es: ${nombre}`);
// }

// setTimeout(function() {
//     const nombre = "Sebastián";
//     saludar(nombre);
// }, 3000);

// const frutas = ["Manzana", "Banano", "Cereza",];

// // frutas.forEach((a, b, c) => console.log(a));

// const nuevo = frutas.map((v, i, a) => {
//     // if (i == 1) {
//     //     // console.log(v);
//     //     // console.log(i);
//     //     a[i] = "Pera";
//     //     return a[i];
//     // }

//     return v.toUpperCase();
// });

// // console.log(frutas);
// console.log(nuevo);

// let numbers = [1, 4, 9, 16];

// let doubles = numbers.map((value) => {
//     return value * 2;
// });

// console.log(doubles);

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => {
//     return element > 13;
// }

// let respuesta = array1.filter(isLargeNumber);

// console.log(respuesta);
// console.log(array1.findIndex(isLargeNumber));

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// console.log(words);

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => {
//     return element > 10;
// })

// console.log(found);

// const array1 = [1, 2, 3, 4, 5 , 6, 7];

// console.log(array1.fill("a", 2, 4));

// console.log(array1.fill(5, 1));

// console.log(array1.fill(6));

const array = [1, 2, 3, 4, 5];

const even = (element) => {
    return element % 2 === 0;
}

console.log(array.some(even));