// Ejemplo de funciones y callbacks: se define una función, se pasa como parámetro
// y se ejecuta en diferentes formas (función normal, anónima, autoejecutable).

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

// -----------------------------------------------------------------------------

// Ejemplo de temporizador con setTimeout: ejecuta la función después de 3 segundos.

// function saludar(nombre) {
//     console.log(`Hola mi nombre es: ${nombre}`);
// }

// setTimeout(function() {
//     const nombre = "Sebastián";
//     saludar(nombre);
// }, 3000);

// -----------------------------------------------------------------------------

// Ejemplo de uso de .map() en arrays: transforma cada elemento y devuelve un nuevo array.

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

// -------------------------------------------------------------

// Ejemplo de .map() para duplicar valores numéricos en un array.

// let numbers = [1, 4, 9, 16];

// let doubles = numbers.map((value) => {
//     return value * 2;
// });

// console.log(doubles);

// -------------------------------------------------------------

// Ejemplo de .filter() y .findIndex(): filtra elementos mayores a 13 y busca el índice.

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => {
//     return element > 13;
// }

// let respuesta = array1.filter(isLargeNumber);

// -------------------------------------------------------------

 // Ejemplo de .filter() para obtener palabras con más de 6 caracteres.

// console.log(respuesta);
// console.log(array1.findIndex(isLargeNumber));

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// console.log(words);

// -------------------------------------------------------------

// Ejemplo de .find(): devuelve el primer elemento que cumple la condición (>10).

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => {
//     return element > 10;
// })

// console.log(found);

// -------------------------------------------------------------

 // Ejemplo de .fill(): rellena el array con un valor en posiciones específicas.

// const array1 = [1, 2, 3, 4, 5 , 6, 7];

// console.log(array1.fill("a", 2, 4));

// console.log(array1.fill(5, 1));

// console.log(array1.fill(6));

// -------------------------------------------------------------

// Ejemplo de .some(): verifica si al menos un elemento cumple la condición (es par).

// const array = [1, 2, 3, 4, 5];

// const even = (element) => {
//     return element % 2 === 0;
// }

// console.log(array.some(even));

// -------------------------------------------------------------

 // Ejemplo de .every(): verifica si todos los elementos cumplen la condición (<40).

// const isBelowThreshold = (currentValue) => {
//     return currentValue < 40;
// }

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));

// -------------------------------------------------------------

 // Ejemplo de .concat(): une dos arrays en uno nuevo.

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3);

// -------------------------------------------------------------

 // Ejemplo de .flat(): aplana arrays anidados en diferentes niveles.

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());

// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat());

// console.log(arr2.flat(2));

// console.log(arr2.flat(Infinity));

// --------------------------------------------------------------

// Ejemplo de .flatMap(): combina map y flat en un solo paso.

// const arr1 = [1, 2, 1];
// console.log(arr1);


// const result = arr1.flatMap((num) => {
//     return (num === 2 ? ["a", "b"] : 3)
// });

// console.log(result);

// -------------------------------------------------------------

// Ejemplo de .keys(): crea un iterador para las claves (índices) del array.

// const array1 = ["a", "b", "c"];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);
// }

// -------------------------------------------------------------
// Ejemplo de .lastIndexOf(): encuentra la última posición de un elemento en el array.

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));

console.log(animals.lastIndexOf("Tiger"));