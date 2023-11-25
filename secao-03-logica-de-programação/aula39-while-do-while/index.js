// ? Serve para trabalhar com repetições, onde não sabemos quantas vezes é necessario fazer uma repetição exatamente...
// ! NUNCA SE ESQUEÇA de fazer a incrementação da variavel de controle usando while, para não gerar um LAÇO INFINITO...

// let i = 0;

// while ( i <= 10 ) {
//     console.log(i);
    // * deve incrementar!
//     i++;
// }
// console.log('Fim da repetição While')

// const nome = "Luiz";

// while ( i < nome.length) {
//     console.log(nome[i])
//     i++
// }

function randomNumberBetween (min, max) {
    const r = Math.random() * (max - min) + min;
    // Math.floor faz o numero não ter casa decimais!!!
    return Math.floor(r)
}

let randomNumber = randomNumberBetween(0, 50);
console.log(randomNumber);

while (randomNumber !== 10) {
    randomNumber = randomNumberBetween(0, 50);
    console.log(randomNumber);
}
console.log('Fim da repetição while...')


// ! DO WHILE
// * A UNICA diferença entre while, e do while, é que do while verifica o código antes da repetição!!!!!!!!!
// ? O DO WHILE SEMPRE vai executar o código pelo menos uma vez pq ele primeiro executa, depois verifica a condição ...

// faça isso ...
do {
    randomNumber = randomNumberBetween(0, 50);
    console.log(randomNumber);

//   enquanto isso ...
} while(randomNumber !== 10 );

console.log('Fim da repetição do while...')