/* 1. Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи), функция должна вернуть значение числа. Использовать рекурсию. */

// function fibonacci(n) {
//     return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// }
//
// console.log(fibonacci(7));

/* 2. Модернизировать написанную функцию, добавив кэширование (функция '”запоминает”” входной параметр и вычесленное значение, при следующем вызыве с этим же параметром, функция не вычисляет значение, а возвращает из памяти) */

// const getFibonacci = (() => {
//     const cash = {};
//     return (n) => {
//         const result = [0, 1];
//
//         if(n < 2) {
//             return result[n];
//         } else if(cash[n]) {
//             console.log(`Значение взято из кэша n: ${n}`);
//             return cash[n];
//         } else {
//             for(let i = 2; i <= n; i++) {
//                 result.push(result[i - 1] + result[i - 2]);
//             }
//             cash[n] = result[n];
//             return result[n];
//         }
//     }
// })();
//
// console.log(getFibonacci(0));
// console.log(getFibonacci(1));
// console.log(getFibonacci(7));
// console.log(getFibonacci(22));
// console.log(getFibonacci(7));
// console.log(getFibonacci(20));
// console.log(getFibonacci(37));
// console.log(getFibonacci(22));

/* 3. Разработать рекурсивную функцию, принимающую массив, содержащий массивы из двух элементов, в каждом из которых первый элемент является строкой, а второй строкой, числом, логическим значением, объектом, или таким же массивом. Функция должна преобразовать массив в объект.
Пример входного значения:                   Пример возвращаемого объекта:
[                                           {
    [“name”: “Anna”],                           name: “Anna”,
    [“age”: 22],                                age: 22,
    [“pets”: [                                  pets: {
            [“dog”: “Faust”],                   dog: “Faust”,
            [“cat”: “Balthazar”]                cat: “Balthazar”
            ]                                   }
    ]                                       }
] */

// const array = [
//     ['name', 'Anna'],
//     ['age', 22],
//     ['pets',
//         [
//             ['dog', 'Faust'],
//             ['cat', 'Balthazar']
//         ]
//     ]
// ]
//
// function arrayToObject(arr) {
//     return arr.reduce((acc, cur) => {
//         if(Array.isArray(cur[1])) {
//             return {
//                 ...acc,
//                 [cur[0]]: arrayToObject(cur[1]),
//             }
//         } else {
//             return {
//                 ...acc,
//                 [cur[0]]: cur[1],
//             }
//         }
//     },{})
// };
//
// console.log(arrayToObject(array));
