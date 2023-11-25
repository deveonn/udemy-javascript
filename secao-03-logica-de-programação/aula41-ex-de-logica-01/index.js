// ? Escreva uma função que recebe 2 números e retorne o maior deles.

// * Minha solução!
// function returnBigger(n1, n2) {
//     if(n1 > n2) {
//         return 'O primeiro número é maior...'
//     } else {
//         return 'O segundo número é maior...'
//     }
// }

// const biggerNumber = returnBigger(13, 10)

// console.log(biggerNumber)

// * Solução do Prof.(refatorada)

// function max(x, y) {
//   if (x > y) return x;
//   return y;
// }

// console.log(max(13, 20));

// * Solução do Prof.(usando operador ternario)

// function max(x, y) {
//     return x > y ? x : y
// }

// console.log(max(22, 20));

// * Solução do Prof.(usando arrow function)

const max = (x, y) => x > y ? x : y

console.log(max(22, 20))