// ? break e continue são usados dentro de laços(repetições), se necessario 'pular' alguma repetição dentro do laço, podemos usa-los das seguintes maneiras:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ? aqui vamos fazer uma iteração com for of, e no meio dela teremos uma condicional com continue, que vai iniciar outra iteração assim que a iteração do for chegar no numero 2!!!
for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o número dois.");
    // * continue vai iniciar outra iteração de laço a partir do numero dois
    continue;
  }

  // ! sempre use o código que NÃO QUER que seja executado ABAIXO de continue !
  console.log(numero);
}

console.log("------------------------");

// ? a palavra BREAK é bem importante, pois ela pode econimizar recursos de um servidor, por exemplo...
// * Dando um exemplo bem bobo, mas pra exemplificar, suponhamos que eu queira pegar o numero sete no servidor ...
// * Quando for achado o que é necessário nesse laço, iremos para de iterar o array!
// ? break serve para parar uma repetição quando algo acontecer ...

for (let numero of numeros) {
  if (numero === 7) {
    console.log("Achamos o que era necessario, a repetição foi parada...");
    break;
  }

  console.log(numero);
}

// ? Em resumo, CONTINUE vai parar o laço e iniciar outro, o início dessa iteração vai continuar de ontra parte dela, depende de como pedimos para o continue ...
// ? Em resumo, BREAK sairá do laço, assim que algo acontecer, baseado em uma condicional...

// ! Break e Continue funcionam em qualquer tipo de laço de repetição, mas cuidado ao usar WHILE !
// * Sempre faça o incremento da repetição ANTES das palabras BREAK e CONTINUE!!!!!!!!!!

let i = 0;

while(i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número dois');
        i++
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo ...')
        i++
        break
    }

    i++
}