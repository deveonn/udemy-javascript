// Escreva uma função que recebe um número e retorne o seguinte:
// Numero divisivel por 3 = Fizz
// Numero divisil por 5 = Buzz
// Numero divisivel por 3 e 5 = FizzBuzz
// Numero NÃO é divisivel por 3 e 5 = retorna o proprio numero
// Use a função com números de 0 a 100 ok?
// Checar se o numero é realmente um número = retorna o proprio numero

// * Minha solução...

// function fizzBuzz(numero) {

//     for (let i = 1; i < 100; i++) {
//         let num = numero + i
        
//         if (num === 101) break

//         if (typeof num !== 'number') {
//             console.log("Não é um número...")
//             break
//         }

//         if (num % 3 !== 0 && num % 5 !== 0){
//             console.log(num)
//             continue
//         }
    
//         if (num % 3 === 0 && num % 5 === 0){
//             console.log(num + " FizzBuzz")
//             continue
//         }
    
//         if (num % 3 === 0) {
//             console.log(num + " Fizz")
//         }
    
//         if (num % 5 === 0) {
//             console.log(num + " Buzz")
//         }
//     }
// }

// * Solução do Prof.

function fizzBuzz(numero) {
    if(typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
    if(numero % 3 === 0) return "Fizz";
    if(numero % 5 === 0) return "Buzz";
    return numero;
}

// console.log(i, fizzBuzz(i))
for(let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}