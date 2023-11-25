// ? Usamos para repetir um código quando necessario, para digitar menos e otimizar nosso código/tempo ...

// *Exemplo de problema que o FOR resolve

// console.log('Linha 0')
// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')
// console.log('Linha 5')
// ! Aqui temos 6 linhas, mas e se fossem 6 mil?

// *Em vez de escrever a mesma coisa repetida vezes, definimos uma repetição ...

/* 
 * Usando for devemos definir 3 coisas:
 
 * Criar uma variavel para iniciar
 * Criar uma condição para fazer a repetição
 * Criar um incrementador da variavel inicial que serve para terminar a repetição ...
 */

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`)
}

// TODO Podemos usar condicionais de varios jeitos diferentes, pulando de dois em dois, dez em dez etc ...

// ? Verificando numeros pares em um determinado alcance:

for (let i = 1; i <= 10; i++) {
    // retorna true ou false ...
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

// ? Percorrendo um array e fazendo determinada repetição:

const frutas = ['maça', 'pera', 'uva', 'morango', 'banana', 'abacaxi', 'melancia', ]

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`,frutas[i])
}